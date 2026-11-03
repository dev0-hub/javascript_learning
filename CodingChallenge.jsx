import { useState } from 'react';
import CodeEditor from '../components/CodeEditor.jsx';
import { challenges } from '../data/challenges.js';
import { runTests } from '../utils/gameLogic.js';

export default function CodingChallenge({ state, actions }) {
  const [id, setId] = useState(challenges[0].id);
  const [codes, setCodes] = useState({}); // remembers code per challenge
  const [result, setResult] = useState(null);
  const c = challenges.find((x) => x.id === id);
  const code = codes[id] ?? c.starter;

  const run = () => {
    const r = runTests(code, c);
    setResult(r);
    if (r.ok) actions.solve(c);
  };

  return (
    <>
      <h1>Coding Challenges</h1>
      <div className="row wrap">
        {challenges.map((x) => (
          <button key={x.id} className={`btn ${x.id === id ? '' : 'ghost'}`} onClick={() => { setId(x.id); setResult(null); }}>
            {state.solved[x.id] ? '✔ ' : ''}{x.title}
          </button>
        ))}
      </div>
      <div className="card stack top">
        <div className="row space"><strong>{c.title}</strong><span className={`tag ${c.difficulty.toLowerCase()}`}>{c.difficulty} · +{c.xp} XP</span></div>
        <p>{c.prompt}</p>
        <CodeEditor value={code} result={result} onChange={(v) => setCodes({ ...codes, [id]: v })}
          onRun={run} onReset={() => { setCodes({ ...codes, [id]: c.starter }); setResult(null); }} />
      </div>
    </>
  );
}
