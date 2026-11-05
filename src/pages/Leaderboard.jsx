import { getLevel } from '../utils/gameLogic.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
// Rivals are fixed demo players. A real leaderboard needs a backend (see future ideas).
const RIVALS = [{ name: 'Ada', xp: 520 }, { name: 'Linus', xp: 340 }, { name: 'Grace', xp: 210 }, { name: 'Brendan', xp: 120 }, { name: 'Tim', xp: 60 }];
export default function Leaderboard({ state }) {
  const { t } = useLanguage();
  const rows = [...RIVALS, { name: `${state.name} (${t('you')})`, xp: state.xp, me: true }].sort((a, b) => b.xp - a.xp);
  return (
    <>
      <h1>{t('leaderboard')}</h1>
      <div className="card"><table className="table">
        <thead><tr><th>#</th><th>{t('player')}</th><th>{t('level')}</th><th>XP</th></tr></thead>
        <tbody>{rows.map((r, i) => (
          <tr key={r.name} className={r.me ? 'me' : ''}><td>{i + 1}</td><td>{r.me ? `${state.name} (${t('you')})` : r.name}</td><td>{getLevel(r.xp)}</td><td>{r.xp}</td></tr>
        ))}</tbody>
      </table></div>
    </>
  );
}
