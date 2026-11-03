import { useState } from 'react';
import { lessons } from '../data/lessons.js';
import { runSnippet } from '../utils/gameLogic.js';
import ProgressBar from '../components/ProgressBar.jsx';
import { lessonDetails, lessonTitles } from '../data/lessonDetails.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Roadmap({ state, actions, go }) {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState(lessons.find((l) => !state.lessons[l.id])?.id ?? null); // opens next unfinished lesson
  const [codes, setCodes] = useState({});   // edited code per lesson
  const [outputs, setOutputs] = useState({}); // run results per lesson
  const done = lessons.filter((l) => state.lessons[l.id]).length;

  return (
    <>
      <h1>{t('roadmap')}</h1>
      <p className="muted">{t('roadmapIntro')}</p>
      <ProgressBar label={t('lessonsCompleted')} value={done} max={lessons.length} />
      <div className="stack top">
        {lessons.map((l, i) => {
          const isDone = !!state.lessons[l.id];
          const isOpen = openId === l.id;
          const code = codes[l.id] ?? l.code;
          const out = outputs[l.id];
          const details = lessonDetails[l.id];
          return (
            <div className="card" key={l.id}>
              <div className="row space">
                <div><strong>{i + 1}. {lessonTitles[l.id][language]}</strong> <span className="tag">{t(topicKeys[l.id])}</span> {isDone && <span className="tag easy">{t('completed')}</span>}</div>
                <button className="btn ghost" onClick={() => setOpenId(isOpen ? null : l.id)}>{isOpen ? t('hide') : t('open')}</button>
              </div>
              {isOpen && (
                <div className="stack top">
                  {language === 'my'
                    ? <details className="lesson-section">
                      <summary>{t('englishDefinition')}</summary>
                      <p>{details.definition.en}</p>
                    </details>
                    : <section className="lesson-section">
                      <h3>{t('englishDefinition')}</h3>
                      <p>{details.definition.en}</p>
                    </section>}
                  <section className="lesson-section">
                    <h3>{language === 'my' ? t('myanmarExplanation') : t('explanation')}</h3>
                    <p>{details.explanation[language]}</p>
                  </section>
                  <section className="lesson-section">
                    <h3>{t('simpleExplanation')}</h3>
                    <p>{details.simple[language]}</p>
                  </section>
                  <section className="lesson-section">
                    <h3>{t('codeExample')}</h3>
                  <textarea className="editor short" value={code} spellCheck={false} aria-label={t('codeExample')}
                    onChange={(e) => setCodes({ ...codes, [l.id]: e.target.value })} />
                  <div className="row">
                    <button className="btn" onClick={() => setOutputs({ ...outputs, [l.id]: runSnippet(code) })}>{t('runCode')}</button>
                    <button className="btn ghost" onClick={() => { setCodes({ ...codes, [l.id]: l.code }); setOutputs({ ...outputs, [l.id]: null }); }}>{t('reset')}</button>
                  </div>
                  {out && (
                    <pre className="output">{out.lines.join('\n') || t('noOutput')}{out.error ? `\n✘ ${out.error}` : ''}</pre>
                  )}
                  </section>
                  <section className="lesson-section">
                    <h3>{t('lineByLine')}</h3>
                    <ol>{details.lines.map((line, index) => <li key={index}>{line[language]}</li>)}</ol>
                  </section>
                  <section className="lesson-section">
                    <h3>{t('realLife')}</h3>
                    <p>{details.realLife[language]}</p>
                  </section>
                  <section className="lesson-section">
                    <h3>{t('commonMistakes')}</h3>
                    <ul>{details.mistakes.map((item, index) => <li key={index}>{item[language]}</li>)}</ul>
                  </section>
                  <section className="lesson-section">
                    <h3>{t('practiceQuestions')}</h3>
                    <ol>{details.practice.map((item, index) => <li key={index}>{item[language]}</li>)}</ol>
                  </section>
                  <div className="callout remember"><strong>{t('keyTakeaways')}</strong><p>{details.takeaway[language]}</p></div>
                  <div className="row wrap">
                    <button className="btn" disabled={isDone} onClick={() => actions.completeLesson(l.id)}>{isDone ? t('completed') : t('understand')}</button>
                    {isDone && i < lessons.length - 1 && <button className="btn ghost" onClick={() => setOpenId(lessons[i + 1].id)}>{t('nextLessonButton')}</button>}
                    <button className="btn ghost" onClick={() => go('quiz')}>{t('practiseQuiz')}</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

const topicKeys = {
  S1: 'startHere', S2: 'startHere', S3: 'startHere', S4: 'variables', S5: 'dataTypes',
  S6: 'operators', S7: 'conditions', S8: 'loops', S9: 'functions',
};
