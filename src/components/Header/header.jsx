import { Link } from "react-router-dom"
import Logo from '../../assets/logo.svg'
import '../../styles/header.scss'

function Header() {

    return (
      <div className="header">
        <Link to="/">
        <img src={Logo} className="header_logo" alt="logo Kasa"/>
        </Link>
        <nav className="header_nav">
          <Link className="header_link" to="/">Accueil</Link>
          <Link className="header_link header_link_padding" to="/about">A propos</Link>
        </nav>
      </div>
    )
  
  }
  
  export default Header