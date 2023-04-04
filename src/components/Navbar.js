import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {MdFingerprint} from 'react-icons/md'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'


function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false);
  return (

    <IconContext.Provider value={{color:'#fff'}}>
    <div className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
              
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/About" className='nav-links'  onClick={closeMobileMenu}>
                        Work Experience
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Projects" className='nav-links'  onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Contact Me" className='nav-links'  onClick={closeMobileMenu}>
                        Education
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Contact Me" className='nav-links'  onClick={closeMobileMenu}>
                        Get in Touch
                    </Link>
                </li>
              
            </ul>
        </div>
    </div>
    </IconContext.Provider>
  )
}

export default Navbar