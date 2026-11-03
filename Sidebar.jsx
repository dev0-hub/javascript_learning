export const NAV = [
  ['dashboard', 'Dashboard', '🏠'], ['roadmap', 'Learning Roadmap', '🗺️'], ['quiz', 'Quiz Arena', '⚔️'],
  ['challenges', 'Coding Challenges', '💻'], ['syntax', 'Syntax Master', '🧩'], ['achievements', 'Achievements', '🏆'],
  ['leaderboard', 'Leaderboard', '📊'], ['profile', 'My Profile', '👤'], ['settings', 'Settings', '⚙️'],
];
export default function Sidebar({ page, onNavigate, open }) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className="brand">JS<span>Quest</span></div>
      <nav>
        {NAV.map(([id, label, icon]) => (
          <button key={id} className={`nav-item ${page === id ? 'active' : ''}`} onClick={() => onNavigate(id)}
            aria-current={page === id ? 'page' : undefined}>
            <span aria-hidden="true">{icon}</span> {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
