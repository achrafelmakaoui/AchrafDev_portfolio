import React from 'react'
import logo from '../images/logoFooter.png'
import './Footer.css'
const Footer = () => {
  return (
    <section className='footer-section' id='footer'>
        <div className='footerContainer'>
            <hr/>
            <div className='footer-conteent'>
                <div className='LogoPortfolio'>
                    <img src={logo} alt="logo" />
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