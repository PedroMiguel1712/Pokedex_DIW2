import { STAT_LABELS } from '../utils/helpers'
export default function StatBar({ stat, value, color }) {
  return (
    <div className="stat">
      <span className="stat-label">{STAT_LABELS[stat]}</span>
      <b>{value}</b>
      <div className="bar"><div style={{ width: `${Math.min(100, (value / 180) * 100)}%`, background: color }} /></div>
    </div>
  )
}
