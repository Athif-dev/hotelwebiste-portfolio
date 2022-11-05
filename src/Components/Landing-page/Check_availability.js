import {React, useState} from 'react';
import './css/check-availability.css';
import Form from './Form';
import axios from 'axios';

const getAllRoomsUrl = 'https://aj-heritage-api.herokuapp.com/rooms/allrooms';


function Check_availability() {
  const [roomType, setRoomType] = useState("");
  const [count, setCount] = useState(null);
  const [formPopup,setFormPopup] = useState(false);

  
  function roomCount() {

        setFormPopup(true)
        
        if(roomType === 'Classic'){
          axios.get(getAllRoomsUrl).then(response => setCount(response.data[0].count)); 
          
          if(count > 0){
            alert("Rooms are available");
          }else{
            alert("No rooms available");
          }
        }


        else if(roomType === 'Premium'){
          axios.get(getAllRoomsUrl).then(response => setCount(response.data[1].count));
          if(count > 0){
            alert("Rooms are available");
          }else{
            alert("No rooms available");
          } 
        }


        else if(roomType === 'Vintage'){
         axios.get(getAllRoomsUrl).then(response => setCount(response.data[3].count)); 
          if(count > 0){
            alert("Rooms are available");
          }else{
            alert("No rooms available");
          }
        }
      }
  return (
    <div className='booking-section'>
    <div className='input-feilds'>
      <label className='booking-text'> Check in</label>
      <input className='booking-input' type='date'></input>
    </div>

    <div className='input-feilds'>
      <label className='booking-text'> Check out</label>
      <input className='booking-input' type='date'></input>
    </div>

    <div className='input-feilds'>
      <label className='booking-text'> Room type</label>
      <select className='booking-input' onChange={(e)=>{setRoomType(e.target.value)}}>
      <option>select type</option>
      <option>Classic</option>
      <option>Vintage</option>
      <option>Premium</option>
      <option>Dormatory</option>
      </select>
    </div>

      {/* <button onClick={roomCount()} >AVAILABLE OR NOT</button> */}
      <button  onClick={roomCount} className='booking-btn'>Check Availability</button>
      <Form trigger={formPopup} setTrigger={setFormPopup} />
    </div>
  )
}

export default Check_availability; 