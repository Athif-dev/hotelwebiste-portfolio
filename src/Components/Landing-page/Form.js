import {React, useState} from 'react';
import './css/form.css';

import { RiCloseLine } from 'react-icons/ri';


function Form(props) {
  return (props.trigger) ? (
    <div className='form'>
        <div className='form-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}><RiCloseLine size={40} /></button>
       
        <div className='name-section'>
          <p className='form-txt'>Name:</p>
        <input className='form-input-name' placeholder='First Name' type='text'></input> 
        <input className='form-input-name' placeholder='Last Name' typr='text'></input>
        </div>

        <div className='name-section'>
          <p className='form-txt'>Email:</p>
        <input className='form-input' placeholder='ex: myname@example.com' type='text'></input> 
        </div>

        <div className='name-section'>
          <p className='form-txt'>Room Type:</p> 
        <select className='form-input'  type='text'>
          <option>select type</option>
          <option>Classic (2 - 3 people)</option>
          <option>Vintage (4 - 5 people)</option>
          <option>Classic (7 - 8 people)</option>
          <option>Classic (8 - 12 people)</option>
        </select>
        </div>

        <div className='name-section'>
          <p className='form-txt'>Number of Guests:</p>
        <input className='form-input' placeholder='0' type='text'></input> 
        </div>

        <div className='name-section'>
          <p className='form-txt'>Arrival Date:</p>
        <input className='form-input'  type='date'></input> 
        </div>

        <div className='name-section'>
          <p className='form-txt'>Departure Date:</p>
        <input className='form-input'  type='date'></input> 
        </div>

        <button className='submit-btn'>Submit</button>

        </div>
    </div>
  ) : "";
}

export default Form;