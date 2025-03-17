import React from 'react'
import NotFoundImg from '../images/tetx.svg'
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='NotFoundPage'>
        <div className='NotFoundPageContent'>
            <img src={NotFoundImg} alt='NotFoundImg'/>
            <h1>Page Not Found</h1>
            <p>The page you are looking for doesn't exist or an
               other error occurred, go back to home page.
            </p>
            <Link to='/' className='GoBack'>Go Back</Link>
        </div>
    </div>
  )
}

export default NotFound