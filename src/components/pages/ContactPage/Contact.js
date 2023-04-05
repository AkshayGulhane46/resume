
import  { React, useState } from 'react';
import { Button } from '../../Button';
import emailjs from '@emailjs/browser'
import './Contact.css';

function Contact() {
   const sendEmail = (e) =>{
    e.preventDefault();
    alert("submitted");
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,e.target,process.env.REACT_APP_PUBLIC_KEY)
   } 
  return (
    <div className='contact_form'>
    <h1>Lets have a discussion!!</h1>
    <form className='contact_form' onSubmit={sendEmail}>
        <label for="email">Email:</label>
        <input type='text' name='email_from' id="emailFrom" className='email_from' placeholder='email' required></input>
        <label for="message">Message:</label>
        <textarea type="text" name='message' className='message_box' placeholder='msg' required></textarea>
        <Button type="submit" className="send">Send</Button>
    </form>

    </div>
  );
}

export default Contact;
