
import React from 'react'
import './navbar.scss'

//to work with images in React, we need to import
import logo from '../../logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="city tours company"/>
            <ul className="nav-links">
                <li><a href="/" className="nav-link"> home </a></li>
                <li><a href="/" className="nav-link"> about </a></li>
                <li><a href="/" className="nav-link active"> tours </a></li>
            </ul>
        </nav>
    )
}

export default Navbar