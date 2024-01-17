import React, { useState } from 'react'
import './ProjectPage.css'
import EcommerceApp from '../images/ecom.png'
import OneeDash from '../images/OneeLogin2.png'
import EcomDash from '../images/ecom_dash.png'
import BloodDon from '../images/blloddonation.png'
import RedisDash from '../images/redis.png'
import Nfts from '../images/nfts.png'
import ParllaxSite from '../images/parllaxSite.png'
import FootballStat from '../images/ftbs.png'
const ProjectPage = () => {
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
            <>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a target="_blank" href="/#" rel="noreferrer">
                    <img src={EcommerceApp} alt="website"/>
                  </a>
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
                  <a target="_blank" href="/#" rel="noreferrer">
                    <img src={EcomDash} alt="website"/>
                  </a>
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
                  <a target="_blank" href="/#" rel="noreferrer">
                    <img src={OneeDash} alt="website"/>
                  </a>
                </div>
                <div class="pro__text">
                  <h3>Onee Dashboard</h3>
                  <p>Commercial Management App for ONEE - Branche Électricité Laâyoune,
                     Development of a Dashboard for performance indicators for DR08.
                  </p>
                </div>
              </div>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a target="_blank" href="/#" rel="noreferrer">
                    <img src={BloodDon} alt="website"/>
                  </a>
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
                  <a target="_blank" href="/#" rel="noreferrer">
                    <img src={RedisDash} alt="website"/>
                  </a>
                </div>
                <div class="pro__text">
                  <h3>Redis Web Manager</h3>
                  <p>Effortlessly manage and monitor your Redis server through a sleek web app for streamlined
                     data control and real-time insights.
                  </p>
                </div>
              </div>
            </>
          }
          {DataScience &&
            <>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a target="_blank" href="/#" rel="noreferrer">
                    <img src={FootballStat} alt="website"/>
                  </a>
                </div>
                <div class="pro__text">
                  <h3>Football Statistics</h3>
                  <p>Effortlessly manage and monitor your Redis server through a sleek web app for streamlined
                     data control and real-time insights.
                  </p>
                </div>
              </div>
            </>
          }
          {OtherProjects &&
            <>
                <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a target="_blank" href="/#" rel="noreferrer">
                    <img src={Nfts} alt="website"/>
                  </a>
                </div>
                <div class="pro__text">
                  <h3>NFT Collection</h3>
                  <p>Lifesaver Connect: App helps individuals in need of blood easily to find donors in their city, 
                     platform that stream lining the process of life-saving donations. 
                  </p>
                </div>
              </div>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a target="_blank" href="/#" rel="noreferrer">
                    <img src={ParllaxSite} alt="website"/>
                  </a>
                </div>
                <div class="pro__text">
                  <h3>Images parallax</h3>
                  <p>Effortlessly manage and monitor your Redis server through a sleek web app for streamlined
                     data control and real-time insights.
                  </p>
                </div>
              </div>
            </>
          }
        </div>
      </div>
    </section>
  )
}

export default ProjectPage