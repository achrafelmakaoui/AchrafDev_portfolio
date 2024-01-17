import React, { useState } from 'react';
import './Career.css';
import Education from './Education/Education';
import Experience from './Experience/Experience';

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
          <h3>Career</h3>
          <h4>Every achievement and lesson shapes my career 🌱.</h4>
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
            {EducationCareer && <><Education/></>}
            {ExperienceCareer && <><Experience/></>}
        </div>
      </div>
    </section>
  );
};

export default Career;
