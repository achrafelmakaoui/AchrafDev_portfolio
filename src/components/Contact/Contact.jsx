import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

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


  return (
    <section className="contact" id="Contact">
        <div className="ContactContainer">
            <div className="contact-content">
                <h2>Contact</h2>
                <h3>Don't be shy! Hit me up! 👇</h3>
            </div>
            <div className='Contact-desFor'>
                {SuccAlert && <p className='alert-contactForm'>Thanks for reaching out! We’ve received your message and will get back to you soon... ✅</p>}
                {!SuccAlert && (
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='firstRow'>
                            <div className='formName'>
                                <label htmlFor='user_name'>Your name</label>
                                <input type="text" placeholder='First Name...' name="user_name" id="user_name" required/>
                            </div>
                            <div className='formEmail'>
                                <label htmlFor='user_email'>Your email</label>
                                <input type="email" placeholder='Email Address...' name="user_email" id="user_email" required/>
                            </div>
                        </div>
                        <div className='secondRow'>
                            <div className='formInterest'>
                                <label htmlFor='client_interest'>What are you interested in?</label>
                                <select name="client_interest" id='client_interest' required defaultValue=''>
                                    <option value="" disabled>Select an option...</option>
                                    <option value="Website Development">Website Development</option>
                                    <option value="E-commerce Store">E-commerce Store</option>
                                    <option value="Web Application">Web Application</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className='formBudget'>
                                <label htmlFor='client_budget'>What is your budget?</label>
                                <select name="client_budget" id='client_budget' required defaultValue=''>
                                    <option value="" disabled>Select your budget...</option>
                                    <option value="Less than $500">Less than $500</option>
                                    <option value="$500 - $1,000">$500 - $1,000</option>
                                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                                    <option value="More than $5,000">More than $5,000</option>
                                </select>
                            </div>
                        </div>
                        <div className='formMessage'>
                            <label htmlFor='message'>Message</label>
                            <textarea placeholder='Leave me a message...' name="message" id='message' required/>
                        </div>
                        <button type='submit'>
                            Send
                        </button>
                    </form>
                )}
            </div>
        </div>
    </section>
  )
}

export default Contact