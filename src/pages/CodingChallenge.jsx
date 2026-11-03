import { useState } from 'react';
import CodeEditor from '../components/CodeEditor.jsx';
import { challenges } from '../data/challenges.js';
import { runTests } from '../utils/gameLogic.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function CodingChallenge({ state, actions }) {
  const { language, t } = useLanguage();
  const [id, setId] = useState(challenges[0].id);
  const [codes, setCodes] = useState({}); // remembers code per challenge
  const [result, setResult] = useState(null);
  const c = challenges.find((x) => x.id === id);
  const code = codes[id] ?? c.starter;

  const run = () => {
    const r = runTests(code, c);
    if (r.ok) r.message = t('allTestsPassed');
    else if (language === 'my') {
      const mismatch = r.msg.match(/^(.+?)\((.*)\) returned (.*), expected (.*)\.$/);
      if (!r.msg.includes(' returned ')) {
        r.message = `Function နာမည်ကို ${c.fn} လို့ သတ်မှတ်ပါ။`;
      } else if (mismatch) {
        r.message = `${mismatch[1]}(${mismatch[2]}) မှ ${mismatch[3]} ကို ပြန်ပေးခဲ့ပါတယ်။ မျှော်မှန်းထားတဲ့ ရလဒ်က ${mismatch[4]} ဖြစ်ပါတယ်။`;
      } else {
        r.message = `စမ်းသပ်စဉ် JavaScript Error ဖြစ်ပါတယ်။ ${r.msg}`;
      }
    } else {
      r.message = r.msg;
    }
    setResult(r);
    if (r.ok) actions.solve(c);
  };

  return (
    <>
      <h1>{t('challenges')}</h1>
      <p className="muted">{t('challengeIntro')}</p>
      <div className="row wrap">
        {challenges.map((x) => (
          <button key={x.id} className={`btn ${x.id === id ? '' : 'ghost'}`} onClick={() => { setId(x.id); setResult(null); }}>
            {state.solved[x.id] ? '✔ ' : ''}{challengeText[x.id].title[language]}
          </button>
        ))}
      </div>
      <div className="card stack top">
        <div className="row space"><strong>{challengeText[c.id].title[language]}</strong><span className={`tag ${c.difficulty.toLowerCase()}`}>{t(c.difficulty.toLowerCase())} · +{c.xp} XP</span></div>
        <p>{challengeText[c.id].prompt[language]}</p>
        <CodeEditor value={code} result={result} onChange={(v) => setCodes({ ...codes, [id]: v })}
          onRun={run} onReset={() => { setCodes({ ...codes, [id]: c.starter }); setResult(null); }} />
      </div>
    </>
  );
}

const challengeText = {
  C1: {
    title: { en: 'Add two numbers', my: 'ကိန်းနှစ်ခု ပေါင်းပါ' },
    prompt: { en: 'Write a function add(a, b) that returns a + b.', my: 'a နဲ့ b ကို ပေါင်းပြီး ရလဒ်ပြန်ပေးမယ့် add(a, b) Function ရေးပါ။' },
  },
  C2: {
    title: { en: 'Even or odd', my: 'စုံကိန်းလား၊ မကိန်းလား' },
    prompt: { en: 'Write isEven(n) that returns true for even numbers and false otherwise. Hint: use %.', my: 'စုံကိန်းဆို true၊ မဟုတ်ရင် false ပြန်ပေးတဲ့ isEven(n) ကို ရေးပါ။ % Operator ကို သုံးကြည့်ပါ။' },
  },
  C3: {
    title: { en: 'Reverse a string', my: 'စာသားကို ပြောင်းပြန်လုပ်ပါ' },
    prompt: { en: 'Write reverseString(text) that returns the text backwards. Hint: split, reverse, join.', my: 'စာသားကို အစီအစဉ်ပြောင်းပြန်လုပ်ပြီး ပြန်ပေးမယ့် reverseString(text) ကို ရေးပါ။ split၊ reverse နဲ့ join ကို သုံးကြည့်ပါ။' },
  },
  C4: {
    title: { en: 'Sum an array', my: 'Array ထဲက ကိန်းတွေကို ပေါင်းပါ' },
    prompt: { en: 'Write sumArray(numbers) that returns the total of all numbers in the array.', my: 'Array ထဲက ကိန်းအားလုံးရဲ့ စုစုပေါင်းကို ပြန်ပေးမယ့် sumArray(numbers) ကို ရေးပါ။' },
  },
};
