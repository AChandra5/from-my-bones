import { Link } from 'react-router-dom'
import './Spine.css'

function Spine({ poems, activeSlug }) {
  return (
    <nav className="spine" aria-label="Poem index">
      <span className="spine-line" aria-hidden="true" />
      {poems.map((poem, i) => (
        <Link
          key={poem.slug}
          to={`/poem/${poem.slug}`}
          className={`spine-node${activeSlug === poem.slug ? ' is-active' : ''}`}
          style={{ '--delay': `${i * 0.12}s` }}
        >
          <span className="spine-dot" aria-hidden="true" />
          <span className="spine-label">
            <span className="spine-mark">{poem.mark}</span>
            <span className="spine-title">{poem.title}</span>
          </span>
        </Link>
      ))}
    </nav>
  )
}

export default Spine
