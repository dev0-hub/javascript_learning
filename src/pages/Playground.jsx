import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import useWorkspaceFullscreen from '../hooks/useWorkspaceFullscreen.js';

// Text for this page (English / Myanmar).
const TEXT = {
  en: { title: 'Live Playground', intro: 'Write HTML, CSS and JavaScript on the left. See the real web page on the right, exactly like a website would show it.',
    run: 'Run', reset: 'Reset', auto: 'Auto-run while typing', templates: 'Load an example…', code: 'Code', result: 'Result', console: 'Console',
    empty: 'console.log() messages and errors appear here.', tip: 'Tip: change a word, a colour or a number in the code and watch the result change.',
    fullscreen: 'Fullscreen', exitFullscreen: 'Exit fullscreen' },
  my: { title: 'တိုက်ရိုက် Code စမ်းသပ်ခန်း', intro: 'ဘယ်ဘက်တွင် HTML, CSS, JavaScript ရေးပါ။ ညာဘက်တွင် ဝဘ်စာမျက်နှာ၏ ရလဒ်ကို တိုက်ရိုက်ကြည့်ပါ။',
    run: 'Run', reset: 'မူလအတိုင်း', auto: 'ရေးနေစဉ် အလိုအလျောက် Run', templates: 'ဥပမာတစ်ခု ရွေးပါ…', code: 'Code', result: 'ရလဒ်', console: 'Console',
    empty: 'console.log() စာများနှင့် အမှားများ ဤနေရာတွင် ပေါ်မည်။', tip: 'အကြံ: Code ထဲက စာလုံး၊ အရောင် သို့မဟုတ် ကိန်းဂဏန်းကို ပြောင်းပြီး ရလဒ်ပြောင်းသည်ကို ကြည့်ပါ။',
    fullscreen: 'မျက်နှာပြင်အပြည့်', exitFullscreen: 'မျက်နှာပြင်အပြည့်မှ ထွက်ရန်' },
};

const TEMPLATES = [
  { id: 'date', name: { en: 'Button shows date and time', my: 'ခလုတ်နှိပ်၍ ရက်စွဲပြခြင်း' }, code: `<!DOCTYPE html>
<html>
<body>
<h1>My First JavaScript</h1>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="demo"></p>

</body>
</html>` },
  { id: 'color', name: { en: 'Change a colour', my: 'အရောင်ပြောင်းခြင်း' }, code: `<!DOCTYPE html>
<html>
<body>
<h1 id="title">Hello, JS Quest!</h1>
<button onclick="changeColor()">Change colour</button>

<script>
function changeColor() {
  document.getElementById("title").style.color = "tomato";
  console.log("The colour was changed");
}
</script>
</body>
</html>` },
  { id: 'counter', name: { en: 'Click counter', my: 'ခလုတ်နှိပ်ကောင်တာ' }, code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: sans-serif; text-align: center; padding: 30px; }
  #count { font-size: 64px; margin: 10px; }
  button { font-size: 20px; padding: 8px 20px; }
</style>
</head>
<body>
<div id="count">0</div>
<button id="plus">+1</button>

<script>
let count = 0;
document.getElementById("plus").addEventListener("click", () => {
  count = count + 1;
  document.getElementById("count").textContent = count;
  console.log("count is", count);
});
</script>
</body>
</html>` },
  { id: 'card', name: { en: 'Profile card (CSS design)', my: 'ကတ်ဒီဇိုင်း (CSS)' }, code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { background: #eef1f8; font-family: sans-serif; display: grid; place-items: center; height: 100vh; margin: 0; }
  .card { background: white; padding: 24px 32px; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,.15); text-align: center; }
  .avatar { width: 80px; height: 80px; border-radius: 50%; background: #f7df1e; display: grid; place-items: center; font-size: 36px; margin: 0 auto 12px; }
  button { background: #1b2030; color: white; border: 0; padding: 8px 18px; border-radius: 8px; cursor: pointer; }
</style>
</head>
<body>
  <div class="card">
    <div class="avatar">JS</div>
    <h2 id="name">Sam</h2>
    <p>Learning JavaScript</p>
    <button onclick="document.getElementById('name').textContent = 'Sam the Coder'">Promote</button>
  </div>
</body>
</html>` },
  { id: 'blank', name: { en: 'Blank page', my: 'ဗလာစာမျက်နှာ' }, code: `<!DOCTYPE html>
<html>
<body>

<h1>Start here</h1>

</body>
</html>` },
];

// The preview page captures console.log and errors and sends them to this page with postMessage.
const BRIDGE = `<script>(function(){var s=function(t,a){parent.postMessage({jsq:1,t:t,m:Array.prototype.map.call(a,function(x){try{return typeof x==='string'?x:JSON.stringify(x)}catch(e){return String(x)}}).join(' ')},'*')};console.log=function(){s('log',arguments)};window.onerror=function(m){s('err',[m])}})();</script>`;
function buildDoc(code) {
  const m = code.match(/<!doctype[^>]*>/i); // keep the doctype first, otherwise the browser uses quirks mode
  return m ? code.replace(m[0], m[0] + BRIDGE) : BRIDGE + code;
}

export default function Playground({ state, actions }) {
  const { language } = useLanguage();
  const T = TEXT[language] ?? TEXT.en;
  const [code, setCode] = useState(state.playground || TEMPLATES[0].code);
  const [run, setRun] = useState({ code, n: 0 }); // `n` changes on every run, which reloads the preview
  const [auto, setAuto] = useState(true);
  const [tab, setTab] = useState('code'); // small screens show one pane at a time
  const [logs, setLogs] = useState([]);
  const frame = useRef(null);
  const { fullscreen, toggleFullscreen } = useWorkspaceFullscreen();

  const runNow = (c = code) => setRun((r) => ({ code: c, n: r.n + 1 }));

  // Auto-run 600 ms after the learner stops typing.
  useEffect(() => {
    if (!auto || code === run.code) return;
    const id = setTimeout(() => runNow(code), 600);
    return () => clearTimeout(id);
  }, [code, auto]);
  // New run: clear the console and save the code (LocalStorage, through the app state).
  useEffect(() => { setLogs([]); actions.update({ playground: run.code }); }, [run.n]);
  // Listen for console messages coming from the preview.
  useEffect(() => {
    const onMsg = (e) => {
      if (e.source !== frame.current?.contentWindow || !e.data?.jsq) return;
      setLogs((l) => [...l.slice(-99), { t: e.data.t, m: e.data.m }]);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const load = (id) => { const tpl = TEMPLATES.find((x) => x.id === id); if (tpl) { setCode(tpl.code); runNow(tpl.code); } };

  return (
    <div className={`workspace${fullscreen ? ' workspace-fullscreen' : ''}`}>
      <h1>{T.title}</h1>
      {!fullscreen && <p className="muted">{T.intro}</p>}
      <div className="row wrap">
        <select className="input" value="" aria-label={T.templates} onChange={(e) => load(e.target.value)}>
          <option value="">{T.templates}</option>
          {TEMPLATES.map((x) => <option key={x.id} value={x.id}>{x.name[language] ?? x.name.en}</option>)}
        </select>
        <button className="btn" onClick={() => runNow()}>▶ {T.run}</button>
        <button className="btn ghost" onClick={() => load('date')}>{T.reset}</button>
        <label className="row small"><input type="checkbox" checked={auto} onChange={(e) => setAuto(e.target.checked)} /> {T.auto}</label>
        <button className="btn ghost workspace-fullscreen-toggle" onClick={toggleFullscreen}
          aria-pressed={fullscreen}>{fullscreen ? T.exitFullscreen : T.fullscreen}</button>
      </div>
      <div className="pg-tabs">
        <button className={`btn ${tab === 'code' ? '' : 'ghost'}`} onClick={() => setTab('code')}>{T.code}</button>
        <button className={`btn ${tab === 'result' ? '' : 'ghost'}`} onClick={() => { setTab('result'); runNow(); }}>{T.result}</button>
      </div>
      <div className="pg">
        <section className={`pg-pane ${tab === 'code' ? '' : 'hide-sm'}`}>
          <div className="pg-head">{T.code}</div>
          <textarea className="pg-code" value={code} spellCheck={false} aria-label={T.code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== 'Tab') return; // Tab inserts two spaces instead of leaving the box
              e.preventDefault();
              const { selectionStart: s, selectionEnd: en } = e.target;
              setCode(code.slice(0, s) + '  ' + code.slice(en));
              requestAnimationFrame(() => { e.target.selectionStart = e.target.selectionEnd = s + 2; });
            }} />
        </section>
        <section className={`pg-pane ${tab === 'result' ? '' : 'hide-sm'}`}>
          <div className="pg-head">{T.result}</div>
          {/* sandbox: the learner's code runs in an isolated frame and cannot touch JS Quest itself */}
          <iframe key={run.n} ref={frame} className="pg-frame" title={T.result} sandbox="allow-scripts allow-modals" srcDoc={buildDoc(run.code)} />
          <div className="pg-head">{T.console}</div>
          <pre className="output pg-console">{logs.length ? logs.map((l, i) => <div key={i} className={l.t === 'err' ? 'log-err' : ''}>{l.t === 'err' ? '✘ ' : '› '}{l.m}</div>) : <span className="muted">{T.empty}</span>}</pre>
        </section>
      </div>
      {!fullscreen && <p className="muted small top">{T.tip}</p>}
    </div>
  );
}
