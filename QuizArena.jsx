import { useState } from 'react';
import QuizCard from '../components/QuizCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import { questions, topics } from '../data/questions.js';

export default function QuizArena({ state, actions }) {
  const [topic, setTopic] = useState(null);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const list = questions.filter((q) => q.topic === topic);
  const start = (t) => { setTopic(t); setIndex(0); setPicked(null); setScore(0); setFinished(false); };

  if (!topic) {
    return (
      <>
        <h1>Quiz Arena</h1>
        <p className="muted">Pick a topic. Each correct answer earns XP the first time.</p>
        <div className="grid">
          {topics.map((t) => {
            const all = questions.filter((q) => q.topic === t);
            const got = all.filter((q) => state.correct[q.id]).length;
            return (
              <div className="card stack" key={t}>
                <strong>{t}</strong>
                <ProgressBar value={got} max={all.length} />
                <button className="btn" onClick={() => start(t)}>Start</button>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  if (finished) {
    return (
      <div className="card stack">
        <h1>{topic} complete</h1>
        <p>You got {score} of {list.length} correct this round.</p>
        <div className="row">
          <button className="btn" onClick={() => start(topic)}>Try again</button>
          <button className="btn ghost" onClick={() => setTopic(null)}>Choose topic</button>
        </div>
      </div>
    );
  }

  const q = list[index];
  return (
    <>
      <div className="row space"><h1>{topic}</h1><span className="muted">Question {index + 1} / {list.length}</span></div>
      <QuizCard q={q} picked={picked} isLast={index === list.length - 1} alreadyEarned={!!state.correct[q.id]}
        onPick={(i) => { if (actions.answer(q, i)) setScore((s) => s + 1); setPicked(i); }}
        onNext={() => { if (index === list.length - 1) setFinished(true); else { setIndex(index + 1); setPicked(null); } }} />
    </>
  );
}
