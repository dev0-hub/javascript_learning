import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import GhostEditor from '../components/GhostEditor.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import { demoSites, siteCode } from '../data/demoSites.js';
import useWorkspaceFullscreen from '../hooks/useWorkspaceFullscreen.js';

const TEXT = {
  en: {
    title: 'Code Along',
    intro: 'Pick a demo website design, then type over the faint ghost code line by line. Watch the design build on the right.',
    build: 'Build this design', done: 'Built ✔', back: '← All designs', progress: 'Progress',
    accept: 'Accept this line (Tab)', restart: 'Restart', preview: 'Live preview', line: 'Line',
    typeHere: 'Click the code and start typing the faint text. Press Tab to accept a whole line.',
    finished: 'Design built!', again: 'Already completed, so no extra XP this time.',
    helped: 'You used ghost help, so the reward is smaller. Try typing every line yourself!', level: 'Level',
    fullscreen: 'Fullscreen', exitFullscreen: 'Exit fullscreen',
  },
  my: {
    title: 'အတူတူ Code ရေးခြင်း',
    intro: 'ဥပမာ ဝဘ်ဆိုက်ဒီဇိုင်းတစ်ခု ရွေးပါ။ မှေးမှေးမြင်ရသော Code ပေါ်တွင် တစ်ကြောင်းချင်း ရိုက်ပါ။ ညာဘက်တွင် ဒီဇိုင်း တည်ဆောက်လာသည်ကို ကြည့်ပါ။',
    build: 'ဒီဒီဇိုင်းကို တည်ဆောက်မည်', done: 'ပြီးပြီ ✔', back: '← ဒီဇိုင်းအားလုံး', progress: 'တိုးတက်မှု',
    accept: 'ဤစာကြောင်းကို လက်ခံမည် (Tab)', restart: 'ပြန်စမည်', preview: 'တိုက်ရိုက်ရလဒ်',
    line: 'စာကြောင်း', typeHere: 'Code ကို နှိပ်ပြီး မှေးမှေးမြင်ရသော စာကို စရိုက်ပါ။ တစ်ကြောင်းလုံး လက်ခံရန် Tab နှိပ်ပါ။',
    finished: 'ဒီဇိုင်း တည်ဆောက်ပြီးပါပြီ!', again: 'ယခင်က ပြီးပြီးဖြစ်၍ XP ထပ်မရပါ။',
    helped: 'အကူအညီ သုံးထားသဖြင့် ဆုလာဘ် နည်းပါသည်။ နောက်တစ်ခါ ကိုယ်တိုင်အကုန်ရိုက်ကြည့်ပါ!', level: 'အဆင့်',
    fullscreen: 'မျက်နှာပြင်အပြည့်', exitFullscreen: 'မျက်နှာပြင်အပြည့်မှ ထွက်ရန်',
  },
};

export default function CodeAlong({ state, actions }) {
  const { language } = useLanguage();
  const T = TEXT[language] ?? TEXT.en;
  const [site, setSite] = useState(null);
  const [typed, setTyped] = useState('');
  const [assists, setAssists] = useState(0);
  const [reward, setReward] = useState(null);
  const { fullscreen, toggleFullscreen } = useWorkspaceFullscreen();
  const paid = useRef(false);
  const doneMap = state.codealong || {};

  const target = site ? siteCode(site) : '';
  let correctPrefix = 0;
  while (correctPrefix < typed.length && typed[correctPrefix] === target[correctPrefix]) correctPrefix++;
  const finished = Boolean(site && correctPrefix === target.length);
  const lineNumber = (typed.match(/\n/g) || []).length;

  const onType = (value) => {
    let next = value.slice(0, target.length);
    if (next.length > typed.length) {
      while (target[next.length] === ' ' && /(^|\n) *$/.test(next)) next += ' ';
    }
    setTyped(next);
  };

  const acceptLine = () => {
    const newline = target.indexOf('\n', correctPrefix);
    setTyped(target.slice(0, newline === -1 ? target.length : newline + 1));
    setAssists((count) => count + 1);
  };

  const start = (selectedSite) => {
    setSite(selectedSite);
    setTyped('');
    setAssists(0);
    setReward(null);
    paid.current = false;
  };

  useEffect(() => {
    if (!finished || paid.current) return;
    paid.current = true;
    const alreadyDone = Boolean(doneMap[site.id]);
    const earned = alreadyDone ? 0 : assists === 0 ? 40 : 15;
    setReward(earned);
    if (!alreadyDone) actions.completeCodeAlong(site.id, earned);
  }, [finished]);

  if (!site) {
    return (
      <>
        <h1>{T.title}</h1>
        <p className="muted">{T.intro}</p>
        <div className="grid">
          {demoSites.map((demo) => (
            <div className="card stack" key={demo.id}>
              <div className="thumb">
                <iframe title={demo.name.en} sandbox="allow-scripts" srcDoc={siteCode(demo)} tabIndex={-1} />
              </div>
              <div className="row space">
                <strong>{demo.icon} {demo.name[language] ?? demo.name.en}</strong>
                <span className="tag">{T.level} · {demo.level}</span>
              </div>
              <p className="muted small">{demo.desc[language] ?? demo.desc.en}</p>
              <button className="btn" onClick={() => start(demo)}>
                {doneMap[demo.id] ? `${T.done} · ` : ''}{T.build}
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }

  const correctCode = target.slice(0, correctPrefix);
  const preview = finished ? target : correctCode.slice(0, correctCode.lastIndexOf('\n') + 1);
  const explanation = site.lines[Math.min(lineNumber, site.lines.length - 1)];

  return (
    <div className={`workspace${fullscreen ? ' workspace-fullscreen' : ''}`}>
      <div className="row space wrap">
        <button className="btn ghost" onClick={() => setSite(null)}>{T.back}</button>
        <h1>{site.icon} {site.name[language] ?? site.name.en}</h1>
        <button className="btn ghost workspace-fullscreen-toggle" onClick={toggleFullscreen}
          aria-pressed={fullscreen}>{fullscreen ? T.exitFullscreen : T.fullscreen}</button>
      </div>
      <ProgressBar label={T.progress} value={correctPrefix} max={target.length} />
      <div className="pg top">
        <section className="pg-pane">
          <div className="pg-head">{T.title}</div>
          <GhostEditor target={target} typed={typed} onChange={onType} onAccept={acceptLine}
            locked={finished} label={T.title} />
          <div className="callout">
            <strong>{T.line} {Math.min(lineNumber + 1, site.lines.length)}:</strong>{' '}
            {finished ? T.finished : explanation[1]}
          </div>
          <div className="row wrap" style={{ padding: '.6rem' }}>
            <button className="btn ghost" disabled={finished} onClick={acceptLine}>{T.accept}</button>
            <button className="btn ghost" onClick={() => start(site)}>{T.restart}</button>
          </div>
        </section>
        <section className="pg-pane">
          <div className="pg-head">{T.preview}</div>
          <iframe className="pg-frame" title={T.preview} sandbox="allow-scripts" srcDoc={preview} />
          {finished && (
            <div className="feedback good pop">
              <strong>🎉 {T.finished} {reward > 0 && `+${reward} XP`}</strong>
              <p>{reward === 0 ? T.again : assists > 0 ? T.helped : ''}</p>
            </div>
          )}
        </section>
      </div>
      {!finished && !typed && <p className="muted small top">{T.typeHere}</p>}
    </div>
  );
}
