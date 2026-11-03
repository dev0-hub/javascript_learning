import { getLevel } from '../utils/gameLogic.js';
// Rivals are fixed demo players. A real leaderboard needs a backend (see future ideas).
const RIVALS = [{ name: 'Ada', xp: 520 }, { name: 'Linus', xp: 340 }, { name: 'Grace', xp: 210 }, { name: 'Brendan', xp: 120 }, { name: 'Tim', xp: 60 }];
export default function Leaderboard({ state }) {
  const rows = [...RIVALS, { name: `${state.name} (you)`, xp: state.xp, me: true }].sort((a, b) => b.xp - a.xp);
  return (
    <>
      <h1>Leaderboard</h1>
      <div className="card"><table className="table">
        <thead><tr><th>#</th><th>Player</th><th>Level</th><th>XP</th></tr></thead>
        <tbody>{rows.map((r, i) => (
          <tr key={r.name} className={r.me ? 'me' : ''}><td>{i + 1}</td><td>{r.name}</td><td>{getLevel(r.xp)}</td><td>{r.xp}</td></tr>
        ))}</tbody>
      </table></div>
    </>
  );
}
