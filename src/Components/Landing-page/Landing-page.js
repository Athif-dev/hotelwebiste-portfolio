import {React, useState} from 'react';
import './css/landing-page.css';
import Navbar from '../Navbar/Navbar.js';
import Check_availability from './Check_availability.js';
import Rooms from './Rooms.js';
import Footer from '../Footer/Footer.js';
import Contact from './Contact';
import Map from './Map';

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
        <div className='map'>
          <Map />
        </div>

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

         {/* gallery section */}
         <Contact />                      

         {/* footer */}
        <Footer />
    </>
  )
}

export default LandingPage;