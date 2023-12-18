import React from 'react'
import './Navbar.css'
import AdbLogo from '../images/logo - black.png'

const Navbar = () => {
  return (
    <nav>
        <div className="navLogo">
            <img src={AdbLogo} alt="text"/>
            {/* <h2>Achraf.dev</h2> */}
        </div>
        <div className="navLinks">
            <ul>
                <li><a href='/#Home'>Home</a></li>
                <li><a href='/#About'>About</a></li>
                <li><a href='/#Career'>Career</a></li>
                <li><a href='/#Skills'>Skills</a></li>
                <li><a href='/#Projects'>Projects</a></li>
                <li><a href='/#'>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar