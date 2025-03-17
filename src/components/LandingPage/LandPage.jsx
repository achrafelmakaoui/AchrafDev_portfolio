import React, { useEffect, useRef } from 'react'
import './LandPage.css'
import Waving from '../images/waving.png'
import Navbar from '../Navbar/Navbar'
import { gsap, Power2, Back } from 'gsap';
import SplitText from "gsap-trial/SplitText"

const LandPage = () => {
    const TextAnimation = useRef();
    const WaveAnimation = useRef();
    const ImgAnimation = useRef();
    const paraghAnimation = useRef();
    const iconsAnimation = useRef();
    const SkillAnimation = useRef();
    gsap.registerPlugin(SplitText);
    
    useEffect(() => {
        const tl = gsap.timeline();
    
        const splitText = new SplitText(TextAnimation.current, { type: 'lines,chars', linesClass: 'line', charsClass: 'char' });

        tl.staggerFromTo(
            splitText.lines,
            1.2,
            { yPercent: 130, ease: Back.easeOut },
            { yPercent: 0, ease: Back.easeOut },
            0.2
        );
    
        tl.staggerFromTo(
            splitText.chars,
            0.6,
            { opacity: 0, y: 20, ease: Power2.easeInOut },
            { opacity: 1, y: 0, ease: Power2.easeInOut },
            0.02,
            '-=1.2'
        );
        tl.fromTo(WaveAnimation.current, 1, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, '-=0.5');
        tl.fromTo(
            paraghAnimation.current,
            0.5,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=0.5'
        );
        tl.fromTo(
            iconsAnimation.current,
            0.5,
            { yPercent: 130, opacity: 0, stagger: 0.02, ease: Power2.easeInOut },
            { yPercent: 0, opacity: 1, stagger: 0.02, ease: Power2.easeInOut },
            '-=0.5'
        );
        tl.fromTo(ImgAnimation.current, 0.5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, '-=0.5');
        tl.fromTo(SkillAnimation.current, 0.5, { opacity: 0, translateX:'20%' }, { opacity: 1,translateX:'0%', ease: Power2.easeInOut }, '-=0.5');
    }, []);

  return (
    <section className="home" id="Home">
        <Navbar/>
        <div className='container'>
            <div className='hero-main'>
                <div className='hero-text'>
                    <h1 ref={TextAnimation}>Full Stack Developer & Data Scientist</h1>
                    <img className='Waving' src={Waving} alt='Waving' ref={WaveAnimation}/>
                    <p ref={paraghAnimation}>Hi, I'm Achraf El Makaoui. A passionate Full Stack Developer & Data Scientist based in Laâyoune, Maroc. 📍</p>
                    <span ref={iconsAnimation}>
                        <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/achraf-el-makaoui-851969242/"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg></a>
                        <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/achrafelmakaoui"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
                    </span>
                </div>
                <div className='hero-img' ref={ImgAnimation}></div>
            </div>
            <div class="skills" ref={SkillAnimation}>
                <p>Portfolio Tech Stack</p>
                <div class="logos">
                    <ul>
                        <li>
                            <img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon"/>
                        </li>
                        <li>
                            <img src="https://skillicons.dev/icons?i=js,react" alt="skill-icon"/>
                        </li>
                        <li>
                            <img src="https://skillicons.dev/icons?i=nodejs,netlify" alt="skill-icon"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

  )
}

export default LandPage