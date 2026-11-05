import { useRef } from 'react';

export default function GhostEditor({ target, typed, onChange, onAccept, locked, label }) {
  const ref = useRef(null);
  let correctPrefix = 0;
  while (correctPrefix < typed.length && typed[correctPrefix] === target[correctPrefix]) correctPrefix++;
  const currentLine = (typed.match(/\n/g) || []).length;
  const completedLines = (target.slice(0, correctPrefix).match(/\n/g) || []).length;

  const renderCharacter = (index) => {
    const character = target[index];
    const newline = character === '\n';
    if (index < typed.length) {
      if (typed[index] === character) return newline ? null : <span key={index} className="ok">{character}</span>;
      return <span key={index} className="bad">{typed[index] === '\n' ? '↵' : typed[index] === ' ' ? '·' : typed[index]}</span>;
    }
    if (index === typed.length) return <span key={index} className="next">{newline ? '↵' : character}</span>;
    return newline ? null : <span key={index} className="gh">{character}</span>;
  };

  let offset = 0;
  const lines = target.split('\n');
  return (
    <div className="ghost-ed" onClick={() => ref.current?.focus()}>
      {lines.map((line, lineIndex) => {
        const start = offset;
        offset += line.length + 1;
        const indexes = Array.from({ length: line.length + (lineIndex < lines.length - 1 ? 1 : 0) }, (_, index) => start + index);
        return (
          <div key={lineIndex} data-n={lineIndex + 1}
            className={`gl ${lineIndex === currentLine ? 'cur' : ''} ${lineIndex < completedLines ? 'done' : ''}`}>
            {indexes.map(renderCharacter)}{'\u200b'}
          </div>
        );
      })}
      <textarea ref={ref} className="ghost-input" value={typed} disabled={locked} aria-label={label}
        autoCapitalize="off" autoCorrect="off" autoComplete="off" spellCheck={false}
        onChange={(event) => onChange(event.target.value.replace(/\r/g, ''))}
        onKeyDown={(event) => {
          if (event.key === 'Tab') {
            event.preventDefault();
            onAccept();
          }
        }} />
    </div>
  );
}
