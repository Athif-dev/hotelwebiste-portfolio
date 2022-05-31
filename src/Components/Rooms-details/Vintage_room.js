import {React, useState} from 'react'
import './Classic_room.css';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js';


import Image from './classic-room.jpg';
import SubImage from './subimg1.jpg';
import axios from 'axios';

import {BrowserRouter as Router,Link,} from "react-router-dom";



const bookingPostUrl = 'https://aj-heritage-api.herokuapp.com/bookings/newBookings';


function Classic_room() {

  //setting states from input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("");
  const [rooms, setRooms] = useState("");
  const [children, setChildren] = useState("");
  const [roomType, setRoomType] = useState("");
  const [message, setMessage] = useState("");


  function booking(){
    try{
   let res =  axios.post(bookingPostUrl, {
      name: name,
      email: email,
      checkIn: checkIn,
      checkOut: checkOut,
      adults: adults,
      rooms: rooms,
      children: children,
      roomType: "Vintage",

    }).then(alert("Booking done successfully"))

    //let resJson = res.json();

    if(res.status === 200){
      setMessage("Booking details saved");
      setRoomType("Vintage");
    }else{
      setMessage("Error has occurred");
    }
  }catch(err){
    console.log(err);
  }
  }

  return (
    <div><Navbar />
    <div className='heading-section'>
        <h2 className='main-text'>VINTAGE ROOM</h2>
        <Link style={{textDecoration: 'none', color:'black'}}  to="/"> <p className='nav-txt'> Home  </p></Link>
         <p className='nav-subtxt'>/ Vintage Room </p>
    </div>

    <div className='classic-container'>
      <div className='classic-images-container'>
    <img className='classic-main-img' src={Image} />
    <div className='sub-images'>
    <img className='classic-sub-img' src={SubImage} />
    <img className='classic-sub-img' src={SubImage} />
    <img className='classic-sub-img' src={SubImage} />
    </div>
    </div>


    {/* booking from section */}
    <div className='classic-booking-form'>
      <h2 className='form-heading'>RESERVATION</h2>


      <div className='classic-input-feilds'>
      <label className='classic-booking-text'> Name</label>
      <input className='classic-booking-input ' placeholder='Enter your name' type='text' onChange={(e)=>{setName(e.target.value)}}></input>
    </div>

      <div className='classic-input-feilds'>
      <label className='classic-booking-text'> Email</label>
      <input className='classic-booking-input ' placeholder='ex: myname@example.com' type='email' onChange={(e)=>{setEmail(e.target.value)}}></input>
    </div>

      <div className='classic-input-feilds'>
      <label className='classic-booking-text'> Check in</label>
      <input className='classic-booking-input' type='date' onChange={(e)=>{setCheckIn(e.target.value)}}></input>
    </div>

    <div className='input-feilds'>
      <label className='classic-booking-text'> Check out</label>
      <input className='classic-booking-input' type='date' onChange={(e)=>{setCheckOut(e.target.value)}}></input>
    </div>

    <div className='classic-input-feilds'>
      <label className='classic-booking-text'> Rooms</label>
      <select className='classic-booking-input' onChange={(e)=>{setRooms(e.target.value)}}>
      <option>1</option>
      <option>2</option>
      </select>
    </div>

    <div className='classic-input-feilds'>
    <label className='classic-booking-text'> Adults</label>
      <select className='classic-booking-input' onChange={(e)=>{setAdults(e.target.value)}}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      </select>
    </div>

    <div className='classic-input-feilds'>
      <label className='classic-booking-text'> Kids</label>
      <select className='classic-booking-input' onChange={(e)=>{setChildren(e.target.value)}}>
      <option>0</option>
      <option>1</option>
      <option>2</option>
      </select>
    </div>
    <button className=' classic-booking-btn' onClick={booking}>Book Now</button>


    </div>
    </div>

    <div className='room-details'>
    <h2 className='room-heading'>ROOM DETAILS</h2> 
    <h2 className='information-heading'>INFORMATION</h2>
    </div>

    <div className='section'>
    <p className='information-desc'> These spacious rooms feature colonial style furnishings inspired by Ooty’s British heritage. The rooms are ideal for large families or groups offering accomodation for 4 adults & 4 children.</p>

    <div className='line'></div>

   <h2 className='amenities-heading'>AMENITIES</h2>
    <div className='list-container'>
    <li className='amenities-li'>-Casino</li>
    <li className='amenities-li'>-Garage Space</li>
    <li className='amenities-li'>-Parking</li>
    </div>
    <div className='list-container'>
    <li className='amenities-li'>-Pet Friendly</li>
    <li className='amenities-li'>-Sauna</li>
    <li className='amenities-li'>-Wi-Fi</li>
    </div>

    <div className='list-container'>
    <li className='amenities-li'>-Room Service</li>
    <li className='amenities-li'>-Mini Bar</li>
    <li className='amenities-li'>-Casino</li>
    </div>

    <div className='line'></div>


    <h2 className='services-heading'>EXTRA SERVICE</h2>
    <p className='services-li'>Air Conditioner . . . . . . . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </p>
    <p className='services-li'>Free Wireless Internet	 . . . . . . . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </p>
    <p className='services-li'>LCD Television	 . . . . . . . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </p>
    <p className='services-li'>Microwave . . . . . . . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </p>
    </div>

    <Footer className='footer' />
    </div>
  )
}

export default Classic_room;