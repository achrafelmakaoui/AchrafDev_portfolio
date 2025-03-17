import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectPage.css';
import projectsData from './projects.json';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
  const [activeCategory, setActiveCategory] = useState('Web');
  
  const webProjects = projectsData.web;
  const dataScienceProjects = projectsData.dataScience;

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };


  const renderProjects = (category) => {
    const projects = category === 'Web' ? webProjects : dataScienceProjects;
    return (
      <motion.div
        className="box"
        key={category}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project) => {
          const imageSrc = require(`../images/${project.thumbnail}`);
          return (
            <div className="pro pro__1 undefined">
              <Link key={project.slug} to={`/projects/${project.type}/${project.slug}`} className='projectsLink'>
                <div className="pro__img">
                  <img src={imageSrc} alt={project.slug}/>
                  <div className='pro__items'>
                    {project.status === 'Public' ? (
                      <>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" onClick={() => { window.open(project.liveDemo, '_blank')}}>
                          <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                          <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                        </svg>
                        <svg  width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0" onClick={() => { window.open(project.github, '_blank')}}>
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </>
                      ) : (
                        <>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </>
                    )}
                  </div>
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
          <h3>Projects</h3>
          <h4>Each project is a unique piece of development 🧩</h4>
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
