import TypeBadge from './TypeBadge'
import { pokemonImg, pad, typeColor } from '../utils/helpers'

export default function PokemonCard({ pokemon, isFav, onFav, onSelect, onCompare, comparing }) {
  const color = typeColor(pokemon.types[0]?.name)
  return (
    <article className="card" style={{ '--c': color }} onClick={() => onSelect(pokemon)}>
      <button className={isFav ? 'fav on' : 'fav'} title="Favoritar"
        onClick={(e) => { e.stopPropagation(); onFav(pokemon.id) }}>★</button>
      <button className={comparing ? 'cmp on' : 'cmp'} title="Comparar"
        onClick={(e) => { e.stopPropagation(); onCompare(pokemon.id) }}>⚔</button>
      <img loading="lazy" src={pokemonImg(pokemon.id)} alt={pokemon.name} />
      <small>#{pad(pokemon.id)}</small>
      <h3>{pokemon.name}</h3>
      <div>{pokemon.types.map((t) => <TypeBadge key={t.id} name={t.name} />)}</div>
      <div className="mini">
        <span>❤️ {pokemon.stats.hp}</span><span>⚔️ {pokemon.stats.attack}</span><span>🛡️ {pokemon.stats.defense}</span>
        <span>✨ {pokemon.stats.specialAttack}</span><span>🔰 {pokemon.stats.specialDefense}</span><span>💨 {pokemon.stats.speed}</span>
      </div>
    </article>
  )
}
