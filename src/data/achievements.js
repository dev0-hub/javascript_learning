// Achievements are derived from the saved state, so nothing extra needs storing.
import { getLevel } from '../utils/gameLogic.js';
const count = (obj) => Object.keys(obj).length;
export const achievements = [
  { id: 'A1', icon: '🚀', title: 'First Steps', desc: 'Answer your first question correctly.', check: (s) => count(s.correct) >= 1 },
  { id: 'A2', icon: '🎯', title: 'Sharp Shooter', desc: 'Answer 10 questions correctly.', check: (s) => count(s.correct) >= 10 },
  { id: 'A3', icon: '🧠', title: 'Quiz Master', desc: 'Answer 25 questions correctly.', check: (s) => count(s.correct) >= 25 },
  { id: 'A4', icon: '📘', title: 'Student', desc: 'Complete 3 lessons.', check: (s) => count(s.lessons) >= 3 },
  { id: 'A5', icon: '🛠️', title: 'Problem Solver', desc: 'Solve your first coding challenge.', check: (s) => count(s.solved) >= 1 },
  { id: 'A6', icon: '🏗️', title: 'Builder', desc: 'Solve all coding challenges.', check: (s) => count(s.solved) >= 4 },
  { id: 'A7', icon: '⭐', title: 'Level 3', desc: 'Reach level 3.', check: (s) => getLevel(s.xp) >= 3 },
  { id: 'A8', icon: '👑', title: 'Level 5', desc: 'Reach level 5.', check: (s) => getLevel(s.xp) >= 5 },
  { id: 'A9', icon: '🧩', title: 'Syntax Rookie', desc: 'Clear the Easy level of Syntax Master.', check: (s) => !!s.syntax?.cleared?.Easy },
  { id: 'A10', icon: '🔥', title: 'On Fire', desc: 'Reach a 5-answer streak in Syntax Master.', check: (s) => (s.syntax?.bestStreak ?? 0) >= 5 },
];
