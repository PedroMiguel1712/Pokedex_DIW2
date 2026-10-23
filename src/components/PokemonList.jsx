import PokemonCard from './PokemonCard'

export default function PokemonList({ pokemons, favorites, toggleFavorite, onSelect, compareIds, toggleCompare }) {
  if (pokemons.length === 0) {
    return <p className="empty">😢 Nenhum Pokémon encontrado. Tente outra pesquisa ou filtro.</p>
  }
  return (
    <div className="grid">
      {pokemons.map((p) => (
        <PokemonCard key={p.id} pokemon={p} isFav={favorites.includes(p.id)} onFav={toggleFavorite}
          onSelect={onSelect} onCompare={toggleCompare} comparing={compareIds.includes(p.id)} />
      ))}
    </div>
  )
}
