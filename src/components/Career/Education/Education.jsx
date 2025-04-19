import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div className="ContainerEducation">
        <div className="timeline">
            <ul className='timelineul'>
                <li className='timelineli'>
                    <div className="timeline-content">
                        <h1>USMS ESTFBS - LP ITADM (BIG DATA)</h1>
                        <h2>Data Scientist | 2023 - 2024</h2>
                        <ul className='educationitem'>
                            <li>
                                <span>Data Cleaning and Preprocessing</span>
                            </li>
                            <li>
                                <span>Data Analysis and Exploration</span>
                            </li>
                            <li>
                                <span>Machine Learning</span>
                            </li>
                            <li>
                                <span>Big Data Architecture</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='timelineli'>
                    <div className="timeline-content">
                        <h1>OFPPT ISGI - Développement Digital</h1>
                        <h2>Full Stack Web Developer | 2021 - 2023</h2>
                        <ul className='educationitem'>
                            <li>
                                <span>Database Systems(SQL and NOSQL)</span>
                            </li>
                            <li>
                                <span>Full Stack Web Application Development</span>
                            </li>
                            <li>
                                <span>Project Management(Agile and DevOps)</span>
                            </li>
                            <li>
                                <span>Frameworks and Tech(MERN stack knowledge)</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='timelineli'>
                    <div className="timeline-content">
                        <h1>Bachelor of Physical Sciences</h1>
                        <h2>Physical Sciences Graduate | 2020 - 2021</h2>
                        <ul className='educationitem'>
                            <li>
                                <span>Core Physics Principles</span>
                            </li>
                            <li>
                                <span>Advanced Math & Logic Reasoning</span>
                            </li>
                            <li>
                                <span>Analytical & Problem-Solving Skills</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Education