import TypeBadge from './TypeBadge'
import StatBar from './StatBar'
import { pokemonImg, pad, typeColor, total } from '../utils/helpers'

export default function PokemonDetails({ pokemon, onClose, isFav, onFav, trainers }) {
  const color = typeColor(pokemon.types[0]?.name)
  const owners = trainers.filter((t) => t.pokemonIds.includes(pokemon.id))
  return (
    <div className="modal" onClick={onClose}>
      <div className="box" style={{ '--c': color }} onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>✕</button>
        <img src={pokemonImg(pokemon.id)} alt={pokemon.name} />
        <small>#{pad(pokemon.id)}</small>
        <h2>{pokemon.name}</h2>
        <div>{pokemon.types.map((t) => <TypeBadge key={t.id} name={t.name} />)}</div>
        <div className="stats">
          {Object.entries(pokemon.stats).map(([k, v]) => <StatBar key={k} stat={k} value={v} color={color} />)}
          <p className="total">Total: <b>{total(pokemon)}</b></p>
        </div>
        {owners.length > 0 && <p>🧑‍🚀 Treinadores: {owners.map((o) => o.name).join(', ')}</p>}
        <button className="primary" onClick={() => onFav(pokemon.id)}>{isFav ? '★ Remover dos favoritos' : '☆ Favoritar'}</button>
      </div>
    </div>
  )
}
