// LocalStorage helpers. Warn when browser storage is unavailable or corrupted.
const KEY = 'js-quest-progress-v1';
export function loadState(fallback) {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return fallback;
    const saved = JSON.parse(raw);
    return {
      ...fallback,
      ...saved,
      language: saved.language === 'en' ? 'en' : 'my',
    };
  } catch (error) {
    console.warn('Could not load JS Quest progress from local storage.', error);
    return fallback;
  }
}
export function saveState(state) {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (error) {
    console.warn('Could not save JS Quest progress to local storage.', error);
  }
}
export function clearState() {
  try { localStorage.removeItem(KEY); } catch (error) {
    console.warn('Could not clear JS Quest progress from local storage.', error);
  }
}
