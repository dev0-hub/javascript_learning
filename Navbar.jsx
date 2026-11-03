import ProgressBar from './ProgressBar.jsx';
import { getLevel, levelProgress, XP_PER_LEVEL } from '../utils/gameLogic.js';
export default function Navbar({ state, onMenu }) {
  return (
    <header className="navbar">
      <button className="btn ghost menu-btn" onClick={onMenu} aria-label="Toggle menu">☰</button>
      <div className="grow">
        <div className="small muted">Level {getLevel(state.xp)} · {state.xp} XP</div>
        <ProgressBar value={levelProgress(state.xp)} max={XP_PER_LEVEL} />
      </div>
      <div className="avatar" title={state.name}>{state.name.slice(0, 1).toUpperCase()}</div>
    </header>
  );
}
