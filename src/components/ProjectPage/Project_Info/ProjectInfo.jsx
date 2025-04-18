import React, { useEffect, useState } from 'react'
import './ProjectInfo.css'
import { Link, useParams } from "react-router-dom";
import projectsData from "../projects.json";
import { useTheme } from '../../../ThemeContext';
import AdbLogo from '../../images/blackLogo.webp'
import AdbWLogo from '../../images/whiteLogo.webp'
import Owner from '../../images/heroIMG.webp'

const ProjectInfo = () => {
    const [mainImage, setMainImage] = useState("");
    const [activeImage, setActiveImage] = useState("");
    const { category, slug } = useParams();
    const project = projectsData[category].find((p) => p.slug === slug);
    const { theme } = useTheme();


    useEffect(() => {
      if (project.details.image1) {
        const initialImage = require(`../../images/${project.details.image1}`);
        setMainImage(initialImage);
        setActiveImage(initialImage);
      }
    }, [project]);


    const secondaryImages = [
      require(`../../images/${project.details.image1}`),
      require(`../../images/${project.details.image2}`),
      require(`../../images/${project.details.image3}`),
      require(`../../images/${project.details.image4}`),
      require(`../../images/${project.details.image5}`),
    ];
  
    const handleImageClick = (image) => {
      setMainImage(image);
      setActiveImage(image);
    };

    if (!project) return <p>Project not found!</p>;

    return (
        <div className='ProjectInfo'>
            <div className='projectInfoContainer'>
                <div className="ProjectInfo-Header">
                    <div className='Header-Content'>
                        {theme==='light' && <><Link to="/"><img src={AdbLogo} loading="lazy" alt="Logo"/></Link></>}
                        {theme==='dark' && <><Link to="/"><img src={AdbWLogo} loading="lazy" alt="Logo"/></Link></>}
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                    </div>
                    <div className='Header-Divider'>
                        <div className='Project-date'>
                                <span>{project.details.date}</span>
                        </div>
                        <div className='Divider-border'></div>
                        <div className='Creator-Img'>
                            <img src={Owner} loading="lazy" alt='Owner'/>
                        </div>
                    </div>
                </div>
                <div className='ProjectInfo-Details'>
                    <div className='projectInfo-imagesText'>
                        <p>Here are a few snapshots of the project UI. These don't show all the features.</p>
                    </div>
                    <div className="ProjectInfo-images">
                        <div className='ProjectInfo-MainImage'>
                            <img src={mainImage} loading="lazy" alt={project.title}/>
                        </div>
                        <div className="ProductDetails-SecondaryImages">
                            {secondaryImages.map((image, index) => (
                                <img key={index} src={image} loading="lazy" alt={` ${index + 1}`} className={activeImage === image ? "active" : ""} onClick={() => handleImageClick(image)}/>
                            ))}
                        </div>
                    </div>
                    <div className='projectInfo-Text'>
                        <h2>🤨 What is this?</h2>
                        <hr className='hr'/>
                        <p>{project.details.whatIsThisDescription}</p>
                    </div>
                    <div className='projectInfo-Text'>
                        <h2>❓ Why</h2>
                        <hr className='hr'/>
                        <p>{project.details.whyDescription}</p>
                    </div>
                    <div className='projectInfo-Text'>
                        <h2>🔨 Tech Stack</h2>
                        <hr className='hr'/>
                        <p>This project is built with modern, cutting-edge tools to ensure a robust, scalable, and seamless user experience. The solution is designed to be efficient, reliable, and adaptable to meet the needs of users.</p>
                        <div className='projectinfo-TechStack'>
                            <ul>
                                {project.details.techStack.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='projectInfo-Text'>
                        <h2>🚀 Key Features</h2>
                        <hr className='hr'/>
                        <p>{project.details.keyFeatures}</p>
                    </div>
                    <div className='projectInfo-Text'>
                        <h2>🎯 My Role</h2>
                        <hr className='hr'/>
                        <p>{project.details.role}</p>
                    </div>
                    <div className='projectInfo-Text'>
                        <h2>📊 Challenges & Solutions</h2>
                        <hr className='hr'/>
                        <p>{project.details.challengesSolutions}</p>
                    </div>
                    <div className='projectInfo-Text'>
                        <h2>📎 Live Demo / GitHub</h2>
                        <hr className='hr'/>
                        {project.status === "Private" ? (
                            <>
                                <p>🚧 This project source code is private and not publicly available. However, I’d be happy to discuss my contributions and showcase relevant aspects upon request. Feel free to reach out!</p>
                                <br/>
                                {project.liveDemo && <><p>🌍 Here is the link to the live demo : <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a></p></>}
                            </>
                        ) : (
                            <>
                                <p>🌍 This project is open-source and publicly available. You can access the full source code and explore all features freely. Feel free to contribute or reach out if you have any questions!</p>
                                <br/>
                                {project.github && <><p>📂 Here is the link to the source code : <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p></>}
                                {project.liveDemo && <><p>🌍 Here is the link to the live demo : <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a></p></>}
                            </>
                        )}
                    </div>
                </div>
                <div className='projectInfo-Footer'>
                    <div className='projectInfo-GoBack'>
                        <Link to="/">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                            <span>Go back</span>
                        </Link>
                    </div>
                    <div className='projectInfo-Social'>
                        <a href='https://github.com/achrafelmakaoui' target="_blank" aria-label="Visit my GitHub profile" rel="noopener noreferrer"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        <a href='https://www.linkedin.com/in/achraf-el-makaoui/' target="_blank" aria-label="Connect with me on LinkedIn" rel="noopener noreferrer"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProjectInfo;
