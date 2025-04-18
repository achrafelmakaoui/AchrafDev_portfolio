import React from 'react'
import logo from '../images/blackLogo.webp'
import WLogo from '../images/whiteLogo.webp'
import { useTheme } from '../../ThemeContext';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  const { theme } = useTheme();
  const handleImageClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <section className='footer-section' id='footer'>
        <div className='footerContainer'>
            <div className='footer-content'>
                <div className="copyright"><span>©2025 ACHRAF EL MAKAOUI</span></div>
                <div className="logo-container">
                    {theme==='light' && <><Link to='/' onClick={handleImageClick}><img src={logo} loading="lazy" alt="logo"/></Link></>}
                    {theme==='dark' && <><Link to='/' onClick={handleImageClick}><img src={WLogo} loading="lazy" alt="logo"/></Link></>}
                </div>
                <div className="social-links">
                    <a href="https://github.com/achrafelmakaoui" target="_blank" rel="noopener noreferrer" aria-label="Follow Me On Github">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/achraf-el-makaoui/" target="_blank" rel="noopener noreferrer" aria-label="L'ets Connect On Linkedin">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>                    
                    </a>
                    <a href="https://www.instagram.com/achraf_codes" target="_blank" rel="noopener noreferrer" aria-label="Follow Me On Instagram">
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href='mailto:elmakaouiachraf@gmail.com' target="_blank" rel="noopener noreferrer" aria-label="Send me an email on Gmail" >
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Footer