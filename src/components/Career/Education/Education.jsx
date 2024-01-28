import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div class="ContainerEducation">
        <div class="timeline">
            <ul className='timelineul'>
                <li className='timelineli'>
                    <div class="timeline-content">
                        <h1>USMS ESTFBS - LP ITADM (BIG DATA)</h1>
                        <h3>Data Scientist | <mark className='markprogress'>In Progress...</mark></h3>
                        <ul className='educationitem'>
                            <li>
                                <span>Data Cleaning and Preprocessing</span>
                            </li>
                            <li>
                                <span>Data Analysis and Exploration</span>
                            </li>
                            <li>
                                <span>Data Visualization</span>
                            </li>
                            <li>
                                <span>Big Data Architecture</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='timelineli'>
                    <div class="timeline-content">
                        <h1>OFPPT ISGI - Développement Digital</h1>
                        <h3>Full Stack Web Developer | 2021 - 2023</h3>
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
            </ul>
        </div>
    </div>
  )
}

export default Education