import DashboardCard from '../components/DashboardCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import { questions } from '../data/questions.js';
import { lessons } from '../data/lessons.js';
import { challenges } from '../data/challenges.js';
import { getLevel, rankTitle, levelProgress, XP_PER_LEVEL } from '../utils/gameLogic.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { lessonTitles } from '../data/lessonDetails.js';

export default function Dashboard({ state, go }) {
  const { language, t } = useLanguage();
  const level = getLevel(state.xp);
  const doneLessons = lessons.filter((l) => state.lessons[l.id]).length;
  const nextLesson = lessons.find((l) => !state.lessons[l.id]);
  return (
    <>
      <section className="hero">
        <h1>{t('welcomeBack')}, {state.name}.</h1>
        <p>{t('level')} {level} · {language === 'my'
          ? [t('rankNewbie'), t('rankApprentice'), t('rankKnight'), t('rankWizard')][level >= 8 ? 3 : level >= 5 ? 2 : level >= 3 ? 1 : 0]
          : rankTitle(level)}. {XP_PER_LEVEL - levelProgress(state.xp)} {t('toNextLevel')}</p>
        {doneLessons === 0 && <p><strong>{t('newToCoding')}</strong> {t('noExperience')}</p>}
        <div className="row wrap">
          {doneLessons === 0 && <button className="btn" onClick={() => go('roadmap')}>{t('startZero')}</button>}
          <button className={`btn ${doneLessons === 0 ? 'ghost' : ''}`} onClick={() => go('quiz')}>{t('playQuiz')}</button>
          <button className="btn ghost" onClick={() => go('roadmap')}>{nextLesson
            ? `${t('nextLesson')}: ${lessonTitles[nextLesson.id][language]}`
            : t('reviewLessons')}</button>
        </div>
      </section>
      <div className="grid">
        <DashboardCard title={t('totalXp')} value={state.xp} hint={`${t('level')} ${level}`} />
        <DashboardCard title={t('questionsMastered')} value={Object.keys(state.correct).length} hint={`${t('of')} ${questions.length}`} />
        <DashboardCard title={t('challengesSolved')} value={Object.keys(state.solved).length} hint={`${t('of')} ${challenges.length}`} />
        <DashboardCard title={t('wrongAnswers')} value={state.wrong} hint={t('mistakesLearn')} />
      </div>
      <div className="card stack">
        <ProgressBar label={t('lessonsCompleted')} value={doneLessons} max={lessons.length} />
        <ProgressBar label={t('quizQuestionsMastered')} value={Object.keys(state.correct).length} max={questions.length} />
        <ProgressBar label={t('codingChallengesSolved')} value={Object.keys(state.solved).length} max={challenges.length} />
      </div>
    </>
  );
}
