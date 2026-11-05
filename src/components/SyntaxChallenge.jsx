import { useEffect, useMemo, useState } from 'react';
import CodeBlock from './CodeBlock.jsx';
import ProgressBar from './ProgressBar.jsx';
import { shuffle, fillCode, isValidSyntax } from '../utils/syntaxLogic.js';
import { getSyntaxQuestionContent } from '../data/syntaxQuestionTranslations.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

// One question for any of the 4 modes. Single-blank modes answer on click; drag mode has a Check button.
export default function SyntaxChallenge({ q, seconds, onAnswer, onNext, isLast }) {
  const { language, t } = useLanguage();
  const content = getSyntaxQuestionContent(q, language);
  const isDrag = q.mode === 'drag';
  const chips = useMemo(() => shuffle([...q.answers, ...q.distractors].map((text, id) => ({ id, text }))), [q]);
  const [slots, setSlots] = useState(() => Array(q.answers.length).fill(null)); // chip ids per blank
  const [selected, setSelected] = useState(null); // tapped chip waiting for a slot
  const [ghost, setGhost] = useState(null);       // finger-drag preview on touch screens
  const [hint, setHint] = useState(false);
  const [left, setLeft] = useState(seconds);
  const [result, setResult] = useState(null);
  const textOf = (id) => chips.find((c) => c.id === id)?.text ?? null;
  const texts = (s = slots) => s.map((id) => (id === null ? '' : textOf(id)));

  function finish(s, timeout = false) {
    const t = texts(s);
    // Correct only if every blank matches AND the finished code compiles.
    const correct = !timeout && t.every((x, i) => x === q.answers[i]) && isValidSyntax(fillCode(q.code, t));
    setResult({ correct, timeout, ...onAnswer(q, correct, hint) });
  }
  // Countdown: one tick per second until answered or time is up.
  useEffect(() => {
    if (result) return;
    if (left <= 0) { finish(slots, true); return; }
    const t = setTimeout(() => setLeft((l) => l - 1), 1000);
    return () => clearTimeout(t);
  }, [left, result]);

  function place(slot, chipId) {
    if (result) return;
    const next = slots.map((v, i) => (i === slot ? chipId : v === chipId ? null : v));
    setSlots(next); setSelected(null);
    if (!isDrag) finish(next);
  }
  // Touch dragging: HTML5 drag-and-drop does not fire on phones, so we follow the finger ourselves.
  useEffect(() => {
    if (!ghost) return;
    const move = (e) => setGhost((g) => g && { ...g, x: e.clientX, y: e.clientY });
    const up = (e) => {
      const slot = document.elementFromPoint(e.clientX, e.clientY)?.closest('[data-slot]');
      if (slot) place(Number(slot.dataset.slot), ghost.id);
      setGhost(null);
    };
    window.addEventListener('pointermove', move); window.addEventListener('pointerup', up);
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); };
  }, [ghost?.id]);

  const renderSlot = (i) => {
    const t = slots[i] === null ? null : textOf(slots[i]);
    let cls = 'slot';
    if (t !== null) cls += ' filled';
    if (result) cls += t === q.answers[i] && result.correct ? ' right' : t === q.answers[i] ? ' right' : ' wrong';
    return (
      <span className={cls} data-slot={i}
        onClick={() => { if (result) return; if (selected !== null) place(i, selected); else if (t !== null && isDrag) setSlots(slots.map((v, k) => (k === i ? null : v))); }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); place(i, Number(e.dataTransfer.getData('text/plain'))); }}>
        {t ?? '□'}
      </span>
    );
  };

  return (
    <div className={`card ${result ? (result.correct ? 'pop' : 'shake') : ''}`}>
      <div className="row space wrap">
        <span><span className={`tag ${q.difficulty.toLowerCase()}`}>{t(q.difficulty.toLowerCase())}</span> <span className="tag">{t(modeKeys[q.mode])}</span></span>
        <button className="btn ghost" disabled={hint || !!result} onClick={() => setHint(true)}>💡 {t('hint')}</button>
      </div>
      <ProgressBar label="⏱ Time left" value={left} max={seconds} />
      <CodeBlock code={q.code} renderSlot={renderSlot} />
      {hint && <p className="callout"><strong>{t('hintLabel')}:</strong> {content.hint}</p>}
      <div className="chips">
        {chips.map((c) => {
          const used = slots.includes(c.id);
          return isDrag ? (
            <button key={c.id} draggable={!used && !result} disabled={used || !!result}
              className={`chip ${used ? 'used' : ''} ${selected === c.id ? 'sel' : ''}`}
              onClick={() => setSelected(selected === c.id ? null : c.id)}
              onDragStart={(e) => e.dataTransfer.setData('text/plain', String(c.id))}
              onPointerDown={(e) => { if (e.pointerType !== 'mouse' && !used && !result) setGhost({ id: c.id, x: e.clientX, y: e.clientY }); }}>
              {c.text}
            </button>
          ) : (
            <button key={c.id} className="chip" disabled={!!result} onClick={() => place(0, c.id)}>{c.text}</button>
          );
        })}
      </div>
      {isDrag && !result && <p className="muted small">{t('dragHelp')}</p>}
      {isDrag && !result && <button className="btn" disabled={slots.includes(null)} onClick={() => finish(slots)}>{t('checkAnswer')}</button>}
      {ghost && <div className="drag-preview" style={{ left: ghost.x, top: ghost.y }}>{textOf(ghost.id)}</div>}
      {result && (
        <div className={`feedback ${result.correct ? 'good' : 'bad'}`}>
          <strong>{result.correct ? `✔ ${t('correct')} +${result.gained + result.bonus} ${t('xp')}` : result.timeout ? `✘ ${t('timeUp')}` : `✘ ${t('noXp')}`}</strong>
          {result.bonus > 0 && <div>🔥 {t('streakBonus')} +{result.bonus} XP ({result.streak} {t('inARow')})</div>}
          {!result.correct && <div>{t('answer')} <code>{q.answers.join('  ')}</code></div>}
          <p>{content.explanation}</p>
          <button className="btn" onClick={onNext}>{isLast ? t('finishRound') : t('nextChallenge')}</button>
        </div>
      )}
    </div>
  );
}
const modeKeys = { fill: 'fillBlanks', keyword: 'missingKeywords', symbol: 'operatorsSymbols', drag: 'dragDrop' };
