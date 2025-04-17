import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className="ContainerExperience">
        <div className="timeline">
            <ul className='timelineul'>
                <li className='timelineli'>
                    <div className="timeline-content">
                        <h1>SOPETROLE - Laâyoune</h1>
                        <h2>Data Scientist | Apr 2024 - June 2024</h2>
                        <ul className='experienceitem'>
                            <li>
                                <span>Automated transaction verification system with loyalty tracking to optimize customer management.</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='timelineli'>
                    <div className="timeline-content">
                        <h1>ONEE - Branche Électricité Laâyoune</h1>
                        <h2>Full Stack Web Developer | Mar 2023 - Apr 2023</h2>
                        <ul className='experienceitem'>
                            <li>
                                <span>Development of a commercial management dashboard application for performance indicators for DR08</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='timelineli'>
                    <div className="timeline-content">
                        <h1>GSIM - Laâyoune</h1>
                        <h2>Frontend Developer | July 2022 - Sept 2022</h2>
                        <ul className='experienceitem'>
                            <li>
                                <span>Designing a Chat Application Model with HTML, CSS, Bootstrap, and JavaScript.</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Experience

