import { Link } from 'react-router-dom'
import './PoemCard.css'

function PoemCard({ poem, index }) {
  return (
    <Link to={`/poem/${poem.slug}`} className="poem-card" style={{ '--delay': `${0.15 + index * 0.1}s` }}>
      <div className="poem-card-top">
        <span className="poem-card-mark eyebrow">{poem.mark}</span>
        <span className="poem-card-year eyebrow">{poem.year}</span>
      </div>
      <h3 className="poem-card-title">{poem.title}</h3>
      <p className="poem-card-excerpt">{poem.excerpt}</p>
      <span className="poem-card-read">read the poem →</span>
    </Link>
  )
}

export default PoemCard
