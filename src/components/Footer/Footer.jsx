import React from 'react'
import logo from '../images/logoFooter.png'
import WLogo from '../images/WlogoFooter.png'
import { useTheme } from '../../ThemeContext';
import './Footer.css'

const Footer = () => {
  const { theme } = useTheme();

  return (
    <section className='footer-section' id='footer'>
        <div className='footerContainer'>
            <hr/>
            <div className='footer-conteent'>
                <div className='LogoPortfolio'>
                    {theme==='light' &&
                        <>
                            <img src={logo} alt="logo"/>
                        </>
                     }
                    {theme==='dark' &&
                        <>
                            <img src={WLogo} alt="logo"/>
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