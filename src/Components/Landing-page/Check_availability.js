import {React, useState} from 'react';
import './css/check-availability.css';
import Form from './Form';

function Check_availability() {
    const [formPopup,setFormPopup] = useState(false)

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
      <select className='booking-input'>
      <option>select type</option>
      <option>Classic</option>
      <option>Vintage</option>
      <option>Premium</option>
      <option>Dormatory</option>
      </select>
    </div>

      <button  onClick={() => setFormPopup(true)} className='booking-btn'>Check Availability</button>
      <Form trigger={formPopup} setTrigger={setFormPopup} />
    </div>
  )
}

export default Check_availability; 