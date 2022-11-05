import React from 'react';
import './about.css';
import Navbar from '../Navbar/Navbar.js';

import img from './img-1.jpg';
import FoodImg from './img-2.jpg';
import LogoImg from './logo.png'
import Footer from '../Footer/Footer.js';


import { MdLocationPin } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { HiLockClosed } from 'react-icons/hi';



function About() {
  return (
    <div>
      {/* navbar */}
        <Navbar />
        {/* landing section */}
        <div className='abt-img-container'>
          <h2 className='abt-welcome-txt'>Conscious hospitality</h2>
          <h1 className='abt-landing-txt'>ABOUT US</h1>
        </div>

        {/* commitment section */}
        <div className='commitment-section'>
          <img className='commitment-img' src={img} />
          <div>
          <p className='subheading'>The director's word</p>
          <h2 className='abt-heading'> TRULY COMMITMENT</h2>
          <p className='commitment-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled.
          It to make a type specimen book.</p>
          </div>
        </div>


        {/* we are section */}
        <div className='we-are-section'>
          <div className='we-are-content'>
          <p className='we-are-txt'>We are</p>
          <h2 className='we-are-heading'>A 120 YEAR OLD HERITAGE</h2>
          <p className='we-are-desc'>There are many variations of passages of Lorem Ipsum availa ble, but the majority have suffered alteration in some form, by inject humour, or randomised words which don't look even slightly.</p>
          </div>

          <div className='we-are-content'>
          <p className='we-are-txt'>We are</p>
          <h2 className='we-are-heading'>AT QUEEN OF HILLS</h2>
          <p className='we-are-desc'>There are many variations of passages of Lorem Ipsum availa ble, but the majority have suffered alteration in some form, by inject humour, or randomised words which don't look even slightly.</p>
          </div>

          <div className='we-are-content'>
          <p className='we-are-txt'>We are</p>
          <h2 className='we-are-heading'>STUNNING LOCALITY</h2>
          <p className='we-are-desc'>There are many variations of passages of Lorem Ipsum availa ble, but the majority have suffered alteration in some form, by inject humour, or randomised words which don't look even slightly.</p>
          </div>
        </div>


        {/* star section */}
        <div className='star-section'>
          <div>
          <div className='star-sec-container '>
        <MdLocationPin className='star-sec-icon' size={60} />
        <div className='star-sec-content'>
          <h2 className='star-content-heading'>FIND US EASY</h2>
          <p className='star-content-desc'>Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium natus error sit voluptatem accusantium.</p>
        </div>
        </div>

        <div className='star-sec-container '>
        <AiFillStar className='star-sec-icon' size={60} />
        <div className='star-sec-content'>
          <h2 className='star-content-heading'>DO ANYTHING</h2>
          <p className='star-content-desc'>Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium natus error sit voluptatem accusantium.</p>
        </div>
        </div>

        <div className='star-sec-container '>
        <HiLockClosed className='star-sec-icon' size={60} /> 
        <div className='star-sec-content'>
          <h2 className='star-content-heading'>WORKING HOURS</h2>
          <p className='star-content-desc'>Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium natus error sit voluptatem accusantium.</p>
        </div>
        </div>
        </div>

        <img className='food-img' src={FoodImg}/>
        </div>

        {/* vintage section */}
        <div className='vintage-section'>
          <div>
            <img className='vintage-logo' src={LogoImg} />
          </div>
          <div>
            <h2 className='vintage-heading'>LOREM IPSUM</h2>
            <p className='vintage-desc'>LOREM IPSUM
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
          </div>
        </div>

<Footer />
    </div>
  )
}

export default About;