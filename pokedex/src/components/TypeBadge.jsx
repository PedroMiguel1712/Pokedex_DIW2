import { typeColor } from '../utils/helpers'
export default function TypeBadge({ name }) {
  return <span className="badge" style={{ background: typeColor(name) }}>{name}</span>
}
