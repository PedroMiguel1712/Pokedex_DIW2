import { useEffect, useState } from 'react'
import { fetchFavorites, addFavorite, removeFavorite } from '../lib/supabase'

export default function useFavorites() {
  const [favorites, setFavorites] = useState([])
  useEffect(() => { fetchFavorites().then(setFavorites) }, [])

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites((f) => f.filter((x) => x !== id))
      removeFavorite(id)
    } else {
      setFavorites((f) => [...f, id])
      addFavorite(id)
    }
  }
  return { favorites, toggleFavorite }
}
