import Spine from '../components/Spine.jsx'
import PoemCard from '../components/PoemCard.jsx'
import poems from '../data/poems.js'
import './Home.css'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <svg
            className="hero-bones"
            viewBox="0 0 400 120"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60 C 40 40, 60 80, 100 60 S 160 40, 200 60 S 260 80, 300 60 S 360 40, 400 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            {[20, 100, 180, 260, 340].map((x) => (
              <circle key={x} cx={x} cy={x % 40 === 0 ? 58 : 62} r="3" fill="currentColor" />
            ))}
          </svg>

          <span className="eyebrow hero-eyebrow">a small, unhidden archive</span>
          <h1 className="hero-title">From My Bones</h1>
          <p className="hero-tagline">
            Poetry pulled from old wounds, soft scars, and quiet nights.
written from my bones.
          </p>
        </div>
      </section>

      <section className="index-section">
        <div className="container index-grid">
          <aside className="index-aside">
            <Spine poems={poems} />
          </aside>
          <div className="index-list">
            {poems.map((poem, i) => (
              <PoemCard poem={poem} index={i} key={poem.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
