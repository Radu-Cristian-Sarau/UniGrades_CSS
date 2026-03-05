import './Header.css'
import logoImage from '../assets/logo.png'

export function Header() {
  return (
    <nav className="unigrades-navbar">
      <div className="navbar-content">
        <img 
          src={logoImage} 
          alt="UniGrades" 
          className="navbar-logo"
          onClick={() => window.location.reload()}
          style={{ cursor: 'pointer' }}
        />
        <div className="navbar-links">
            <a 
                href="https://github.com/Radu-Cristian-Sarau/UniGrades_CSS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="navbar-github-link"
            >
                GitHub
            </a>
            <a 
                href="https://www.linkedin.com/in/radu-cristian-sarau/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="navbar-linkedin-link"
            >
                LinkedIn
            </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
