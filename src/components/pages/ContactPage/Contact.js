
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
    <form className='contact_form' onSubmit={sendEmail}>
        <input type='text' name='email_from' id="emailFrom" className='email_from' placeholder='email'></input>
        <textarea type="text" name='message' className='message_box' placeholder='msg'></textarea>
        <Button type="submit" className="send">Send</Button>
    </form>
  );
}

export default Contact;
