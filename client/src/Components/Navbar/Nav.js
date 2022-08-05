import React, {useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../images/My-logo.png'

function Nav() {
  const [clicked, setClick] = useState (false)

  const handleClick = () => {
    setClick(true)

  }

  return (
    <>
    <div className='main'>
      <nav className='NavbarItems'>
        <Link to={'/'} className="logo-path"><img src={logo} alt="my logo" className='logo'></img></Link>
        <div className='menu-icon'>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClick}>
            </i>
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          <li className='option-links'>
            <Link className='nav-links' to={'/'}>About</Link>
            {/* <Link className='nav-links' to={'/hobbies'}>About</Link> */}
            <Link className='nav-links' to={'/work'}>Work</Link>
            <Link className='nav-links' to={'/Contact'}>Contact</Link>
            <Link className='nav-links' to={'/Reviews'}>Review</Link>
          </li>
        </ul>
      </nav>
    </div>  
    </>
  )
}

export default Nav