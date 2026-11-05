import { useLanguage } from '../i18n/LanguageContext.jsx';

export const NAV = [
  ['dashboard', 'dashboard', '🏠'], ['roadmap', 'roadmap', '🗺️'], ['quiz', 'quiz', '⚔️'],
  ['challenges', 'challenges', '💻'], ['syntax', 'syntax', '🧩'], ['playground', 'playground', '🎨'], ['achievements', 'achievements', '🏆'],
  ['leaderboard', 'leaderboard', '📊'], ['profile', 'profile', '👤'], ['dictionary', 'dictionary', '📖'],
  ['settings', 'settings', '⚙️'],
];
export default function Sidebar({ page, onNavigate, open }) {
  const { t } = useLanguage();
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className="brand">JS<span>Quest</span></div>
      <nav>
        {NAV.map(([id, label, icon]) => (
          <button key={id} className={`nav-item ${page === id ? 'active' : ''}`} onClick={() => onNavigate(id)}
            aria-current={page === id ? 'page' : undefined}>
            <span aria-hidden="true">{icon}</span> {t(label)}
          </button>
        ))}
      </nav>
    </aside>
  );
}
