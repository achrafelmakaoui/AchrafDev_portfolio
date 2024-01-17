import React, { useRef } from 'react';
import './Intro.css';
import Lottie from 'lottie-react';
import Looding from '../Assets/LoodingBar.json';

const Intro = () => {
  const loodingRef = useRef(null);

  return (
    <section className='intro-section' id='intro'>
      <div className='IntroContainer'>
        <div className='intro-content'>
          <h1>Achraf El Makaoui</h1>
        </div>
        <div className='intro-bar'>
          {/* <span className='introLoding-bar'></span> */}
          <Lottie lottieRef={loodingRef} animationData={Looding} className='lottieAnm' />
        </div>
      </div>
    </section>
  );
}

export default Intro;
