export default function Settings({ state, actions }) {
  return (
    <>
      <h1>Settings</h1>
      <div className="card stack">
        <label className="stack">Display name
          <input className="input" value={state.name} maxLength={20}
            onChange={(e) => actions.update({ name: e.target.value || 'Learner' })} />
        </label>
        <div className="row">
          <span>Theme: {state.theme}</span>
          <button className="btn ghost" onClick={() => actions.update({ theme: state.theme === 'dark' ? 'light' : 'dark' })}>Switch theme</button>
        </div>
        <div>
          <button className="btn danger" onClick={() => { if (window.confirm('Erase all XP and progress?')) actions.reset(); }}>Reset all progress</button>
        </div>
      </div>
    </>
  );
}
