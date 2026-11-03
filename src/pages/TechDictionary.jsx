import { useMemo, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { terms } from '../data/technicalTerms.js';

export default function TechDictionary() {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    if (!needle) return terms;
    return terms.filter((item) => [item.term, item.meaning, item.simple.en, item.simple.my, item.related.join(' ')]
      .some((value) => value.toLocaleLowerCase().includes(needle)));
  }, [query]);

  return (
    <>
      <h1>{t('dictionary')}</h1>
      <p className="muted">{t('dictionaryIntro')} · {terms.length} {t('words')}</p>
      <label className="sr-only" htmlFor="dictionary-search">{t('searchDictionary')}</label>
      <input id="dictionary-search" className="input dictionary-search" type="search" value={query}
        placeholder={t('searchDictionary')} onChange={(event) => setQuery(event.target.value)} />
      {filtered.length === 0
        ? <p className="muted">{t('noResults')}</p>
        : <div className="grid">
          {filtered.map((item) => (
            <article className="card stack" key={item.term}>
              <div><h2>{item.term}</h2><strong>{item.meaning}</strong></div>
              <p>{item.simple[language]}</p>
              <strong className="small">{t('codeExample')}</strong>
              <code className="dictionary-example">{item.example}</code>
              <div className="small muted">{t('relatedTerms')}: {item.related.join(', ')}</div>
            </article>
          ))}
        </div>}
    </>
  );
}
