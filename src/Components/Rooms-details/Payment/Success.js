import React from 'react';
import './success.css';
import img from './success.gif'


function Success() {
  return (
    <div className='success-page'>
        <img className='success-img' src={img} />
        <h2 className='success-txt'>YOUR PAYMENT WAS SUCCESSFUL !</h2>
        <p className='success-subtxt'>Thank you for your payment. you will recive an email shortly.</p>
        {/* <button className=''>Return Home</button> */}
    </div>
  )
}

export default Success;