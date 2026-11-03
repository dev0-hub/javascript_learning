import { useState } from 'react';
import { lessons } from '../data/lessons.js';
import { runSnippet } from '../utils/gameLogic.js';
import ProgressBar from '../components/ProgressBar.jsx';

export default function Roadmap({ state, actions, go }) {
  const [openId, setOpenId] = useState(lessons.find((l) => !state.lessons[l.id])?.id ?? null); // opens next unfinished lesson
  const [codes, setCodes] = useState({});   // edited code per lesson
  const [outputs, setOutputs] = useState({}); // run results per lesson
  const done = lessons.filter((l) => state.lessons[l.id]).length;

  return (
    <>
      <h1>Learning Roadmap</h1>
      <p className="muted">New to coding? Start at lesson 1 and go in order. Each lesson takes about 5 minutes. Finishing one gives +20 XP.</p>
      <ProgressBar label="Lessons completed" value={done} max={lessons.length} />
      <div className="stack top">
        {lessons.map((l, i) => {
          const isDone = !!state.lessons[l.id];
          const isOpen = openId === l.id;
          const code = codes[l.id] ?? l.code;
          const out = outputs[l.id];
          return (
            <div className="card" key={l.id}>
              <div className="row space">
                <div><strong>{i + 1}. {l.title}</strong> <span className="tag">{l.topic}</span> {isDone && <span className="tag easy">Done</span>}</div>
                <button className="btn ghost" onClick={() => setOpenId(isOpen ? null : l.id)}>{isOpen ? 'Hide' : 'Open'}</button>
              </div>
              {isOpen && (
                <div className="stack top">
                  <p>{l.plain}</p>
                  <div className="callout real"><strong>Real-world picture</strong><p>{l.real}</p></div>
                  <strong>Try it: edit the code, then press Run</strong>
                  <textarea className="editor short" value={code} spellCheck={false} aria-label="Lesson code"
                    onChange={(e) => setCodes({ ...codes, [l.id]: e.target.value })} />
                  <div className="row">
                    <button className="btn" onClick={() => setOutputs({ ...outputs, [l.id]: runSnippet(code) })}>Run code</button>
                    <button className="btn ghost" onClick={() => { setCodes({ ...codes, [l.id]: l.code }); setOutputs({ ...outputs, [l.id]: null }); }}>Reset</button>
                  </div>
                  {out && (
                    <pre className="output">{out.lines.join('\n') || '(no output: use console.log to show something)'}{out.error ? `\n✘ ${out.error}` : ''}</pre>
                  )}
                  <div className="callout remember"><strong>Remember it</strong><p>{l.remember}</p></div>
                  <div className="row wrap">
                    <button className="btn" disabled={isDone} onClick={() => actions.completeLesson(l.id)}>{isDone ? 'Completed ✔' : 'I understand (+20 XP)'}</button>
                    {isDone && i < lessons.length - 1 && <button className="btn ghost" onClick={() => setOpenId(lessons[i + 1].id)}>Next lesson</button>}
                    <button className="btn ghost" onClick={() => go('quiz')}>Practise in Quiz Arena</button>
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
