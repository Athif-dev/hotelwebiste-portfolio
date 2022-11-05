import React from 'react';
import Logo from './logo.png';
import './navbar.css';
import {BrowserRouter as Router,Link,} from "react-router-dom";


function Navbar() {
  return (
    <>
    <div className='nav-container'>

    <img className='nav-img' src={Logo} />

    <div className='links-container'>
    <li className='nav-link'> <Link  to="/" >HOME </Link></li>
    <li className='nav-link'>  <a href='/#rooms'> ROOMS</a></li>
    <li className='nav-link'> <a href='/#gallery'>GALLERY</a> </li>
    <li className='nav-link'> <a href='/#services'> SERVICES</a></li>
    <li className='nav-link'> <a href='/#contact'> CONTACT</a></li>
    <li className='nav-link'> <Link onUpdate={() => window.scrollTo(0, 0)} to="/About" > ABOUT US </Link></li>
    </div>
    
    {/* <!-- Mobile navbar hamburger  --> */}
            <div id="menuToggle">

            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            
            <ul id="menu">
            <li className='nav-link-m'> <Link  to="/" >HOME </Link></li>
    <li className='nav-link-m'>  <a href='/#rooms'> ROOMS</a></li>
    <li className='nav-link-m'> <a href='/#gallery'>GALLERY</a> </li>
    <li className='nav-link-m'> <a href='/#services'> SERVICES</a></li>
    <li className='nav-link-m'> <a href='/#contact'> CONTACT</a></li>
    <li className='nav-link-m'> <Link onUpdate={() => window.scrollTo(0, 0)} to="/About" > ABOUT US </Link></li>
            </ul>
            </div>
     {/* <!-- Mobile navbar hamburger end  --> */}


    </div>
    </>
  )
}

export default Navbar