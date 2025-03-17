import React from 'react'
import './AboutPage.css'
import CircleAnimation from '../images/circle-animation copy.svg'
import CircleAnimationW from '../images/circle-animationW.svg'
import Developer from '../images/developer.jpg'
import TechMale from '../images/male-technologist.png'
import AdLogo from '../images/logo - white.png'
import { useTheme } from '../../ThemeContext'

const AboutPage = () => {
  const { theme } = useTheme();

  return (
    <section className="about" id="About">
        <div className="AboutContainer">
            <div className="about-content">
                <div className="img-side">
                    <img src={TechMale} alt="emoji" className="work-emoji"/>
                    <img src={Developer} alt="mee" className="img-side__main-img"/>
                    <span>
                        {theme==='light' &&
                            <>
                                <img src={CircleAnimation} alt="text"/>
                            </>
                        }
                        {theme==='dark' &&
                            <>
                                <img src={CircleAnimationW} alt="text"/>
                            </>
                        }
                    </span>
                    <div className='AchrafWaterMak'><img src={AdLogo} alt="text"/></div>
                    
                </div>
                <div className="text-side">
                    <h3>About me</h3>
                    <h4>A dedicated Full Stack Dev & Data Scientist based in Laâyoune, Maroc 📍</h4>
                    <p>
                    As a versatile Full Stack Web Developer, I seamlessly handle both frontend (HTML, CSS, JavaScript, React Js, Next Js)
                    and backend (Python, PHP, Laravel, Express, MongoDB, SQL, MySQL) technologies, ensuring the creation of responsive and
                    dynamic web applications with a commitment to clean and optimized code. Engaged in ongoing studies in Big Data, Data Science,
                    and Data Engineering, I actively contribute to cross-functional teams for comprehensive project success.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutPage