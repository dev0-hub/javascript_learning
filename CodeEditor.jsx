// A simple controlled <textarea>. "Controlled" = React state owns the text.
export default function CodeEditor({ value, onChange, onRun, onReset, result }) {
  return (
    <div>
      <textarea className="editor" value={value} spellCheck={false}
        onChange={(e) => onChange(e.target.value)} aria-label="Code editor"
        onKeyDown={(e) => {
          if (e.key === 'Tab') { // insert two spaces instead of leaving the box
            e.preventDefault();
            const { selectionStart: s, selectionEnd: en } = e.target;
            onChange(value.slice(0, s) + '  ' + value.slice(en));
            requestAnimationFrame(() => { e.target.selectionStart = e.target.selectionEnd = s + 2; });
          }
        }} />
      <div className="row">
        <button className="btn" onClick={onRun}>Run tests</button>
        <button className="btn ghost" onClick={onReset}>Reset code</button>
      </div>
      {result && <div className={`result ${result.ok ? 'ok' : 'bad'}`}>{result.ok ? '✔ ' : '✘ '}{result.msg}</div>}
    </div>
  );
}
