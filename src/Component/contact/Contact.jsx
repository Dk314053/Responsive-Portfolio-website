import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {PiMessengerLogoBold} from 'react-icons/pi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form =useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tnd2xq5', 'template_aibh7gj', form.current, 'TlP8noW3duQZu8-nu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
<div className='contact__options'>
  <article className='contact__option'>
    <AiOutlineMail className='contact__option-icon'/>
    <h4>Email</h4>
    <h5>dk314053@gmail.com</h5>
    <a href='mailto:dk314053@gmail.com' target='_blank'>Send a Message</a>
  </article>
  <article className='contact__option'>
    <PiMessengerLogoBold className='contact__option-icon'/>
    <h4>Messenger</h4>
    <h5>Deepak kumar</h5>
    <a href='https://m.me/Dk314053' target='_blank'>Send a Message</a>
  </article>
  <article className='contact__option'>
    <BsWhatsapp className='contact__option-icon'/>
    <h4>WhatsApp</h4>
    <h5>+91-8756665850</h5>
    <a href='https://api.whatsapp.com/send?phone+918756665850' target='_blank'>Send a Message</a>
  </article>
</div>
<form ref={form} onSubmit={sendEmail}>
  <div className='main-content'>
  <input type='text' name='name' placeholder='Your Full Name' required/>
  <input type='email' name='email' placeholder='Your Email' required/>
  <textarea name="message" id=""  rows="7" placeholder='Your Message type here...' required></textarea>
  <button type='submit' className='formbtn'>Send Message</button>
  </div>
</form>
      </div>
    </section>
  )
}

export default Contact