// Pure game rules: no React in here, so they are easy to read and test.
export const XP_PER_LEVEL = 100;
export const getLevel = (xp) => Math.floor(xp / XP_PER_LEVEL) + 1;
export const levelProgress = (xp) => xp % XP_PER_LEVEL; // XP earned inside current level

export const defaultState = {
  name: 'Learner',
  theme: 'dark',
  xp: 0,
  correct: {},   // { questionId: true } -> XP is only given the first time
  wrong: 0,
  solved: {},    // { challengeId: true }
  lessons: {},   // { lessonId: true }
  syntax: { seen: {}, cleared: {}, bestStreak: 0, rounds: 0 }, // Syntax Master progress
};

export const rankTitle = (level) =>
  level >= 8 ? 'Code Wizard' : level >= 5 ? 'Script Knight' : level >= 3 ? 'Apprentice' : 'Newbie';

// Runs the learner's code against a challenge's tests.
// new Function builds a function from a string. Fine for a local learning tool,
// but an infinite loop in the learner's code will freeze the tab.
export function runTests(code, challenge) {
  try {
    const getFn = new Function(
      `"use strict";\n${code}\nreturn typeof ${challenge.fn} === "function" ? ${challenge.fn} : null;`
    );
    const fn = getFn();
    if (!fn) return { ok: false, msg: `Define a function named ${challenge.fn}.` };
    for (const [args, expected] of challenge.tests) {
      const got = fn(...args);
      if (JSON.stringify(got) !== JSON.stringify(expected)) {
        const shown = args.map((a) => JSON.stringify(a)).join(', ');
        return { ok: false, msg: `${challenge.fn}(${shown}) returned ${JSON.stringify(got)}, expected ${JSON.stringify(expected)}.` };
      }
    }
    return { ok: true, msg: 'All tests passed!' };
  } catch (e) {
    return { ok: false, msg: `${e.name}: ${e.message}` };
  }
}

// Runs a lesson snippet and captures console.log output so we can show it on the page.
// We pass in a fake `console` object; the learner's code calls our log().
export function runSnippet(code) {
  const lines = [];
  const fakeConsole = { log: (...args) => lines.push(args.map((a) => (typeof a === 'string' ? a : JSON.stringify(a))).join(' ')) };
  try {
    new Function('console', `"use strict";\n${code}`)(fakeConsole);
    return { lines };
  } catch (e) {
    return { lines, error: `${e.name}: ${e.message}` };
  }
}
