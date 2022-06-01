import React from 'react'
import './failure.css'
import {BrowserRouter as Router,Link,} from "react-router-dom";
import img from './failure.gif'

function Failure() {
  return (
    <div className='failure-page'>
        <img className='failure-img' src={img} />
        <h2 className='failure-txt'>YOUR PAYMENT FAILED !</h2>
        <p className='failure-subtxt'>Please try again</p>
        <Link  to="/" > <button className='retry-btn'> RETRY </button></Link>
    </div>
  )
}

export default Failure