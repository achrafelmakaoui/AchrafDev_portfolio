import React, { useState } from 'react';
import './SkillsPage.css';
import FrontSkillsImages from './FrontImages';
import BackSkillsImages from './BackImages';
import DataSkillsImages from './DataImages';
import OtherSkillsImages from './OtherImages';

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
    else if(category==='BigData'){
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
    <section className='skills-section' id='skills'>
      <div className="container">
        <div className="skills-content">
          <h3>Skills</h3>
          <h4>Each skill is a building block in my professional toolkit 🛠️.</h4>
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
            className={`custom-button capitalize ${activeCategory === 'BigData' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('BigData')}
          >
            BigData
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
                <>
                    <span><img src={FrontSkillsImages.Html5} alt='Html5'/></span>
                    <span><img src={FrontSkillsImages.Css3} alt='Css3'/></span>
                    <span><img src={FrontSkillsImages.Bootstrap} alt='Bootstrap'/></span>
                    <span><img src={FrontSkillsImages.Js} alt='Js'/></span>
                    <span><img src={FrontSkillsImages.Jquery} alt='Jquery'/></span>
                    <span><img src={FrontSkillsImages.ReactJs} alt='ReactJs'/></span>
                    <span><img src={FrontSkillsImages.Redux} alt='Redux'/></span>
                    <span><img src={FrontSkillsImages.Ts} alt='Ts'/></span>
                    <span><img src={FrontSkillsImages.Tailwind} alt='Tailwind'/></span>
                    <span><img src={FrontSkillsImages.MaterialUI} alt='MaterialUi'/></span>
                    <span><img src={FrontSkillsImages.NextJs} alt='NextJs'/></span>
                </>
            }
            {BackedSkills && 
                <>
                    <span><img src={BackSkillsImages.Mysql} alt='Mysql'/></span>
                    <span><img src={BackSkillsImages.Php} alt='Php'/></span>
                    <span><img src={BackSkillsImages.Laravel} alt='Laravel'/></span>
                    <span><img src={BackSkillsImages.Nodejs} alt='Nodejs'/></span>
                    <span><img src={BackSkillsImages.Express} alt='Express'/></span>
                    <span><img src={BackSkillsImages.Mongodb} alt='Mongodb'/></span>
                    <span><img src={BackSkillsImages.Cassandra} alt='Cassandra'/></span>
                    <span><img src={BackSkillsImages.Hbase} alt='Hbase'/></span>
                    <span><img src={BackSkillsImages.Redis} alt='Redis'/></span>
                </>
            }
            {DataSkills && 
                <>
                    <span><img src={DataSkillsImages.Hadoop} alt='Hadoop'/></span>
                    <span><img src={DataSkillsImages.Scoop} alt='Scoop'/></span>
                    <span><img src={DataSkillsImages.Spark} alt='Spark'/></span>
                    <span><img src={DataSkillsImages.Mapreduce} alt='Mapreduce'/></span>
                    <span><img src={DataSkillsImages.Kafka} alt='Kafka'/></span>
                    <span><img src={DataSkillsImages.Hdfs} alt='Hdfs'/></span>
                    <span><img src={DataSkillsImages.PowerBi} alt='PowerBi'/></span>
                    <span><img src={BackSkillsImages.Python} alt='Python'/></span>
                </>
            }
            {OtherSkills && 
                <>
                    <span><img src={OtherSkillsImages.Netlify} alt='Netlify'/></span>
                    <span><img src={OtherSkillsImages.Vercel} alt='Vercel'/></span>
                    <span><img src={OtherSkillsImages.Git} alt='Git'/></span>
                    <span><img src={OtherSkillsImages.Github} alt='Github'/></span>
                    <span><img src={OtherSkillsImages.Docker} alt='Docker'/></span>
                    <span><img src={OtherSkillsImages.VirtualBox} alt='ReactJs'/></span>
                </>
            }
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
