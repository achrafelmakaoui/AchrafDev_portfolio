import React, { useRef, useState } from 'react'
import './Contact.css'
import ContactImg from '../images/contact.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelopeOpen, faCircleUser, faEnvelopeOpenText,} from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
import Alert from './Alert/Alert'

const Contact = () => {
    const [SuccAlert,setSuccAlert]=useState(false);
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1yne8jb', 'template_4wovhaa', form.current, '5R7w7JO7TMVjl_L7_')
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
                <div className='Contact-Items'>
                    <div className='ContactImg'>
                        <div className='ContactImgBnner'>
                            <img src={ContactImg} alt='cnt' />
                        </div>
                        <div className='ContactEmailBnner'>
                            <div className='CircleIconEmail'>
                                <svg height="16" width="16" viewBox="0 0 512 512" fill="#0346CE">
                                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                                </svg>
                            </div>
                            <div className='LnkEmail'>
                                <h2>Email</h2>
                                <h4>elmakaouiachraf@gmail.com</h4>
                            </div>
                        </div>
                        <div className='ContactPhoneBnner'>
                            <div className='CircleIconPhone'>
                                <svg height="16" width="16" aria-hidden="true" fill="#0346CE" viewBox="0 0 18 18">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"/>
                                </svg>                          
                            </div>
                            <div className='NbrPhone'>
                                <h2>Phone</h2>
                                <h4>+212 6 26 62 73 78</h4>
                            </div>
                        </div>
                    </div>
                    <div className='ContactForm'>
                        <h4>Feel free to reach out through my open inbox 📬 for any inquiries, I'm all ears and eager to connect!</h4>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='formName'>
                                <label>First Name</label>
                                <input type="text" placeholder='First Name...' name="user_name" required/>
                                <FontAwesomeIcon icon={faCircleUser} className='UserIcon' />
                            </div>
                            <div className='formEmail'>
                                <label>Email Address</label>
                                <input type="email" placeholder='Email Addres...' name="user_email" required/>
                                <FontAwesomeIcon icon={faEnvelopeOpen} className='Envolope' />
                            </div>
                            <div className='formMessage'>
                                <label>Message</label>
                                <textarea placeholder='Leave me a message...' name="message" required/>
                                <FontAwesomeIcon icon={faEnvelopeOpenText} className='EnvelopeText' />
                            </div>
                            <button type='submit'>
                                <FontAwesomeIcon icon={faPaperPlane} className='paperEmail' />
                                Get In Touch
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {SuccAlert && <Alert handleClose={handleClickXMarkAlert}/>}
    </section>
  )
}

export default Contact