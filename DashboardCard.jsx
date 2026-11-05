export default function DashboardCard({ title, value, hint }) {
  return (
    <div className="card stat">
      <div className="muted">{title}</div>
      <div className="stat-value">{value}</div>
      {hint && <div className="muted small">{hint}</div>}
    </div>
  );
}
