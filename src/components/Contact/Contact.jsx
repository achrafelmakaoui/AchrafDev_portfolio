import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import Alert from './Alert/Alert'

const Contact = () => {
    const [SuccAlert,setSuccAlert]=useState(false);
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b9xhrhu', 'template_4wovhaa', form.current, '5R7w7JO7TMVjl_L7_')
      .then((result) => {
          console.log(result.text);
          setSuccAlert(true);
          setTimeout(() => {
            setSuccAlert(false);
          }, 5000);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleClickXMarkAlert = () => {
    setSuccAlert(false)
  } 

  return (
    <section className="contact" id="Contact">
        <div className="ContactContainer">
            <div className="contact-content">
                <h3>Contact</h3>
                <h4>Don't be shy! Hit me up! 👇</h4>
            </div>
            <div className='Contact-desFor'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='firstRow'>
                    <div className='formName'>
                        <label>Your name</label>
                        <input type="text" placeholder='First Name...' name="user_name" required/>
                    </div>
                    <div className='formEmail'>
                        <label>Your email</label>
                        <input type="email" placeholder='Email Address...' name="user_email" required/>
                    </div>
                </div>
                <div className='secondRow'>
                    <div className='formInterest'>
                        <label>What are you interested in?</label>
                        <select name="client_interest" required defaultValue={'test'}>
                            <option value="" disabled selected>Select an option...</option>
                            <option value="Website Development">Website Development</option>
                            <option value="E-commerce Store">E-commerce Store</option>
                            <option value="Web Application">Web Application</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className='formBudget'>
                        <label>What is your budget?</label>
                        <select name="client_budget" required defaultValue={'test'}>
                            <option value="" disabled selected>Select your budget...</option>
                            <option value="Less than $500">Less than $500</option>
                            <option value="$500 - $1,000">$500 - $1,000</option>
                            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                            <option value="More than $5,000">More than $5,000</option>
                        </select>
                    </div>
                </div>
                <div className='formMessage'>
                    <label>Message</label>
                    <textarea placeholder='Leave me a message...' name="message" required/>
                </div>
                <button type='submit'>
                    Send
                </button>
            </form>
            </div>
        </div>
        {SuccAlert && <Alert handleClose={handleClickXMarkAlert}/>}
    </section>
  )
}

export default Contact