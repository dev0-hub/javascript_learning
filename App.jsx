import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Roadmap from './pages/Roadmap.jsx';
import QuizArena from './pages/QuizArena.jsx';
import CodingChallenge from './pages/CodingChallenge.jsx';
import SyntaxMaster from './pages/SyntaxMaster.jsx';
import Achievements from './pages/Achievements.jsx';
import Leaderboard from './pages/Leaderboard.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import { defaultState } from './utils/gameLogic.js';
import { loadState, saveState, clearState } from './utils/storage.js';

const PAGES = { dashboard: Dashboard, roadmap: Roadmap, quiz: QuizArena, challenges: CodingChallenge, syntax: SyntaxMaster,
  achievements: Achievements, leaderboard: Leaderboard, profile: Profile, settings: Settings };

export default function App() {
  // useState keeps data React re-renders from. The initial value comes from LocalStorage.
  const [state, setState] = useState(() => loadState(defaultState));
  const [page, setPage] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  // Save after every change and apply the theme.
  useEffect(() => { saveState(state); document.documentElement.dataset.theme = state.theme; }, [state]);

  // Game actions. They use the "updater" form setState(s => ...) so they always see the latest state.
  const actions = {
    // Returns true if correct. XP is only awarded the first time a question is answered correctly.
    answer(q, choice) {
      const ok = choice === q.answer;
      setState((s) => ok
        ? (s.correct[q.id] ? s : { ...s, xp: s.xp + q.xp, correct: { ...s.correct, [q.id]: true } })
        : { ...s, wrong: s.wrong + 1 });
      return ok;
    },
    solve(c) { setState((s) => s.solved[c.id] ? s : { ...s, xp: s.xp + c.xp, solved: { ...s.solved, [c.id]: true } }); },
    completeLesson(id) { setState((s) => s.lessons[id] ? s : { ...s, xp: s.xp + 20, lessons: { ...s.lessons, [id]: true } }); },
    // Syntax Master: add XP and remember which questions were seen (so they are not repeated soon).
    syntaxAnswer(id, xp) { setState((s) => ({ ...s, xp: s.xp + xp, syntax: { ...s.syntax, seen: { ...s.syntax.seen, [id]: true } } })); },
    // pct = share of correct answers (0 to 1). 60% or more clears the level and unlocks the next.
    syntaxFinish(level, pct, streak) {
      setState((s) => ({ ...s, syntax: { ...s.syntax, rounds: s.syntax.rounds + 1, bestStreak: Math.max(s.syntax.bestStreak, streak),
        cleared: pct >= 0.6 ? { ...s.syntax.cleared, [level]: true } : s.syntax.cleared } }));
    },
    update(patch) { setState((s) => ({ ...s, ...patch })); },
    reset() { clearState(); setState({ ...defaultState }); },
  };

  const go = (id) => { setPage(id); setMenuOpen(false); window.scrollTo(0, 0); };
  const Page = PAGES[page];

  return (
    <div className="layout">
      <Sidebar page={page} onNavigate={go} open={menuOpen} />
      <div className="main">
        <Navbar state={state} onMenu={() => setMenuOpen((o) => !o)} />
        <main className="content"><Page state={state} actions={actions} go={go} /></main>
      </div>
    </div>
  );
}
