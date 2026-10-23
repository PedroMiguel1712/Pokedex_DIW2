export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Pesquisar Pokémon por nome ou ID..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
