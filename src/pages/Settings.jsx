import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Settings({ state, actions }) {
  const { language, setLanguage, t } = useLanguage();
  return (
    <>
      <h1>{t('settings')}</h1>
      <div className="card stack">
        <label className="stack">{t('displayName')}
          <input className="input" value={state.name} maxLength={20}
            onChange={(e) => actions.update({ name: e.target.value || t('enterName') })} />
        </label>
      </div>
      <section className="card stack top" aria-labelledby="language-settings-title">
        <div>
          <h2 id="language-settings-title">{t('languageRegion')}</h2>
          <p className="muted">{t('chooseLanguage')}</p>
        </div>
        <fieldset className="language-options">
          <legend className="sr-only">{t('selectLanguage')}</legend>
          {[
            { value: 'my', flag: '🇲🇲', native: language === 'my' ? 'Myanmar' : 'မြန်မာဘာသာ', name: t('myanmarLanguage') },
            { value: 'en', flag: '🇬🇧', native: 'English', name: t('englishLanguage') },
          ].map((option) => (
            <label key={option.value} className={`language-card ${language === option.value ? 'selected' : ''}`}>
              <input type="radio" name="language" value={option.value} checked={language === option.value}
                onChange={() => setLanguage(option.value)} />
              <span className="language-flag" aria-hidden="true">{option.flag}</span>
              <span className="language-names"><strong>{option.name}</strong><span className="muted small">{option.native}</span></span>
              <span className="language-indicator" aria-hidden="true">{language === option.value ? '✓' : ''}</span>
            </label>
          ))}
        </fieldset>
        <span className="muted small">{t('settingsSaved')}</span>
      </section>
      <div className="card stack top">
        <div className="row">
          <span>{t('theme')}: {t(state.theme)}</span>
          <button className="btn ghost" onClick={() => actions.update({ theme: state.theme === 'dark' ? 'light' : 'dark' })}>{t('switchTheme')}</button>
        </div>
        <div>
          <button className="btn danger" onClick={() => { if (window.confirm(t('resetConfirm'))) actions.reset(); }}>{t('resetProgress')}</button>
        </div>
      </div>
    </>
  );
}
