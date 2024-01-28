import React, { useState } from 'react'
import './ProjectPage.css'
import EcommerceApp from '../images/ecomapp.png'
import OneeDash from '../images/oneapp.png'
import EcomDash from '../images/ecom_dash2.png'
import BloodDon from '../images/blood_donation.png'
import RedisDash from '../images/redis.png'
import Nfts from '../images/nfts.png'
import ParllaxSite from '../images/parllaxSite.png'
import FootballStat from '../images/ftbs.png'
import TransactionStat from '../images/ets.png'
import PhotoEdit from '../images/ped.png'
import { motion } from "framer-motion";
import ProjectInfo from './Project_Info/ProjectInfo'

const ProjectPage = () => {
  const [ProjectInfoAlert, SetProjectInfoAlert] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Web');
  const [Web, setWeb] = useState(true);
  const [DataScience, setDataScience] = useState(false);
  const [OtherProjects, setOtherProjects] = useState(false);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if(category==='Web'){
        setWeb(true);
        setOtherProjects(false);
        setDataScience(false);

    }
    else if(category==='Data Science'){
        setDataScience(true)
        setWeb(false);
        setOtherProjects(false);
    }
    else{
        setOtherProjects(true);
        setWeb(false);
        setDataScience(false)
    }
  };
  const handelInfoClick = () => {
      SetProjectInfoAlert(true);
  }
  const handelInfoClose = () => {
    SetProjectInfoAlert(false);
}
  return (
    <section className='Projects' id='Projects'>
      <div className="ProjectsContainer">
        <div className="Projects-content">
          <h3>Projects</h3>
          <h4>Each project is a unique piece of development 🧩</h4>
        </div>
        <div className='projects-categ'>
          <span
            className={`custom-button-projects capitalize ${activeCategory === 'Web' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Web')}
          >
            Web
          </span>
          <span
            className={`custom-button-projects capitalize ${activeCategory === 'Data Science' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Data Science')}
          >
            Data Science
          </span>
          <span
            className={`custom-button-projects capitalize ${activeCategory === 'Others' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Others')}
          >
            Others
          </span>
        </div>
        <div className='projects-grid'>
          {Web &&
            <motion.div
                  className="box"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ duration: 1 }}
                >
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a href='/'>
                    <img src={EcommerceApp} alt="website"/>
                  </a>
                  <div className='pro__items'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" onClick={() => { window.open('https://sneakers-eco.netlify.app/', '_blank')}}>
                      <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                      <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                    </svg>
                    <svg  width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0" onClick={() => { window.open('https://github.com/achrafelmakaoui/e_commece', '_blank')}}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <svg class="bi bi-info-lg" fill="currentColor" height="18" viewBox="0 0 16 16" width="18" onClick={handelInfoClick}>
                      <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
                    </svg>
                  </div>
                </div>
                <div class="pro__text">
                  <h3>Sneakers Store</h3>
                  <p>Easy shoe shopping for women and men, diverse model choices. 
                    24/7 support, orders cart, Stripe payment testing. Step into our online shoes! 
                  </p>
                </div>
              </div>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a href='/'>
                    <img src={EcomDash} alt="website"/>
                  </a>
                  <div className='pro__items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0" onClick={() => { window.open('https://github.com/achrafelmakaoui/ecom_dashboard', '_blank')}}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
                <div class="pro__text">
                  <h3>Sneakers Dashboard</h3>
                  <p>Sneakers App Dashboard: Dev-friendly products control, users, orders. Streamlined e-commerce management,
                     flexible user-friendly.
                  </p>
                </div>
              </div>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a href='/#'>
                    <img src={OneeDash} alt="website"/>
                  </a>
                  <div className='pro__items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0" onClick={() => { window.open('https://github.com/achrafelmakaoui/', '_blank')}}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
                <div class="pro__text">
                  <h3>One Dashboard</h3>
                  <p>Commercial Management App for ONE - Branche Électricité Laâyoune,
                     Development of a Dashboard for performance indicators for DR08.
                  </p>
                </div>
              </div>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a href="/#">
                    <img src={BloodDon} alt="website"/>
                  </a>
                  <div className='pro__items'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" onClick={() => { window.open('https://marocain-donateur.000webhostapp.com/', '_blank')}}>
                      <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                      <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0" onClick={() => { window.open('https://github.com/achrafelmakaoui/Blood-Doantion-Project', '_blank')}}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
                <div class="pro__text">
                  <h3>Blood Doantion</h3>
                  <p>Lifesaver Connect: App helps individuals in need of blood easily to find donors in their city, 
                     platform that stream lining life-saving donations. 
                  </p>
                </div>
              </div>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a href="/#">
                    <img src={RedisDash} alt="website"/>
                  </a>
                  <div className='pro__items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0" onClick={() => { window.open('https://github.com/achrafelmakaoui/redis-manger-web-platform', '_blank')}}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
                <div class="pro__text">
                  <h3>Redis Web Manager</h3>
                  <p>Effortlessly manage and monitor your Redis server through a sleek web app for streamlined
                     data control and real-time insights.
                  </p>
                </div>
              </div>
            </motion.div>
          }
          {DataScience &&
            <motion.div
                  className="box"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ duration: 1 }}
                >
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a href="/#">
                    <img src={FootballStat} alt="website"/>
                  </a>
                  <div className='pro__items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
                <div class="pro__text">
                  <h3>Football Statistics</h3>
                  <p>Work on a football stat mini project, learning data cleaning and analytics, 
                    analyze attacks, and evaluate defensive strengths, etc...
                  </p>
                </div>
              </div>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a href="/#">
                    <img src={TransactionStat} alt="website"/>
                  </a>
                  <div className='pro__items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
                <div class="pro__text">
                  <h3>Transactions Statistics</h3>
                  <p>Handled e-commerce transaction data, ensuring quality and insights,
                    contributing to a decision support system with knowledge extraction.
                  </p>
                </div>
              </div>
            </motion.div>
          }
          {OtherProjects &&
            <motion.div
                  className="box"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ duration: 1 }}
                >
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a href="/#">
                    <img src={Nfts} alt="website"/>
                  </a>
                  <div className='pro__items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0" onClick={() => { window.open('https://github.com/achrafelmakaoui/E-Commerce-Product-Page', '_blank')}}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
                <div class="pro__text">
                  <h3>NFT Collection</h3>
                  <p>Designing a product banner for an NFT store with user-friendly features,
                    including cart quantity control and a smooth checkout process.
                  </p>
                </div>
              </div>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a href="/#" >
                    <img src={ParllaxSite} alt="website"/>
                  </a>
                  <div className='pro__items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0" onClick={() => { window.open('https://github.com/achrafelmakaoui/Image-Slider-Parallax', '_blank')}}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
                <div class="pro__text">
                  <h3>Images parallax</h3>
                  <p>Crafting a captivating image parallax and developing a modern design animation,
                     providing users with seamless content manipulation.
                  </p>
                </div>
              </div>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a href="/#" >
                    <img src={PhotoEdit} alt="website"/>
                  </a>
                  <div className='pro__items'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0" onClick={() => { window.open('https://github.com/achrafelmakaoui/Edit-Picture', '_blank')}}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
                <div class="pro__text">
                  <h3>Photo Editing</h3>
                  <p>A powerful photo editing application offering seamless color correction to enhance
                    and perfect your images with precision and ease
                  </p>
                </div>
              </div>
            </motion.div>
          }
        </div>
      </div>
      {ProjectInfoAlert && <ProjectInfo handelClose={handelInfoClose}/>}
    </section>
  )
}

export default ProjectPage