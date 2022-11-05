import {React, useState} from 'react';
import './css/landing-page.css';
import Navbar from '../Navbar/Navbar.js';
import Check_availability from './Check_availability.js';
import Rooms from './Rooms.js';
import Footer from '../Footer/Footer.js';
import Contact from './Contact';

import gimg1 from './img/g1.jpg';
import gimg2 from './img/g2.jpg';
import gimg3 from './img/g3.jpg';


import { AiOutlineWifi } from 'react-icons/ai';
import { GiGamepad } from 'react-icons/gi';
import { AiOutlineStar } from 'react-icons/ai';
import { VscNotebook } from 'react-icons/vsc';




function LandingPage() {

  return (
    <>
        <Navbar />
        <div className='img-container'>
          <h2 className='welcome-txt'>Welcome to the queen of hills</h2>
          <h1 className='landing-txt'>AJ HERITAGE INN</h1>
          <p className='landing-desc'> Experience your stay with Heritage and Luxury</p>
        </div>

        {/* booking section */}
       <Check_availability />
        
        {/* rooms & suits section */}
       <Rooms />

        {/* nature section */}
        <div className='nature-section'>
          <h2 className='nature-heading'>ADVENTURE CALLS</h2>
          <p className='nature-desc'> Find amazing experiences including bonfire, treking, tour packages, safari rides - All upon checking in at AJ Heritage Inn</p>
          <button className='nature-btn'>VIEW OFFER</button>
        </div>

        {/* services section */}
        <div className='services-section'>
        <div className='services'>
          <AiOutlineWifi className='services-icon' size={70} />
          <h1 className='services-heading'>WIFI ENVIRONMENT</h1>
          <hr />
          <p className='services-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum simple been the industry.</p>
        </div>

        <div className='services' id='services'>
        <GiGamepad className='services-icon' size={70} />
          <h1 className='services-heading'>RELAXATION</h1>
          <hr />
          <p className='services-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum simple been the industry.</p>
        </div>

        <div className='services'>
        <AiOutlineStar className='services-icon' size={70} />
          <h1 className='services-heading'>SMOOTH PARALLAX</h1>
          <hr />
          <p className='services-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum simple been the industry.</p>
        </div>

        <div className='services'>
        <VscNotebook className='services-icon' size={70} />
          <h1 className='services-heading'>CONFERENCE ROOMS</h1>
          <hr />
          <p className='services-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum simple been the industry.</p>
        </div>
        </div>

        {/* map section */}

        <div className='map-section'>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.1205084529993!2d76.69863131462468!3d11.398792650514505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba897b2751fde43%3A0xec454862bb9d71d1!2sAJ%20Heritage%20Group%20of%20Hotels!5e0!3m2!1sen!2sin!4v1653992965233!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

         {/* contact section */}
         <Contact />                      

        {/* gallery section */}
        <div className='gallery' id='gallery'>
          <div className='gallery-row'>
            <div className='gallery-content'>
            <h2 className='gallery-heading'>OUR GALLERY</h2>
            <p className='gallery-desc'>Lorem Ipsum is simply dummy texting of the printing and type setting industry. Dummy texts  since the when an unknown.</p>
            <p className='gallery-btn'>View All</p>
            </div>
          </div>

          <div className='gallery-row'>
            <img className='gallery-img' src={gimg1} />
          </div>

          <div className='gallery-row'>
          <img className='gallery-img' src={gimg2} />
          </div>

          <div className='gallery-row'>
          <img className='gallery-img' src={gimg3} />
          </div>
        </div>

        
         {/* footer */}
        <Footer />
    </>
  )
}

export default LandingPage;