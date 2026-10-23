import { useMemo, useState, useEffect } from 'react'
import data from './data/pokedex-data.json'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'
import CompareModal from './components/CompareModal'
import TrainerList from './components/TrainerList'
import useFavorites from './hooks/useFavorites'

const { pokemon: pokemons, types, trainers } = data

export default function App() {
  const [view, setView] = useState('pokedex')
  const [search, setSearch] = useState('')
  const [type, setType] = useState('')
  const [sort, setSort] = useState('id')
  const [onlyFavs, setOnlyFavs] = useState(false)
  const [selected, setSelected] = useState(null)
  const [compareIds, setCompareIds] = useState([])
  const [showCompare, setShowCompare] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('dark') === '1')
  const { favorites, toggleFavorite } = useFavorites()

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('dark', dark ? '1' : '0')
  }, [dark])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase().replace('#', '')
    const list = pokemons.filter((p) =>
      (!q || p.name.toLowerCase().includes(q) || String(p.id).includes(q)) &&
      (!type || p.types.some((t) => t.name === type)) &&
      (!onlyFavs || favorites.includes(p.id))
    )
    return [...list].sort((a, b) =>
      sort === 'name' ? a.name.localeCompare(b.name)
      : sort === 'id' ? a.id - b.id
      : b.stats[sort] - a.stats[sort])
  }, [search, type, sort, onlyFavs, favorites])

  function toggleCompare(id) {
    setCompareIds((c) => c.includes(id) ? c.filter((x) => x !== id) : c.length < 2 ? [...c, id] : [c[1], id])
  }
  const randomPokemon = () => setSelected(pokemons[Math.floor(Math.random() * pokemons.length)])
  const byId = (id) => pokemons.find((p) => p.id === id)

  return (
    <div className="app">
      <Header view={view} setView={setView} dark={dark} setDark={setDark} onRandom={randomPokemon} />
      {view === 'pokedex' ? (
        <main>
          <SearchBar value={search} onChange={setSearch} />
          <Filters types={types.filter((t) => t.name !== 'Typeless')} type={type} setType={setType}
            sort={sort} setSort={setSort} onlyFavs={onlyFavs} setOnlyFavs={setOnlyFavs} favCount={favorites.length} />
          <p className="count">{filtered.length} Pokémon</p>
          <PokemonList pokemons={filtered} favorites={favorites} toggleFavorite={toggleFavorite}
            onSelect={setSelected} compareIds={compareIds} toggleCompare={toggleCompare} />
        </main>
      ) : (
        <main><TrainerList trainers={trainers} pokemons={pokemons} onSelectPokemon={setSelected} /></main>
      )}

      {compareIds.length > 0 && (
        <div className="compare-bar">
          ⚔ Comparar: {compareIds.map((id) => byId(id).name).join(' vs ')}
          <button disabled={compareIds.length < 2} onClick={() => setShowCompare(true)}>Comparar</button>
          <button onClick={() => setCompareIds([])}>Limpar</button>
        </div>
      )}
      {selected && (
        <PokemonDetails pokemon={selected} onClose={() => setSelected(null)} trainers={trainers}
          isFav={favorites.includes(selected.id)} onFav={toggleFavorite} />
      )}
      {showCompare && compareIds.length === 2 && (
        <CompareModal a={byId(compareIds[0])} b={byId(compareIds[1])} onClose={() => setShowCompare(false)} />
      )}
    </div>
  )
}
