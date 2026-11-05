// LocalStorage helpers. try/catch protects against private mode or corrupted data.
const KEY = 'js-quest-progress-v1';
export function loadState(fallback) {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
  } catch { return fallback; }
}
export function saveState(state) {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ }
}
export function clearState() {
  try { localStorage.removeItem(KEY); } catch { /* ignore */ }
}
