import React, { useState } from 'react';
import './SkillsPage.css';
import FrontSkillsImages from './FrontImages';
import BackSkillsImages from './BackImages';
import DataSkillsImages from './DataImages';
import OtherSkillsImages from './OtherImages';
import { motion } from "framer-motion";

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [FrontendSkills, setFrontendSkills] = useState(true);
  const [BackedSkills, setBackedSkills] = useState(false);
  const [DataSkills, setDataSkills] = useState(false);
  const [OtherSkills, setOtherSkills] = useState(false);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if(category==='Frontend'){
        setFrontendSkills(true);
        setBackedSkills(false);
        setOtherSkills(false);
        setDataSkills(false)
    }
    else if(category==='Backend'){
        setBackedSkills(true);
        setFrontendSkills(false);
        setOtherSkills(false);
        setDataSkills(false)
    }
    else if(category==='Data Science'){
        setDataSkills(true)
        setBackedSkills(false);
        setFrontendSkills(false);
        setOtherSkills(false);
    }
    else{
        setOtherSkills(true);
        setFrontendSkills(false);
        setBackedSkills(false);
        setDataSkills(false)
    }
  };

  return (
    <section className='skills-section' id='Skills'>
      <div className="SkillsContainer">
        <div className="skills-content">
          <h2>Skills</h2>
          <h3>Each skill is a building block in my professional toolkit 🛠️.</h3>
        </div>
        <div className='skills-categ'>
          <span
            className={`custom-button capitalize ${activeCategory === 'Frontend' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Frontend')}
          >
            Frontend
          </span>
          <span
            className={`custom-button capitalize ${activeCategory === 'Backend' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Backend')}
          >
            Backend
          </span>
          <span
            className={`custom-button capitalize ${activeCategory === 'Data Science' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Data Science')}
          >
            Data Science
          </span>
          <span
            className={`custom-button capitalize ${activeCategory === 'Others' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Others')}
          >
            Others
          </span>
        </div>
        <div className='skillsLogos'>
            {FrontendSkills && 
                <motion.div className="box" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -60, opacity: 0 }} transition={{ duration: 1 }}>
                  <div className='skillsLogosItems'>
                    <span><img src={FrontSkillsImages.Html5} loading="lazy" alt='Html5'/></span>
                    <h2>Html5</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={FrontSkillsImages.Css3} loading="lazy" alt='Css3'/></span>
                    <h2>Css3</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={FrontSkillsImages.Bootstrap} loading="lazy" alt='Bootstrap'/></span>
                    <h2>Bootstrap</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={FrontSkillsImages.Js} loading="lazy" alt='Js'/></span>
                    <h2>Javascript</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={FrontSkillsImages.Jquery} loading="lazy" alt='Jquery'/></span>
                    <h2>Jquery</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={FrontSkillsImages.ReactJs} loading="lazy" alt='ReactJs'/></span>
                    <h2>ReactJs</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={FrontSkillsImages.Redux} loading="lazy" alt='Redux'/></span>
                    <h2>Redux</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={FrontSkillsImages.Tailwind} loading="lazy" alt='Tailwind'/></span>
                    <h2>Tailwind</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={FrontSkillsImages.NextJs} loading="lazy" alt='NextJs'/></span>
                    <h2>NextJs</h2>
                  </div>
                </motion.div>
            }
            {BackedSkills && 
                <motion.div className="box" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -60, opacity: 0 }} transition={{ duration: 1 }}>
                  <div className='skillsLogosItems'>
                    <span><img src={BackSkillsImages.Sql} loading="lazy" alt='Sql'/></span>
                    <h2>SQL</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={BackSkillsImages.Php} loading="lazy" alt='Php'/></span>
                    <h2>Php</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={BackSkillsImages.Laravel} loading="lazy" alt='Laravel'/></span>
                    <h2>Laravel</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={BackSkillsImages.Nodejs} loading="lazy" alt='NodeJs'/></span>
                    <h2>NodeJs</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={BackSkillsImages.Express} loading="lazy" alt='Express'/></span>
                    <h2>Express</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={BackSkillsImages.Mysql} loading="lazy" alt='Mysql'/></span>
                    <h2>Mysql</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={BackSkillsImages.Mongodb} loading="lazy" alt='MongoDb'/></span>
                    <h2>Mongodb</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={BackSkillsImages.Cassandra} loading="lazy" alt='Cassandra'/></span>
                    <h2>Cassandra</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={BackSkillsImages.Redis} loading="lazy" alt='Redis'/></span>
                    <h2>Redis</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img style={{ width:'115px',height:'115px'}} src={BackSkillsImages.Python} loading="lazy" alt='Python'/></span>
                    <h2>Python</h2>
                  </div>
                </motion.div>
            }
            {DataSkills && 
                <motion.div className="box" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -60, opacity: 0 }} transition={{ duration: 1 }}>
                  <div className='skillsLogosItems'>
                    <span><img style={{ width:'80px',height:'90px'}} src={DataSkillsImages.Spark} loading="lazy" alt='Spark'/></span>
                    <h2>Spark</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img style={{ width:'90px',height:'90px'}} src={DataSkillsImages.Hdfs} loading="lazy" alt='Hdfs'/></span>
                    <h2>Hdfs</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={BackSkillsImages.Cassandra} loading="lazy" alt='Cassandra'/></span>
                    <h2>Cassandra</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={BackSkillsImages.Sql} loading="lazy" alt='Sql'/></span>
                    <h2>SQL</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img style={{ width:'80px',height:'60px'}} src={DataSkillsImages.PowerBi} loading="lazy" alt='PowerBi'/></span>
                    <h2>PowerBi</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img style={{ width:'115px',height:'115px'}} src={BackSkillsImages.Python} loading="lazy" alt='Python'/></span>
                    <h2>Python</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={DataSkillsImages.Numpy} loading="lazy" alt='numpy'/></span>
                    <h2>Numpy</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={DataSkillsImages.Pandas} loading="lazy" alt='pandas'/></span>
                    <h2>Pandes</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={DataSkillsImages.R} loading="lazy" alt='R'/></span>
                    <h2>R</h2>
                  </div>
                </motion.div>
            }
            {OtherSkills && 
                <motion.div className="box" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -60, opacity: 0 }} transition={{ duration: 1 }}>
                  <div className='skillsLogosItems'>
                    <span><img src={OtherSkillsImages.Netlify} loading="lazy" alt='Netlify'/></span>
                    <h2>Netlify</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img style={{ width:'55px',height:'55px'}} src={OtherSkillsImages.Vercel} loading="lazy" alt='Vercel'/></span>
                    <h2>Vercel</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={OtherSkillsImages.Git} loading="lazy" alt='Git'/></span>
                    <h2>Git</h2>
                  </div>  
                  <div className='skillsLogosItems'>
                    <span><img src={OtherSkillsImages.Github} loading="lazy" alt='Github'/></span>
                    <h2>Github</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={OtherSkillsImages.Docker} loading="lazy" alt='Docker'/></span>
                    <h2>Docker</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img src={OtherSkillsImages.VirtualBox} loading="lazy" alt='VirtualBox'/></span>
                    <h2>VirtualBox</h2>
                  </div>
                  <div className='skillsLogosItems'>
                    <span><img style={{ width:'55px',height:'55px'}} src={OtherSkillsImages.Render} loading="lazy" alt='Render'/></span>
                    <h2>Render</h2>
                  </div>
                </motion.div>
            }
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
