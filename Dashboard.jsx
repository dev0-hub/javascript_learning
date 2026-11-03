import DashboardCard from '../components/DashboardCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import { questions } from '../data/questions.js';
import { lessons } from '../data/lessons.js';
import { challenges } from '../data/challenges.js';
import { getLevel, rankTitle, levelProgress, XP_PER_LEVEL } from '../utils/gameLogic.js';

export default function Dashboard({ state, go }) {
  const level = getLevel(state.xp);
  const doneLessons = lessons.filter((l) => state.lessons[l.id]).length;
  const nextLesson = lessons.find((l) => !state.lessons[l.id]);
  return (
    <>
      <section className="hero">
        <h1>Welcome back, {state.name}.</h1>
        <p>You are a level {level} {rankTitle(level)}. {XP_PER_LEVEL - levelProgress(state.xp)} XP to the next level.</p>
        {doneLessons === 0 && <p><strong>New to coding?</strong> No experience needed. Start with lesson 1, "What is coding?", and learn step by step.</p>}
        <div className="row wrap">
          {doneLessons === 0 && <button className="btn" onClick={() => go('roadmap')}>Start from zero</button>}
          <button className={`btn ${doneLessons === 0 ? 'ghost' : ''}`} onClick={() => go('quiz')}>Play a quiz</button>
          <button className="btn ghost" onClick={() => go('roadmap')}>{nextLesson ? `Next lesson: ${nextLesson.title}` : 'Review lessons'}</button>
        </div>
      </section>
      <div className="grid">
        <DashboardCard title="Total XP" value={state.xp} hint={`Level ${level}`} />
        <DashboardCard title="Questions mastered" value={Object.keys(state.correct).length} hint={`of ${questions.length}`} />
        <DashboardCard title="Challenges solved" value={Object.keys(state.solved).length} hint={`of ${challenges.length}`} />
        <DashboardCard title="Wrong answers" value={state.wrong} hint="Mistakes are how you learn" />
      </div>
      <div className="card stack">
        <ProgressBar label="Lessons completed" value={doneLessons} max={lessons.length} />
        <ProgressBar label="Quiz questions mastered" value={Object.keys(state.correct).length} max={questions.length} />
        <ProgressBar label="Coding challenges solved" value={Object.keys(state.solved).length} max={challenges.length} />
      </div>
    </>
  );
}
