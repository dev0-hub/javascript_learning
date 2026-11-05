// Rules for Syntax Master. Pure functions, no React.
export const BASE_XP = { Easy: 10, Medium: 15, Hard: 25 };
export const ORDER = ['Easy', 'Medium', 'Hard'];

export function shuffle(arr) { // Fisher-Yates shuffle
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
// Put the chosen texts into the blanks of the code.
export const fillCode = (code, texts) => code.replace(/__(\d)__/g, (_, i) => texts[+i] ?? '');

// Compiles (does not run) the finished code. A SyntaxError means the answer is wrong.
export function isValidSyntax(code) {
  try { new Function(code); return true; } catch { return false; }
}
// Picks the round: unseen questions first, so players do not get repeats until the pool is used up.
export function pickRound(bank, { mode, difficulty }, seen) {
  const pool = bank.filter((q) => q.difficulty === difficulty && (mode === 'mixed' || q.mode === mode));
  const n = mode === 'mixed' ? 10 : 5;
  const fresh = shuffle(pool.filter((q) => !seen[q.id]));
  const old = shuffle(pool.filter((q) => seen[q.id]));
  return shuffle([...fresh, ...old].slice(0, n));
}
// XP: base by difficulty (half if a hint was used) plus a streak bonus.
export function calcReward(difficulty, correct, hintUsed, streak) {
  if (!correct) return { gained: 0, bonus: 0 };
  const base = BASE_XP[difficulty];
  return { gained: hintUsed ? Math.floor(base / 2) : base, bonus: streak >= 2 ? Math.min(streak - 1, 5) * 2 : 0 };
}
