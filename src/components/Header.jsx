import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-mark">
          <span className="header-mark-title">From My Bones</span>
          <span className="header-mark-sub eyebrow">poems, akhil chandra</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
