import React from 'react';
import './footer.css';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';



function Footer() {
  return (
      <>
    <div className='footer'>
        <div className='footer-rows'>
            <h3 className='footer-heading'>CONTACT</h3>
            <p className='footer-desc'>9 Crosby Street, New York City, NY <br />
            hotelemail@provider.net
            ( 646 ) 218-6400</p>
        </div>

        <div className='footer-rows'>
            <h3 className='footer-heading' >VINTAGE</h3>
            <p className='footer-desc'>Lorem ipsum dolor sit amet, consecteturadipiscing elit, <br /> S sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad ipsum dolor sit amet. Lorem <br /> ipsum dolor sit amet, consectetura iolor sit amet.</p>
        </div>

        <div className='footer-rows'>
            <AiOutlineTwitter size={30} className='footer-icon' />
            <FaInstagramSquare size={30} className='footer-icon' />
            <BsFacebook size={30} className='footer-icon' />
        </div>
    </div>
    <p className='footer-copyright'>© ALL RIGHTS RESEVED AJHERITAGE 2022 | MADE WITH LOVE BY MOUSE POINT</p>
    </>
  )
}

export default Footer;