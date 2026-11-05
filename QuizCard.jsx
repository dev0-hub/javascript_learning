// One question. `picked` is the chosen index (or null). Parent decides what happens on pick.
export default function QuizCard({ q, picked, onPick, onNext, isLast, alreadyEarned }) {
  const answered = picked !== null;
  return (
    <div className="card">
      <div className="row space">
        <span className={`tag ${q.difficulty.toLowerCase()}`}>{q.difficulty}</span>
        <span className="muted small">{alreadyEarned ? 'XP already earned' : `+${q.xp} XP`}</span>
      </div>
      <pre className="question">{q.question}</pre>
      <div className="options">
        {q.options.map((opt, i) => {
          let cls = 'option';
          if (answered && i === q.answer) cls += ' right';
          else if (answered && i === picked) cls += ' wrong';
          return <button key={i} className={cls} disabled={answered} onClick={() => onPick(i)}>{opt}</button>;
        })}
      </div>
      {answered && (
        <div className="explain">
          <strong>{picked === q.answer ? 'Correct!' : `Not quite. Answer: ${q.options[q.answer]}`}</strong>
          <p>{q.explanation}</p>
          <button className="btn" onClick={onNext}>{isLast ? 'Finish' : 'Next question'}</button>
        </div>
      )}
    </div>
  );
}
