import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <div className="navLogo">
            <h2>Achraf.dev</h2>
        </div>
        <div className="navLinks">
            <ul>
                <li><a href='/#home'>Home</a></li>
                <li><a href='/#about'>About</a></li>
                <li><a href='/#skills'>Skills</a></li>
                <li><a href='/#'>Projects</a></li>
                <li><a href='/#'>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar