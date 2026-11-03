// Verifies every Syntax Master question: the correct answer must compile and run, and each wrong
// choice must either break the code or behave differently. Usage: npm run verify:syntax
import { syntaxQuestions as bank } from '../src/data/syntaxQuestions.js';
process.on('unhandledRejection', () => {});
const fill = (code, t) => code.replace(/__(\d)__/g, (_, i) => t[+i]);

async function signature(code) {
  const logs = [];
  // A Proxy pretends to be `document`: it records every property set and method call.
  const mk = (n) => new Proxy(function () {}, {
    get: (t, p) => (p === Symbol.toPrimitive ? () => n : p === 'then' ? undefined : mk(`${n}.${String(p)}`)),
    apply: (t, th, a) => { logs.push(`${n}(${a.map(String).join(',')})`); return mk(`${n}()`); },
    set: (t, p, v) => { logs.push(`${n}.${String(p)}=${v}`); return true; },
  });
  const con = { log: (...a) => logs.push(a.map((x) => (typeof x === 'string' ? x : String(JSON.stringify(x)))).join(' ')) };
  try { new Function('console', 'document', code)(con, mk('document')); await new Promise((r) => setTimeout(r, 5)); }
  catch (e) { logs.push(`ERR ${e.name}`); }
  return JSON.stringify(logs);
}
let problems = 0;
const count = {};
for (const q of bank) {
  count[q.difficulty] = (count[q.difficulty] || 0) + 1;
  const good = await signature(fill(q.code, q.answers));
  if (good.includes('ERR')) { console.log(`✘ ${q.id}: correct answer errors ->`, good); problems++; }
  q.distractors.forEach((d) => q.answers.forEach((_, slot) => {
    const t = [...q.answers]; t[slot] = d;
    if (t.every((x, i) => x === q.answers[i])) return;
    // A wrong choice that behaves exactly like the right one would make the question ambiguous.
  }));
  for (const d of q.distractors) for (let slot = 0; slot < q.answers.length; slot++) {
    const t = [...q.answers]; t[slot] = d;
    if (await signature(fill(q.code, t)) === good) { console.log(`⚠ ${q.id}: wrong choice "${d}" in blank ${slot} behaves like the answer`); problems++; }
  }
}
console.log('Questions per difficulty:', count, problems ? `\n${problems} problem(s) found` : '\nAll questions verified ✔');
