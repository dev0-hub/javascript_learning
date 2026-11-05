import ProgressBar from './ProgressBar.jsx';
import { getLevel, levelProgress, XP_PER_LEVEL } from '../utils/gameLogic.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
export default function Navbar({ state, onMenu, onLanguageChange }) {
  const { t } = useLanguage();
  return (
    <header className="navbar">
      <button className="btn ghost menu-btn" onClick={onMenu} aria-label={t('toggleMenu')}>☰</button>
      <div className="grow">
        <div className="small muted">{t('level')} {getLevel(state.xp)} · {state.xp} {t('xp')}</div>
        <ProgressBar value={levelProgress(state.xp)} max={XP_PER_LEVEL} />
      </div>
      <label className="language-select">
        <span className="sr-only">{t('languageSwitchLabel')}</span>
        <select value={state.language} onChange={(e) => onLanguageChange(e.target.value)} aria-label={t('languageSwitchLabel')}>
          <option value="my">🇲🇲 မြန်မာဘာသာ</option>
          <option value="en">🇬🇧 English</option>
        </select>
      </label>
      <div className="avatar" title={state.name}>{state.name.slice(0, 1).toUpperCase()}</div>
    </header>
  );
}
