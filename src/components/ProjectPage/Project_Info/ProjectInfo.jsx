import React from 'react'
import './ProjectInfo.css'
import { motion } from "framer-motion";
import Img from '../../images/ecommerce_app.png'


const ProjectInfo = ({ handelClose }) => {
  return (
    <div className='motionDiv'>
      <motion.div className="projectInfoBanner" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring",stiffness: 260,damping: 20}}>
        <div className='coLgFrst'>
            <div className='projectInfoContent'>
              <div className='projectNameDiv'>
                <div className='projectTitleLik'>
                  <h1>Sneakers store</h1>
                  <svg width="20" height="20" stroke="currentColor" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/>
                  </svg>
                </div>
                <div className='ProjectContr'>
                  <h3>Idea and Implementation by <span  onClick={() => { window.open('https://www.linkedin.com/in/achraf-el-makaoui-851969242/', '_blank')}}>Achraf EL MAKAOUI</span> & <span onClick={() => { window.open('https://www.linkedin.com/in/eli-mouad/', '_blank')}}>Mouad ELIDRISSI</span>.</h3>
                </div>
              </div>
              <div className='projectClose'>
                <svg x="0px" y="0px" width="24" height="24" stroke="currentColor" fill="currentColor" viewBox="0 0 50 50" onClick={handelClose}>
                  <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
                </svg>
              </div>
            </div>
            <div className='imgInfoBanner'>
              <img src={Img} alt='info'/>
            </div>
            <div className='projectInfoText'>
              <h2>🤨 What is this?</h2>
              <hr className='hr'/>
              <p>I am thrilled to introduce my online store project specializing in the sale of shoes for men, women. The essence of this project is to provide customers with an optimal user experience by allowing them to easily visualize products through a user-friendly interface. Our website will feature clear categories and advanced search tools, along with filters to sort products by category, price, size, and color. The goal is to create a seamless browsing experience that enhances customer satisfaction and ease of product discovery.</p>
            </div>
            <div className='projectInfoText'>
              <h2>❓ Why</h2>
              <hr className='hr'/>
              <p>This project is poised to revolutionize the online shoe shopping experience by seamlessly integrating a user-friendly interface with robust management tools. Our application empowers managers with profit and loss tracking, facilitating informed decision-making. This strategic approach ensures efficient operations, allowing for quick adaptability to market trends. By focusing on simplicity and accessibility, both managers and employees can navigate effortlessly, contributing to a positive and satisfying customer experience. In essence, our commitment to efficiency and adaptability positions this project as a trailblazer in the online retail space, promising a seamless and enjoyable shopping journey for our customers.</p>
            </div>
            <div className='projectInfoText'>
              <h2>🔨 Tech Stack</h2>
              <hr className='hr'/>
              <p>This project is built on the cutting-edge MERN stack, leveraging MongoDB, Express.js, React, and Node.js technologies for a robust and scalable online shoe shopping experience.</p>
              <p>The project built using the following tools & frameworks:</p>
              <div className='projectTeckStack'>
                <div className='TeckStackSlot1'>
                  <ul>
                    <li>Node JS</li>
                    <li>React JS</li>
                    <li>Redux</li>
                    <li>Hookstate</li>
                  </ul> 

                </div>
                <div className='TeckStackSlot2'>
                  <ul>
                    <li>React-Use</li>
                    <li>CSS</li>
                    <li>JWT</li>
                    <li>STRIPE</li>
                  </ul>
                </div>
                <div className='TeckStackSlot3'>
                  <ul>
                    <li>Express JS</li>
                    <li>Mongo DB</li>
                    <li>Mongo DB ATLAS</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectInfo