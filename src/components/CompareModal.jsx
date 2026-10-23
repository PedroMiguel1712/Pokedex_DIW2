import { pokemonImg, STAT_LABELS, pad } from '../utils/helpers'

export default function CompareModal({ a, b, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="box wide" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>✕</button>
        <h2>Comparação</h2>
        <div className="cmp-head">
          {[a, b].map((p) => (
            <div key={p.id}><img src={pokemonImg(p.id)} alt={p.name} /><h3>#{pad(p.id)} {p.name}</h3></div>
          ))}
        </div>
        {Object.keys(STAT_LABELS).map((k) => {
          const va = a.stats[k], vb = b.stats[k]
          return (
            <div className="cmp-row" key={k}>
              <b className={va > vb ? 'win' : ''}>{va}</b>
              <span>{STAT_LABELS[k]}</span>
              <b className={vb > va ? 'win' : ''}>{vb}</b>
            </div>
          )
        })}
      </div>
    </div>
  )
}
