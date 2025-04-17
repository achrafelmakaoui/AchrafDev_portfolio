import React, { useState } from 'react';
import './Career.css';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import { motion } from "framer-motion";

const Career = () => {
  const [activeCategory, setActiveCategory] = useState('Education');
  const [EducationCareer, setEducationCareer] = useState(true);
  const [ExperienceCareer, setExperienceCareer] = useState(false);


  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if(category==='Education'){
        setEducationCareer(true);
        setExperienceCareer(false);

    }
    else{
        setExperienceCareer(true);
        setEducationCareer(false);
    }
  };

  return (
    <section className='career-section' id='Career'>
      <div className="CareerContainer">
        <div className="career-content">
          <h2>Career</h2>
          <h3>Every achievement and lesson shapes my career 🌱.</h3>
        </div>
        <div className='Career-categ-cont'>
          <div className='Career-categ'>
            <span
              className={`custom-button-career capitalize ${activeCategory === 'Education' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Education')}
            >
              Education
            </span>
            <span
              className={`custom-button-career capitalize ${activeCategory === 'Experience' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('Experience')}
            >
              Experience
            </span>
          </div>
        </div>
        <div className='CareerLogos'>
            {EducationCareer && 
            <motion.div
                  className="box"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Education/>
            </motion.div>}

            {ExperienceCareer && <motion.div
                  className="box"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Experience/>
            </motion.div>}
        </div>
      </div>
    </section>
  );
};

export default Career;
