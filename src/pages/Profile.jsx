import DashboardCard from '../components/DashboardCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import { questions, topics } from '../data/questions.js';
import { achievements } from '../data/achievements.js';
import { getLevel, rankTitle } from '../utils/gameLogic.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
export default function Profile({ state }) {
  const { language, t } = useLanguage();
  const level = getLevel(state.xp);
  const total = Object.keys(state.correct).length + state.wrong;
  const accuracy = total === 0 ? '–' : `${Math.round((Object.keys(state.correct).length / total) * 100)}%`;
  return (
    <>
      <h1>{state.name}</h1>
      <p className="muted">{t('level')} {level} · {language === 'my'
        ? [t('rankNewbie'), t('rankApprentice'), t('rankKnight'), t('rankWizard')][level >= 8 ? 3 : level >= 5 ? 2 : level >= 3 ? 1 : 0]
        : rankTitle(level)}</p>
      <div className="grid">
        <DashboardCard title="XP" value={state.xp} />
        <DashboardCard title={t('accuracy')} value={accuracy} hint={t('correctVsWrong')} />
        <DashboardCard title={t('badges')} value={achievements.filter((a) => a.check(state)).length} hint={`${t('of')} ${achievements.length}`} />
      </div>
      <div className="card stack top">
        <strong>{t('topicMastery')}</strong>
        {topics.map((t) => {
          const all = questions.filter((q) => q.topic === t);
          return <ProgressBar key={t} label={topicLabels[t][language]} value={all.filter((q) => state.correct[q.id]).length} max={all.length} />;
        })}
      </div>
    </>
  );
}
const topicLabels = {
  Variables: { en: 'Variables', my: 'Variable များ' },
  'Data Types': { en: 'Data Types', my: 'Data အမျိုးအစားများ' },
  Operators: { en: 'Operators', my: 'Operator များ' },
};
