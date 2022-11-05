import {react,useEffect,useState} from 'react';
import './css/rooms.css';
// import axios from 'axios';

import Room1 from './img/room 1.jpg';
import Room2 from './img/room 2.jpg';
import Room3 from './img/room 3.jpg';

import {BrowserRouter as Router,Link,} from "react-router-dom";



function Rooms() {
  //  axios code

  // const url = 'https://aj-heritage-api.herokuapp.com/rooms/allRooms'
  // const [apiData,setApiData] = useState(null)

  //  useEffect(() =>{
  //   axios.get(url)
  //   .then(response =>{
  //     setApiData(response.data)
  //   })
  // },[url])
  // console.log(apiData[0].roomType);


  return (
    <div className='rooms-section' id='rooms'>
    <h2 className='subtext'>Conscious hospitality</h2>
    <h1 className='heading-text'>ROOMS & SUITS</h1>
    <hr />
    <div className='rooms'>
      <div className='rooms-container'>
        <img className='rooms-img' src={Room1} />
        {/* <h2 className='rooms-tittle'> {apiData[0].roomType} ROOMS</h2> */}
        <h2 className='rooms-tittle'>CLASSIC ROOMS</h2>
        <hr />
        <p className='rooms-desc'>Thoughtfully furnished with British style wooden furnishings, Our classic suits are aptly named. There is a King Size bedroom with and ensuite bathroom, a comfortable living space and a walk-in wardrobe.</p>
        <Link onUpdate={() => window.scrollTo(0, 0)}  to="/Classic_room" > <button className='rooms-btn'>Book Now </button> </Link>
      </div>

      <div className='rooms-container'>
        <img className='rooms-img' src={Room2} />
        {/* <h2 className='rooms-tittle'> {apiData[1].roomType} ROOMS</h2> */}
        <h2 className='rooms-tittle'>PREMIUM ROOMS</h2>
        <hr />
        <p className='rooms-desc'>Naturally lit, with a classic colour palette, clean lines and rich wooden furnishings; a king, queen or twin beds and an ensuite bathroom. These rooms are a harmony of heritage style and with beautiful views. </p>
        <Link onUpdate={() => window.scrollTo(0, 0)}  to="/Premium_room" > <button className='rooms-btn'>Book Now </button> </Link>
      </div>

      <div className='rooms-container'>
        <img className='rooms-img' src={Room3} />
        {/* <h2 className='rooms-tittle'> {apiData[3].roomType} ROOMS</h2> */}
        <h2 className='rooms-tittle'>VINTAGE ROOMS</h2>
        <hr />
        <p className='rooms-desc'> These spacious rooms feature colonial style furnishings inspired by Ooty’s British heritage. The rooms are ideal for large families or groups offering accomodation for 4 adults & 4 children.</p>
        <Link onUpdate={() => window.scrollTo(0, 0)}  to="/Vintage_room" > <button className='rooms-btn'>Book Now </button> </Link>
      </div> 

      <div className='rooms-container'>
        <img className='rooms-img' src={Room2} />
        {/* <h2 className='rooms-tittle'>{apiData[2].roomType}</h2> */}
        <h2 className='rooms-tittle'>DORMATORY</h2>
        <hr />
        <p className='rooms-desc'> Dormatory room are budget-friendly offering comfortable stays for a group of 8-12 people. There are comfortable individual beds, ensuite bathrooms and comfortable living space.</p>
        <Link onUpdate={() => window.scrollTo(0, 0)}  to="/Dormatory" > <button className='rooms-btn'>Book Now </button> </Link>
      </div> 
    </div>
    </div>
  )
}

export default Rooms