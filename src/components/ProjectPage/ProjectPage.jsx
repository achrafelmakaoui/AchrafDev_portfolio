import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectPage.css';
import projectsData from './projects.json';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
  const [activeCategory, setActiveCategory] = useState('Web');
  
  const webProjects = projectsData.web;
  const dataScienceProjects = projectsData.datascience;

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };


  const renderProjects = (category) => {
    const projects = category === 'Web' ? webProjects : dataScienceProjects;
    return (
      <motion.div className="box" key={category} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -60, opacity: 0 }} transition={{ duration: 1 }}>
        {projects.map((project) => {
          const imageSrc = require(`../images/${project.thumbnail}`);
          return (
            <div key={project.slug} className="pro pro__1 undefined">
              <Link to={`/projects/${project.type}/${project.slug}`} className='projectsLink'>
                <div className="pro__img">
                  <img src={imageSrc} loading="lazy" alt={project.slug}/>
                </div>
                <div className="pro__text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <section className="Projects" id="Projects">
      <div className="ProjectsContainer">
        <div className="Projects-content">
          <h2>Projects</h2>
          <h3>Each project is a unique piece of development 🧩</h3>
        </div>
        <div className="projects-categ">
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
        </div>
        <div className="projects-grid">
          {renderProjects(activeCategory)}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
