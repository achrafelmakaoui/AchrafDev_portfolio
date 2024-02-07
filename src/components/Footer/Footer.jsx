import React from 'react'
import logo from '../images/logoFooter.png'
import WLogo from '../images/WlogoFooter.png'
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
            <hr/>
            <div className='footer-conteent'>
                <div className='LogoPortfolio'>
                    {theme==='light' &&
                        <>
                            <Link to='/' onClick={handleImageClick}><img src={logo} alt="logo"/></Link>
                        </>
                     }
                    {theme==='dark' &&
                        <>
                            <Link to='/' onClick={handleImageClick}><img src={WLogo} alt="logo"/></Link>
                        </>
                    }
                </div>
                <div className='Copyright'>
                    <h3>Copyright © 2023. All rights are reserved</h3>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Footer