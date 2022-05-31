import {React, useState, useEffect} from 'react'
import './Classic_room.css';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js';
import axios from 'axios';


import Image from './classic-room.jpg';
import SubImage from './subimg1.jpg';

import {BrowserRouter as Router,Link,} from "react-router-dom";


const bookingPostUrl = 'https://aj-heritage-api.herokuapp.com/bookings/newBookings';

function Classic_room() {


    // api fetch code
    // const url = 'https://aj-heritage-api.herokuapp.com/rooms/allRooms'
    // const [apiData,setApiData] = useState(null)
  
    //  useEffect(() =>{
    //   axios.get(url)
    //   .then(response =>{
    //     setApiData(response.data)
    //   })
    // },[url])
    // console.log(apiData[0].roomType);
    // api fetch code end



    



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

  function handleClick(e) {
    if (name,email,checkIn,checkOut,adults,children === "") {
      alert('Please fill in your details')
    }else{
    var options = {
      "key": "rzp_test_nqm4ti3cQRNgUP", // Enter the Key ID generated from the Dashboard
      "amount": "10"*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "AJ Heritage Inn",
      "description": "Book your room",
      "image": "https://ibb.co/dtnhvZg",
      "callback_url": "http://localhost:3000/",
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "",
          "contact": ""
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": 'rgb(197, 157, 95)'
      }
  };
}
  var pay = new window.Razorpay(options);
  pay.open()
.then()
  try{
    let res =  axios.post(bookingPostUrl, {
       name: name,
       email: email,
       checkIn: checkIn,
       checkOut: checkOut,
       adults: adults,
       rooms: rooms,
       children: children,
       roomType: "Classic",
 
     }).then(()=>{
       try {
         const response =  axios.patch('http://aj-heritage-api.herokuapp.com/rooms/6274d8684d7c5bcf82b2e631', { 
           "roomType": "Classic",
           "price": 2000,
           "adultsLimit": 2,
           "childrenLimit": 1,
           "count": 3
         });
         console.log('Returned data: ', response);
       } catch (e) {
         console.log(` Axios request failed: ${e}`);
       }
     })
 
     //let resJson = res.json();
 
     if(res.status === 200){
       setMessage("Booking details saved");
       setRoomType("Classic");
 
 
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
        <h2 className='main-text'>CLASSIC ROOM</h2>
        <Link style={{textDecoration: 'none', color:'black'}}  to="/"> <p className='nav-txt'> Home  </p></Link>
         <p className='nav-subtxt'>/ classic Room </p>
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
      <label className='classic-booking-text'> NAME :</label>
      <input className='classic-booking-input ' placeholder='Enter your name' type='text' onChange={(e)=>{setName(e.target.value)}}></input>
    </div>

      <div className='classic-input-feilds'>
      <label className='classic-booking-text'> EMAIL :</label>
      <input className='classic-booking-input ' placeholder='ex: myname@example.com' type='email' onChange={(e)=>{setEmail(e.target.value)}}></input>
    </div>

      <div className='classic-input-feilds'>
      <label className='classic-booking-text'> CHECK IN :</label>
      <input className='classic-booking-input' type='date' onChange={(e)=>{setCheckIn(e.target.value)}}></input>
    </div>

    <div className='classic-input-feilds'>
      <label className='classic-booking-text'> CHECK OUT :</label>
      <input className='classic-booking-input' type='date' onChange={(e)=>{setCheckOut(e.target.value)}}></input>
    </div>

    <div className='classic-input-feilds'>
      <label className='classic-booking-text'> ROOMS :</label>
      <select className='classic-booking-input' onChange={(e)=>{setRooms(e.target.value)}}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      </select>
    </div>

    <div className='classic-input-feilds'>
    <label className='classic-booking-text'> ADULTS :</label>
      <select className='classic-booking-input' onChange={(e)=>{setAdults(e.target.value)}}>
      <option>1</option>
      <option>2</option>
      </select>
    </div>

    <div className='classic-input-feilds'>
      <label className='classic-booking-text'> KIDS :</label>
      <select className='classic-booking-input' onChange={(e)=>{setChildren(e.target.value)}}>
      <option>0</option>
      <option>1</option>
      </select>
    </div>

    <div className='classic-input-feilds'>
      <label className='classic-booking-text'> INITAL PRICE :</label>
      <p className='classic-booking-price' onChange={(e)=>{setChildren(e.target.value)}}>
      999 
      </p>
    </div>

    <button className=' classic-booking-btn' onClick={handleClick} >Book Now</button>


    </div>
    </div>

    <div className='room-details'>
    <h2 className='room-heading'>ROOM DETAILS</h2> 
    <h2 className='information-heading'>INFORMATION</h2>
    </div>

    <div className='section'>
    <p className='information-desc'>Thoughtfully furnished with British style wooden furnishings, Our classic suits are aptly named. There is a King Size bedroom with and ensuite bathroom, a comfortable living space and a walk-in wardrobe.</p>

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


    <h2 className='room-dsc-services-heading'>EXTRA SERVICE</h2>
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