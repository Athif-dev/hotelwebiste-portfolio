import React from 'react';
import './css/contact.css';

function Contact() {
  return (
      <div className='contact-container' id='contact'>
    <div className='contact-content'>
        <h2 className='contact-heading'>CONTACT US</h2>
        <p className='contact-desc'>Etiam convallis, felis quis dapibus dictum, libero mauris luctus nunc, non fringilla purus ligula non justo. Non ligula non justo.</p>

        <div>
            <h2 className='contact-subheading'> AJ HERITAGE INN</h2>
            <p className='contact-details'> No 187, Blakie Road Balkie House, above Old Woodlands Hotel, near Race Course, Ooty, Tamil Nadu 643001</p>
            <p className='contact-email'>Email : ajheritage@gmail.com</p>
            <p className='contact-phone'>Phone : +88 (0) 101 0000 000</p>
        </div>
        </div>

        {/* form section */}
        <div className='contact-form'>
            <input className='contact-input' type='text' placeholder='Your Name' required></input>
            <input className='contact-input' type='text' placeholder='Your Email' required></input>
            <textarea className='contact-input-textarea' type='textarea' placeholder='Message' required></textarea>
            <button className='contact-btn' type='submit'>SEND MESSAGE</button>
        </div>

        </div>
    
  )
}

export default Contact