import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found container">
      <span className="eyebrow">missing vertebra</span>
      <h1 className="not-found-title">This page isn't in the spine.</h1>
      <p className="not-found-text">
        Whatever you were looking for isn't here. Go back to the index and find your way in.
      </p>
      <Link to="/" className="not-found-link">
        ← back to From My Bones
      </Link>
    </section>
  )
}

export default NotFound
