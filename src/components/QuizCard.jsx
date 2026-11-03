import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

// One question. `picked` is the chosen index (or null). Parent decides what happens on pick.
export default function QuizCard({ q, content, picked, onPick, onNext, isLast, alreadyEarned }) {
  const { t } = useLanguage();
  const [showHint, setShowHint] = useState(false);
  const answered = picked !== null;
  return (
    <div className="card">
      <div className="row space">
        <span className={`tag ${q.difficulty.toLowerCase()}`}>{t(q.difficulty.toLowerCase())}</span>
        <span className="muted small">{alreadyEarned ? t('xpEarned') : `+${q.xp} ${t('xp')}`}</span>
      </div>
      <pre className="question">{content.question}</pre>
      <div className="options">
        {content.options.map((opt, i) => {
          let cls = 'option';
          if (answered && i === q.answer) cls += ' right';
          else if (answered && i === picked) cls += ' wrong';
          return <button key={i} className={cls} disabled={answered} onClick={() => onPick(i)}>{opt}</button>;
        })}
      </div>
      {!answered && <button className="btn ghost top" onClick={() => setShowHint((visible) => !visible)}>{showHint ? t('hide') : t('hintLabel')}</button>}
      {showHint && !answered && <p className="callout top">{content.hint}</p>}
      {answered && (
        <div className="explain">
          <strong>{picked === q.answer ? t('correct') : `${t('notQuite')} ${content.options[q.answer]}`}</strong>
          <h3>{t('answerExplanation')}</h3>
          <p>{content.explanation}</p>
          <button className="btn" onClick={onNext}>{isLast ? t('finish') : t('nextQuestion')}</button>
        </div>
      )}
    </div>
  );
}
