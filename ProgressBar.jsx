// Shows value/max as a filled bar. Reused for XP, lessons and topic mastery.
export default function ProgressBar({ value, max, label }) {
  const pct = max === 0 ? 0 : Math.min(100, Math.round((value / max) * 100));
  return (
    <div>
      {label && <div className="bar-label"><span>{label}</span><span>{value}/{max}</span></div>}
      <div className="bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="bar-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
