import { typeColor } from '../utils/helpers'

export default function Filters({ types, type, setType, sort, setSort, onlyFavs, setOnlyFavs, favCount }) {
  return (
    <div className="filters">
      <div className="type-buttons">
        <button className={!type ? 'chip active' : 'chip'} onClick={() => setType('')}>Todos</button>
        {types.map((t) => (
          <button key={t.id} onClick={() => setType(t.name)}
            className={type === t.name ? 'chip active' : 'chip'}
            style={{ '--c': typeColor(t.name) }}>{t.name}</button>
        ))}
      </div>
      <div className="row">
        <label>Ordenar:{' '}
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="id">ID</option>
            <option value="name">Nome</option>
            <option value="hp">HP</option>
            <option value="attack">Attack</option>
            <option value="defense">Defense</option>
            <option value="specialAttack">Special Attack</option>
            <option value="specialDefense">Special Defense</option>
            <option value="speed">Speed</option>
          </select>
        </label>
        <label className="check">
          <input type="checkbox" checked={onlyFavs} onChange={(e) => setOnlyFavs(e.target.checked)} />
          ★ Favoritos ({favCount})
        </label>
      </div>
    </div>
  )
}
