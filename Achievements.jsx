import AchievementBadge from '../components/AchievementBadge.jsx';
import { achievements } from '../data/achievements.js';
export default function Achievements({ state }) {
  const unlocked = achievements.filter((a) => a.check(state)).length;
  return (
    <>
      <h1>Achievements</h1>
      <p className="muted">{unlocked} of {achievements.length} unlocked.</p>
      <div className="grid">{achievements.map((a) => <AchievementBadge key={a.id} {...a} unlocked={a.check(state)} />)}</div>
    </>
  );
}
