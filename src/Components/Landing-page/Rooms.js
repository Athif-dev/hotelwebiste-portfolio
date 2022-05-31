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
        <p className='rooms-btn'><Link onUpdate={() => window.scrollTo(0, 0)} style={{textDecoration: 'none', color:'rgb(197, 157, 95)'}} to="/Classic_room" >Check Details </Link></p>
      </div>

      <div className='rooms-container'>
        <img className='rooms-img' src={Room2} />
        {/* <h2 className='rooms-tittle'> {apiData[1].roomType} ROOMS</h2> */}
        <h2 className='rooms-tittle'>PREMIUM ROOMS</h2>
        <hr />
        <p className='rooms-desc'>Naturally lit, with a classic colour palette, clean lines and rich wooden furnishings; a king, queen or twin beds and an ensuite bathroom. These rooms are a harmony of heritage style and modern conveniences, with beautiful views. Relax in the peace and comfort of your own private abode.</p>
        <p className='rooms-btn'><Link onUpdate={() => window.scrollTo(0, 0)} style={{textDecoration: 'none', color:'rgb(197, 157, 95)'}} to="/Premium_room" >Check Details </Link></p>
      </div>

      <div className='rooms-container'>
        <img className='rooms-img' src={Room3} />
        {/* <h2 className='rooms-tittle'> {apiData[3].roomType} ROOMS</h2> */}
        <h2 className='rooms-tittle'>VINTAGE ROOMS</h2>
        <hr />
        <p className='rooms-desc'> These spacious rooms feature colonial style furnishings inspired by Ooty’s British heritage. The rooms are ideal for large families or groups offering accomodation for 4 adults & 4 children.</p>
        <p className='rooms-btn'><Link onUpdate={() => window.scrollTo(0, 0)} style={{textDecoration: 'none', color:'rgb(197, 157, 95)'}} to="/Vintage_room" >Check Details </Link></p>
      </div> 

      <div className='rooms-container'>
        <img className='rooms-img' src={Room2} />
        {/* <h2 className='rooms-tittle'>{apiData[2].roomType}</h2> */}
        <h2 className='rooms-tittle'>DORMATORY</h2>
        <hr />
        <p className='rooms-desc'> Dormatory room are budget-friendly offering comfortable stays for a group of 8-12 people. There are comfortable individual beds, ensuite bathrooms and comfortable living space.</p>
        <p className='rooms-btn'><Link onUpdate={() => window.scrollTo(0, 0)} style={{textDecoration: 'none', color:'rgb(197, 157, 95)'}} to="/Dormatory" >Check Details </Link></p>
      </div> 
    </div>
    </div>
  )
}

export default Rooms