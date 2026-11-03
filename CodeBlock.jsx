// Editor-style code card with simple syntax highlighting and clickable blank slots.
const TOKEN = /("[^"\n]*"|'[^'\n]*'|`[^`\n]*`|\/\/.*|\b(?:const|let|var|function|return|if|else|for|while|of|in|new|class|async|await|switch|case|break|continue|try|catch|typeof)\b|\b\d+(?:\.\d+)?\b)/;

// split() with a capture group keeps the matches at odd positions, so we can colour them.
function highlight(text) {
  return text.split(TOKEN).map((p, i) => {
    if (i % 2 === 0) return p;
    const kind = /^["'`]/.test(p) ? 'str' : p.startsWith('//') ? 'com' : /^\d/.test(p) ? 'num' : 'kw';
    return <span key={i} className={`tk-${kind}`}>{p}</span>;
  });
}
export default function CodeBlock({ code, renderSlot }) {
  const parts = code.split(/__(\d)__/); // odd positions are blank numbers
  return (
    <div className="codecard">
      <div className="code-head"><i /><i /><i /><span>syntax-master.js</span></div>
      <pre className="codeblock">
        {parts.map((p, i) => (i % 2 ? <span key={i}>{renderSlot(Number(p))}</span> : <span key={i}>{highlight(p)}</span>))}
      </pre>
    </div>
  );
}
