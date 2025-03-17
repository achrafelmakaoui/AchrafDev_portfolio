import React from 'react'
import './Navbar.css'
import AdbLogo from '../images/logoFooter.png'
import AdbWLogo from '../images/WlogoFooter.png'
import { useTheme } from '../../ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
  const handelMoonClick = () => {
    if (theme === 'light') {
      toggleTheme(); // Update the theme to 'dark'
    }
  }
  
  const handelSunClick = () => {
    if (theme === 'dark') {
      toggleTheme(); // Update the theme to 'light'
    }
  }
  const handleImageClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can use 'auto' or 'instant' for different scrolling behavior
    });
  };
  return (
    <nav>
        <div className="navLogo">
          {theme==='light' &&
          <>
            <Link to='/' onClick={handleImageClick}><img src={AdbLogo} alt="text"/></Link>
          </>
          }
          {theme==='dark' &&
          <>
            <Link to='/' onClick={handleImageClick}><img src={AdbWLogo} alt="text"/></Link>
          </>
          }
        </div>
        <div className="navLinks">
            <ul>
                <li><a href='/#Home'>Home</a></li>
                <li><a href='/#About'>About</a></li>
                <li><a href='/#Career'>Career</a></li>
                <li><a href='/#Skills'>Skills</a></li>
                <li><a href='/#Projects'>Projects</a></li>
                <li><a href='/#Contact'>Contact</a></li>
            </ul>
        </div>
        <div className='darkmode_toggele'>
          {theme==='light' && 
          <>
            <svg height="21" viewBox="0 0 1792 1792" width="21" fill='#2d2e32' onClick={handelMoonClick} id='darkmode-toggle'>
              <path d="M1390 1303q-54 9-110 9-182 0-337-90t-245-245-90-337q0-192 104-357-201 60-328.5 229t-127.5 384q0 130 51 248.5t136.5 204 204 136.5 248.5 51q144 0 273.5-61.5t220.5-171.5zm203-85q-94 203-283.5 324.5t-413.5 121.5q-156 0-298-61t-245-164-164-245-61-298q0-153 57.5-292.5t156-241.5 235.5-164.5 290-68.5q44-2 61 39 18 41-15 72-86 78-131.5 181.5t-45.5 218.5q0 148 73 273t198 198 273 73q118 0 228-51 41-18 72 13 14 14 17.5 34t-4.5 38z"/>
            </svg>
            
          </>
          }
          {theme==='dark' && 
          <>
            <svg class="feather feather-sun"  id='darkmode-toggle' stroke="#f5f5f5" fill="none"  height="23" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="23" onClick={handelSunClick}>
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" x2="12" y1="1" y2="3"/>
              <line x1="12" x2="12" y1="21" y2="23"/>
              <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"/>
              <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"/>
              <line x1="1" x2="3" y1="12" y2="12"/>
              <line x1="21" x2="23" y1="12" y2="12"/>
              <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"/>
              <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"/>
            </svg>
          </>
          }
        </div>
    </nav>
  )
}

export default Navbar