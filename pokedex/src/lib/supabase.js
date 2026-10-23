import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY
export const supabase = url && key ? createClient(url, key) : null

const LS = 'pokedex-favoritos'
const local = () => JSON.parse(localStorage.getItem(LS) || '[]')
const saveLocal = (ids) => localStorage.setItem(LS, JSON.stringify(ids))

export async function fetchFavorites() {
  if (!supabase) return local()
  const { data, error } = await supabase.from('favoritos').select('pokemon_id')
  if (error) { console.error(error); return local() }
  return data.map((r) => r.pokemon_id)
}
export async function addFavorite(id) {
  if (!supabase) return saveLocal([...new Set([...local(), id])])
  const { error } = await supabase.from('favoritos').insert({ pokemon_id: id })
  if (error) console.error(error)
}
export async function removeFavorite(id) {
  if (!supabase) return saveLocal(local().filter((x) => x !== id))
  const { error } = await supabase.from('favoritos').delete().eq('pokemon_id', id)
  if (error) console.error(error)
}
