import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'


function Navbar() {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)


  return (
    <>
    <nav className="navbar">
      <div className="navbar__container">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}/>
        </div>
        <ul className={click? "nav-menu active" : "nav-menu" }>
          <li className="nav-item">
            <Link to='/presentation' className="nav-links"onClick={closeMobileMenu}>
              <span className="purple">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/presentation' className="nav-links"onClick={closeMobileMenu}>
            <span className="blue">Presentation</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/competences' className="nav-links"onClick={closeMobileMenu}>
            <span className="purple">Compétences</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/' className="nav-links"onClick={closeMobileMenu}>
            <span className="turquoise">Projets</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/bts' className="nav-links"onClick={closeMobileMenu}>
            <span className="purple">BTS</span>
            </Link>
          </li>
          <li className="nav-item"> 
            <Link to='/contact' className="nav-links"onClick={closeMobileMenu}>
            <span className="blue">Contact</span> 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
  // return( 
  //   <><nav className="navbar">
  //   <div className="navbar__container">
  //     <div className="menu__icon" onClick={handleClick}>
  //       <i className={click? 'fas fa-times' : 'fa fa-bars'} />
  //     </div>
  // <ul>
  //   <li>
  //     <Link className="navlink" to="/">Présentation</Link>
  //   </li>
  //   <li>
  //     <Link className="navlink" to="/">Compétences</Link>
  //   </li>
  //   <li>
  //     <Link className="navlink" to="/">Projets</Link>
  //   </li>
  //   <li>
  //     <Link className="navlink" to="/">BTS SIO</Link>
  //   </li>
  //   <li>
  //     <Link className="navlink" to="/">Contact</Link>
  //   </li>
  // </ul>
  // </div>
  // </div>
  // </nav</>
  //   )

}

export default Navbar
