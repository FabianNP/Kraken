import {useState} from 'react'
import "./css/navbar.css"

// const links = ["Chalecos", "Reseñas", "FAQs", "Contactanos"]

const Navbar = ({ scroll, windowWidth }) => {
  const [mobileNav, setMobileNav] = useState(false) 

  const handleNavButton  = () => {
    setMobileNav( prev => ! prev)
  }

  return (
    <nav className={`navbar ${scroll ? "navActive" : ""}`}>
      {windowWidth < 500 ? <img className="navButton" src="" alt=""/> : <></> }
      <div className="navbarWrapper">
        <a href="#hero">
          <img className="logo" src="logo.svg" alt="nautic_kraken_logo" />
        </a>
        <div className="navList">
          <img className={`navButton ${mobileNav ? "navButtonActive" : "navButtonOff"}`} src="timon.png" alt="" onClick={handleNavButton}/>
          <ul className={`menu ${mobileNav ? "menuActive" : ""}`}>
            <a href="#chalecos"><li className="menuAnchor">Chalecos</li></a>
            <a href="#reseñas"><li className="menuAnchor">Reseñas</li></a>
            <a href="#faqs"><li className="menuAnchor">FAQs</li></a>
            <a href="#contacto"><li className="menuAnchor">Contactanos</li></a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar