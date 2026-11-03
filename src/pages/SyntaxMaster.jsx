import { useState } from 'react';
import SyntaxChallenge from '../components/SyntaxChallenge.jsx';
import DashboardCard from '../components/DashboardCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import { syntaxQuestions } from '../data/syntaxQuestions.js';
import { pickRound, calcReward, ORDER } from '../utils/syntaxLogic.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const MODES = [
  ['mixed', '🎲', 'mixedChallenge', 'allFourModes'],
  ['fill', '✏️', 'fillBlanks', 'missingCharacter'],
  ['keyword', '🔑', 'missingKeywords', 'pickKeyword'],
  ['symbol', '➕', 'operatorsSymbols', 'pickOperator'],
  ['drag', '🧩', 'dragDrop', 'fillSeveralBlanks'],
];

export default function SyntaxMaster({ state, actions }) {
  const { t } = useLanguage();
  const sx = state.syntax;
  const [stage, setStage] = useState('menu'); // menu | play | done
  const [cfg, setCfg] = useState({ mode: state.syntax.mode ?? 'mixed', difficulty: 'Easy', seconds: 30 });
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
          <h1>{t('syntax')}</h1>
          <span className="muted">{t('question')} {idx + 1}/{round.length} · 🔥 {stats.streak} · {stats.xp} XP</span>
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
        <h1>{passed ? `🏆 ${t('roundComplete')}` : t('roundFinished')}</h1>
        <p>{t('score')}: <strong>{stats.correct}/{round.length}</strong> ({pct}%) · {t('xp')}: <strong>{stats.xp}</strong> · {t('bestStreakResult')}: <strong>{stats.best}</strong></p>
        <p>{passed ? (nextLevel ? `${t(nextLevel.toLowerCase())} ${t('clearedUnlocked')}` : t('hardCleared')) : t('passLevel')}</p>
        <div className="row wrap"><button className="btn" onClick={start}>{t('playAgain')}</button><button className="btn ghost" onClick={() => setStage('menu')}>{t('backToMenu')}</button></div>
      </div>
    );
  }
  return (
    <>
      <h1>{t('syntax')}</h1>
      <p className="muted">{t('completeCode')}</p>
      <div className="grid">
        <DashboardCard title={t('roundsPlayed')} value={sx.rounds} />
        <DashboardCard title={t('bestStreak')} value={sx.bestStreak} hint={`🔥 ${t('inARow')}`} />
        <DashboardCard title={t('questionsSeen')} value={Object.keys(sx.seen).length} hint={`${t('of')} ${syntaxQuestions.length}`} />
      </div>
      <h2>{t('chooseMode')}</h2>
      <div className="grid">
        {MODES.map(([id, icon, name, desc]) => (
          <button key={id} className={`card mode ${cfg.mode === id ? 'active' : ''}`}
            onClick={() => { setCfg({ ...cfg, mode: id }); actions.update({ syntax: { ...state.syntax, mode: id } }); }}>
            <span className="badge-icon">{icon}</span><strong>{t(name)}</strong><span className="muted small">{t(desc)}</span>
          </button>
        ))}
      </div>
      <h2>2. {t('difficulty')}</h2>
      <div className="row wrap">
        {ORDER.map((d) => (
          <button key={d} disabled={!unlocked(d)} className={`btn ${cfg.difficulty === d ? '' : 'ghost'}`} onClick={() => setCfg({ ...cfg, difficulty: d })}>
            {unlocked(d) ? '' : '🔒 '}{t(d.toLowerCase())}{sx.cleared[d] ? ' ✔' : ''}
          </button>
        ))}
      </div>
      <p className="muted small">{t('difficultyGuide')}</p>
      <h2>3. {t('timer')}</h2>
      <div className="row">
        {[15, 30].map((s) => <button key={s} className={`btn ${cfg.seconds === s ? '' : 'ghost'}`} onClick={() => setCfg({ ...cfg, seconds: s })}>{s} {t('seconds')}</button>)}
      </div>
      <div className="top"><button className="btn" onClick={start}>{t('startGame')}</button></div>
    </>
  );
}
