import {React,useState} from 'react';
import './css/form.css';
import { RiCloseLine } from 'react-icons/ri';
import axios from 'axios';
const getAllRoomsUrl = 'https://aj-heritage-api.herokuapp.com/rooms/allrooms';


function Form(props) {
  const [count, setCount] = useState(null);


  const roomCount =  axios.get(getAllRoomsUrl).then(response => setCount(response.data[0].count)); 

  return (props.trigger) ? (
    <div className='form'>
        <div className='form-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}><RiCloseLine size={40} /></button>

        {roomCount > 0 ? (
          <>
       <h2 className='available-txt'>Rooms are available !</h2> 
       <button className='popup-btn'onClick={() => props.setTrigger(false)}><a className='popup-txt-li' href='/#rooms'> Veiw Rooms</a> </button>
       </>
      ) : (
        <>
        <h2 className='available-txt'>Rooms are available !</h2> 
        <button className='popup-btn'onClick={() => props.setTrigger(false)}><a className='popup-txt-li' href='/#rooms'> Veiw Rooms</a> </button>
        </>
      )}

        </div>
    </div>
  ) : "";
}

export default Form;


{/* <h2 className='available-txt'>Rooms are available !</h2> */}
          {/* <button className='popup-btn'onClick={() => props.setTrigger(false)}><a className='popup-txt-li' href='/#rooms'> Veiw Rooms</a> </button> */}