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
  const [activeCategory, setActiveCategory] = useState('Mern Stack');
  const [MernStack, setMernStack] = useState(true);
  const [Web, setWeb] = useState(false);
  const [DataScience, setDataScience] = useState(false);
  const [OtherProjects, setOtherProjects] = useState(false);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if(category==='Mern Stack'){
        setMernStack(true);
        setWeb(false);
        setOtherProjects(false);
        setDataScience(false);

    }
    else if(category==='Web'){
        setWeb(true);
        setMernStack(false);
        setOtherProjects(false);
        setDataScience(false);

    }
    else if(category==='Data Science'){
        setDataScience(true)
        setWeb(false);
        setMernStack(false);
        setOtherProjects(false);
    }
    else{
        setOtherProjects(true);
        setMernStack(false);
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
            className={`custom-button-projects capitalize ${activeCategory === 'Mern Stack' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Mern Stack')}
          >
            Mern Stack
          </span>
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
          {MernStack &&
            <>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">
                    <img src={EcommerceApp} alt="website"/>
                  </a>
                </div>
                <div class="pro__text">
                  <h3>Sneakers Store</h3>
                  <p>Easy shoe shopping for women and men, diverse choices in each model. 
                    24/7 support, cart for orders, Stripe payment testing. Step into our online shoes! 
                  </p>
                </div>
              </div>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">
                    <img src={EcomDash} alt="website"/>
                  </a>
                </div>
                <div class="pro__text">
                  <h3>Sneakers Dashboard</h3>
                  <p>Sneakers App Dashboard: Dev-friendly control for products, users, and orders. Streamlined e-commerce management,
                    user-friendly and flexible.
                  </p>
                </div>
              </div>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">
                    <img src={OneeDash} alt="website"/>
                  </a>
                </div>
                <div class="pro__text">
                  <h3>Onee Dashboard</h3>
                  <p>App de Gestion commercial au sein de la direction régionale de 
                    Laâyoune - conception d'un tableau de bord pour les indicateurs de performance pour la DR08
                  </p>
                </div>
              </div>
            </>
          }
          {Web &&
            <>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">
                    <img src={BloodDon} alt="website"/>
                  </a>
                </div>
                <div class="pro__text">
                  <h3>Blood Doantion</h3>
                  <p>Lifesaver Connect: App helps individuals in need of blood easily to find donors in their city, 
                     platform that stream lining the process of life-saving donations. 
                  </p>
                </div>
              </div>
              <div class="pro pro__1 undefined">
                <div class="pro__img">
                  <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">
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
                  <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">
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
                  <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">
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
                  <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">
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