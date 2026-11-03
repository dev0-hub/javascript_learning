export default function AchievementBadge({ icon, title, desc, unlocked }) {
  return (
    <div className={`card badge ${unlocked ? '' : 'locked'}`}>
      <div className="badge-icon" aria-hidden="true">{unlocked ? icon : '🔒'}</div>
      <div><strong>{title}</strong><div className="muted small">{desc}</div></div>
    </div>
  );
}
