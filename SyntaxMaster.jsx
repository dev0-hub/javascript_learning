import { useState } from 'react';
import SyntaxChallenge from '../components/SyntaxChallenge.jsx';
import DashboardCard from '../components/DashboardCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import { syntaxQuestions } from '../data/syntaxQuestions.js';
import { pickRound, calcReward, ORDER } from '../utils/syntaxLogic.js';

const MODES = [
  ['mixed', '🎲', 'Mixed Challenge', 'All four modes, 10 questions'],
  ['fill', '✏️', 'Fill in the Blanks', 'Pick the missing character'],
  ['keyword', '🔑', 'Missing Keywords', 'Pick the missing keyword'],
  ['symbol', '➕', 'Operators & Symbols', 'Pick the missing operator or symbol'],
  ['drag', '🧩', 'Drag & Drop Puzzle', 'Fill several blanks'],
];

export default function SyntaxMaster({ state, actions }) {
  const sx = state.syntax;
  const [stage, setStage] = useState('menu'); // menu | play | done
  const [cfg, setCfg] = useState({ mode: 'mixed', difficulty: 'Easy', seconds: 30 });
  const [round, setRound] = useState([]);
  const [idx, setIdx] = useState(0);
  const [stats, setStats] = useState({ correct: 0, xp: 0, streak: 0, best: 0 });

  const unlocked = (d) => ORDER.indexOf(d) === 0 || sx.cleared[ORDER[ORDER.indexOf(d) - 1]];
  const start = () => { setRound(pickRound(syntaxQuestions, cfg, sx.seen)); setIdx(0); setStats({ correct: 0, xp: 0, streak: 0, best: 0 }); setStage('play'); };

  // Called by the challenge when an answer (or timeout) is final. Returns the reward to display.
  function onAnswer(q, correct, hintUsed) {
    const streak = correct ? stats.streak + 1 : 0;
    const r = calcReward(q.difficulty, correct, hintUsed, streak);
    setStats((s) => ({ correct: s.correct + (correct ? 1 : 0), xp: s.xp + r.gained + r.bonus, streak, best: Math.max(s.best, streak) }));
    actions.syntaxAnswer(q.id, r.gained + r.bonus);
    return { ...r, streak };
  }
  function next() {
    if (idx + 1 < round.length) { setIdx(idx + 1); return; }
    actions.syntaxFinish(cfg.difficulty, stats.correct / round.length, stats.best);
    setStage('done');
  }

  if (stage === 'play') {
    return (
      <>
        <div className="row space wrap">
          <h1>Syntax Master</h1>
          <span className="muted">Question {idx + 1}/{round.length} · 🔥 {stats.streak} · {stats.xp} XP</span>
        </div>
        <ProgressBar value={idx} max={round.length} />
        <div className="top"><SyntaxChallenge key={round[idx].id} q={round[idx]} seconds={cfg.seconds} onAnswer={onAnswer} onNext={next} isLast={idx + 1 === round.length} /></div>
      </>
    );
  }
  if (stage === 'done') {
    const pct = Math.round((stats.correct / round.length) * 100);
    const passed = pct >= 60;
    const nextLevel = ORDER[ORDER.indexOf(cfg.difficulty) + 1];
    return (
      <div className="card stack pop">
        <h1>{passed ? '🏆 Round complete!' : 'Round finished'}</h1>
        <p>Score: <strong>{stats.correct}/{round.length}</strong> ({pct}%) · XP earned: <strong>{stats.xp}</strong> · Best streak: <strong>{stats.best}</strong></p>
        <p>{passed ? (nextLevel ? `${cfg.difficulty} cleared! ${nextLevel} is unlocked.` : 'Hard cleared. You are a Syntax Master!') : 'Score 60% or more to clear this level. Try again with hints.'}</p>
        <div className="row wrap"><button className="btn" onClick={start}>Play again</button><button className="btn ghost" onClick={() => setStage('menu')}>Back to menu</button></div>
      </div>
    );
  }
  return (
    <>
      <h1>Syntax Master</h1>
      <p className="muted">Complete the code. Correct answers earn XP, streaks earn bonuses, and clearing a level unlocks the next.</p>
      <div className="grid">
        <DashboardCard title="Rounds played" value={sx.rounds} />
        <DashboardCard title="Best streak" value={sx.bestStreak} hint="🔥 in a row" />
        <DashboardCard title="Questions seen" value={Object.keys(sx.seen).length} hint={`of ${syntaxQuestions.length}`} />
      </div>
      <h2>1. Choose a game mode</h2>
      <div className="grid">
        {MODES.map(([id, icon, name, desc]) => (
          <button key={id} className={`card mode ${cfg.mode === id ? 'active' : ''}`} onClick={() => setCfg({ ...cfg, mode: id })}>
            <span className="badge-icon">{icon}</span><strong>{name}</strong><span className="muted small">{desc}</span>
          </button>
        ))}
      </div>
      <h2>2. Difficulty</h2>
      <div className="row wrap">
        {ORDER.map((d) => (
          <button key={d} disabled={!unlocked(d)} className={`btn ${cfg.difficulty === d ? '' : 'ghost'}`} onClick={() => setCfg({ ...cfg, difficulty: d })}>
            {unlocked(d) ? '' : '🔒 '}{d}{sx.cleared[d] ? ' ✔' : ''}
          </button>
        ))}
      </div>
      <p className="muted small">Easy: variables, data types, semicolons · Medium: operators, conditions, loops, functions · Hard: arrays, objects, DOM. Clear a level with 60%+ to unlock the next.</p>
      <h2>3. Timer</h2>
      <div className="row">
        {[15, 30].map((s) => <button key={s} className={`btn ${cfg.seconds === s ? '' : 'ghost'}`} onClick={() => setCfg({ ...cfg, seconds: s })}>{s} seconds</button>)}
      </div>
      <div className="top"><button className="btn" onClick={start}>Start game</button></div>
    </>
  );
}
