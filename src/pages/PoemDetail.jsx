import { useEffect, useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import Spine from '../components/Spine.jsx'
import poems from '../data/poems.js'
import './PoemDetail.css'

function PoemDetail() {
  const { slug } = useParams()
  const index = poems.findIndex((p) => p.slug === slug)
  const bodyRef = useRef(null)

  useEffect(() => {
    // Scroll to the poem body itself, not the page top. On mobile the
    // spine nav is stacked above the poem, so scrolling to "top" just
    // shows the nav and leaves the newly-loaded poem hidden below it.
    bodyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [slug])

  if (index === -1) {
    return <Navigate to="/" replace />
  }

  const poem = poems[index]
  const prev = poems[index - 1]
  const next = poems[index + 1]

  return (
    <article className="poem-detail">
      <div className="container detail-grid">
        <aside className="detail-aside">
          <Link to="/" className="back-link">
            ← back to the index
          </Link>
          <Spine poems={poems} activeSlug={poem.slug} />
        </aside>

        <div className="detail-body" ref={bodyRef}>
          <header className="detail-header">
            <span className="eyebrow">{poem.mark} · {poem.year}</span>
            <h1 className="detail-title">{poem.title}</h1>
          </header>

          <div className="detail-text">
            {poem.stanzas.map((stanza, i) => (
              <p className="stanza" key={i}>
                {stanza.map((line, j) => (
                  <span className="line" key={j}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            ))}
          </div>

          <p className="detail-signature">— Akhil Chandra</p>

          <nav className="poem-pager" aria-label="Poem navigation">
            {prev ? (
              <Link to={`/poem/${prev.slug}`} className="poem-pager-link poem-pager-prev">
                <span className="eyebrow">previous</span>
                <span className="poem-pager-title">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link to={`/poem/${next.slug}`} className="poem-pager-link poem-pager-next">
                <span className="eyebrow">next</span>
                <span className="poem-pager-title">{next.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </div>
    </article>
  )
}

export default PoemDetail