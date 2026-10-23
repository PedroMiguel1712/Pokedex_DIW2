import { useState } from 'react'
import { trainerImg, pokemonImg } from '../utils/helpers'

function TrainerAvatar({ name }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className="avatar-fallback">{name[0]}</div>
  return <img className="avatar" src={trainerImg(name)} alt={name} onError={() => setFailed(true)} />
}

export default function TrainerList({ trainers, pokemons, onSelectPokemon }) {
  return (
    <div className="trainers">
      {trainers.map((t) => (
        <section className="trainer" key={t.id}>
          <TrainerAvatar name={t.name} />
          <div>
            <h3>{t.name}</h3>
            <p>🏅 {t.badges} {t.badges === 1 ? 'insígnia' : 'insígnias'}</p>
            <div className="team">
              {t.pokemonIds.map((id) => {
                const p = pokemons.find((x) => x.id === id)
                if (!p) return null
                return (
                  <button key={id} className="team-mon" title={p.name} onClick={() => onSelectPokemon(p)}>
                    <img src={pokemonImg(id)} alt={p.name} />
                    <small>{p.name}</small>
                  </button>
                )
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
