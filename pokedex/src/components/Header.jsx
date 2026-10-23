export default function Header({ view, setView, dark, setDark, onRandom }) {
  const tabs = [['pokedex', 'Pokédex'], ['trainers', 'Treinadores']]
  return (
    <header className="header">
      <h1><span className="ball" /> Pokédex</h1>
      <nav>
        {tabs.map(([k, label]) => (
          <button key={k} className={view === k ? 'tab active' : 'tab'} onClick={() => setView(k)}>{label}</button>
        ))}
        <button className="tab" onClick={onRandom}>🎲 Aleatório</button>
        <button className="tab" onClick={() => setDark(!dark)}>{dark ? '☀️' : '🌙'}</button>
      </nav>
    </header>
  )
}
