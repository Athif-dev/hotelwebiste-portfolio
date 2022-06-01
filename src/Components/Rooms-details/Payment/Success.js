import React from 'react';
import './success.css';
import img from './success.gif'

import {BrowserRouter as Router,Link,} from "react-router-dom";



function Success() {
  return (
    <div className='success-page'>
        <img className='success-img' src={img} />
        <h2 className='success-txt'>YOUR PAYMENT WAS SUCCESSFUL !</h2>
        <p className='success-subtxt'>Thank you for your payment. you will recive an email shortly.</p>
        <Link  to="/" > <button className='return-home-btn'> RETURN HOME </button></Link>
    </div>
  )
}

export default Success;