import React, { useEffect, useRef } from 'react'
import './About.css'
import Glob from './Glob/Globe'
import ME from '../images/heroIMG.webp'
import RippleDemo from './Ripple/Ripple'

const About = () => {
    const cardsRef = useRef(null);

    useEffect(() => {
        const cardsElement = cardsRef.current;
        if (!cardsElement) return;
      
        const handleMouseMove = (e) => {
          const cards = cardsElement.getElementsByClassName("boxdiv");
          for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
      
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          }
        };
      
        cardsElement.addEventListener("mousemove", handleMouseMove);
        return () => cardsElement.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const section = cardsRef.current;
        if (!section) return;
      
        const observer = new IntersectionObserver(
            (entries) => {
              const entry = entries[0];
              if (entry.isIntersecting) {
                const boxes = section.querySelectorAll('.boxdiv');
                boxes.forEach((box, index) => {
                  box.classList.add(`box${index + 1}`);
                });
                observer.disconnect();
              }
            },
            {
              threshold: 0.25,
            }
          );
      
        observer.observe(section);
      
        return () => {
          observer.disconnect();
        };
    }, []);

  return (
    <section className="aboutme" id="AboutMe">
        <div className="AboutMeContainer">
            <div className="AboutMe-content">
                <h2>About</h2>
                <h3>Full Stack Web Developer & Data Scientist 💻.</h3>
            </div>
            <div id="parent" ref={cardsRef}>
                <div className="boxdiv" style={{ gridArea:'box1'}}>
                    <div className='fav-quote'>
                        <h2>“ I don't just build code — I <span>craft solutions</span> that connect ideas to <span>impact</span>. ”</h2>
                    </div>
                </div>
                <div className="boxdiv" style={{ gridArea:'box2'}}>
                    <div className='locationGlobe'>
                        <h2 className="title">I'm very flexible with time zone communications</h2>
                        <div className="globe-container">
                            <div className="globe-wrapper">
                                <div className="globe">
                                    <Glob className="globeCanvas"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxdiv" style={{ gridArea:'box3'}}>
                    <div className='knowMe-card'>
                        <div className='card-about-me'>
                            <img src={ME} loading="lazy" alt="Portrait of Achraf El Makaoui, Full Stack Developer" title="Portrait of Achraf El Makaoui, Full Stack Developer"/>
                        </div>
                        <div className='inside-card-about-me'>
                            <div className='Developer-Name'>
                                <h1>Achraf El Makaoui</h1>
                                <h2>Full Stack Developer</h2>
                            </div>
                        </div>
                        <div className="banner-card-about-me">
                            <div className='bnr-card'>
                                <div className="bnr-card-title"><h1>Achraf El Makaoui</h1></div>
                                <div className="bnr-card-subtitle"><h2>Full Stack Developer</h2></div>
                                <div className="bnr-card-description">
                                    <p>I'm a full stack developer with 5 years of experience, building fast, responsive web apps with clean code. With a Big Data degree, I bring a data-driven approach to development and continue to grow in Data Science and Engineering.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxdiv" style={{ gridArea:'box4'}}>
                    <div className='workCurently'>
                        <div className='chat-Work'>
                            <div className='chat-Date'>
                                <span>Wednesday, April 9</span>
                            </div>
                            <div className='chat-ui1'>
                                <div className='sender-chat'>
                                    <span>No recent work? What's new? 👀</span>
                                </div>
                            </div>
                            <div className='chat-ui2'>
                                <div className='my-chatbanner'>
                                    <span>Currently building a SaaS project, focusing on core functionality.</span>
                                </div>
                                <div className='my-chatbanner-date'>
                                    <span>Read, 8:17 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boxdiv" style={{ gridArea:'box5'}}>
                    <div className='ripple-Banner'>
                        <RippleDemo/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
