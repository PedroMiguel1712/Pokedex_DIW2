export const TYPE_COLORS = {
  Normal: '#a8a77a', Fire: '#ee8130', Water: '#6390f0', Electric: '#f7d02c',
  Grass: '#7ac74c', Ice: '#96d9d6', Fighting: '#c22e28', Poison: '#a33ea1',
  Ground: '#e2bf65', Flying: '#a98ff3', Psychic: '#f95587', Bug: '#a6b91a',
  Rock: '#b6a136', Ghost: '#735797', Dragon: '#6f35fc', Dark: '#705746',
  Steel: '#b7b7ce', Fairy: '#d685ad', Typeless: '#68a090',
}
export const typeColor = (t) => TYPE_COLORS[t] || '#777'

export const STAT_LABELS = {
  hp: 'HP', attack: 'Attack', defense: 'Defense',
  specialAttack: 'Sp. Atk', specialDefense: 'Sp. Def', speed: 'Speed',
}

// Imagens: PokéAPI sprites (documentado no README)
export const pokemonImg = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

// Treinadores: Pokémon Showdown trainer sprites
const TRAINER_SPRITES = {
  Ash: 'ash', Brock: 'brock', Misty: 'misty', 'Lt. Surge': 'ltsurge', Erika: 'erika',
  Koga: 'koga', Sabrina: 'sabrina', Blaine: 'blaine', Giovanni: 'giovanni',
  Gary: 'gary', 'Team Rocket': 'teamrocket', Lance: 'lance',
}
export const trainerImg = (name) =>
  `https://play.pokemonshowdown.com/sprites/trainers/${TRAINER_SPRITES[name] || name.toLowerCase()}.png`

export const pad = (n) => String(n).padStart(3, '0')
export const total = (p) => Object.values(p.stats).reduce((a, b) => a + b, 0)
