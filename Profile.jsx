import DashboardCard from '../components/DashboardCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import { questions, topics } from '../data/questions.js';
import { achievements } from '../data/achievements.js';
import { getLevel, rankTitle } from '../utils/gameLogic.js';
export default function Profile({ state }) {
  const level = getLevel(state.xp);
  const total = Object.keys(state.correct).length + state.wrong;
  const accuracy = total === 0 ? '–' : `${Math.round((Object.keys(state.correct).length / total) * 100)}%`;
  return (
    <>
      <h1>{state.name}</h1>
      <p className="muted">Level {level} · {rankTitle(level)}</p>
      <div className="grid">
        <DashboardCard title="XP" value={state.xp} />
        <DashboardCard title="Accuracy" value={accuracy} hint="correct vs wrong answers" />
        <DashboardCard title="Badges" value={achievements.filter((a) => a.check(state)).length} hint={`of ${achievements.length}`} />
      </div>
      <div className="card stack top">
        <strong>Topic mastery</strong>
        {topics.map((t) => {
          const all = questions.filter((q) => q.topic === t);
          return <ProgressBar key={t} label={t} value={all.filter((q) => state.correct[q.id]).length} max={all.length} />;
        })}
      </div>
    </>
  );
}
