import './App.css';
import LandingPage from './Components/Landing-page/Landing-page';
import Classic_room from './Components/Rooms-details/Classic_room';
import Premium_room from './Components/Rooms-details/Premium_room';
import Vintage_room from './Components/Rooms-details/Vintage_room';
import Dormatory from './Components/Rooms-details/Dormatory';
import About from './Components/About-us/About';
import Success from './Components/Rooms-details/Payment/Success';




import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/classic_room' element={<Classic_room />} />
          <Route path='/Premium_room' element={<Premium_room />} />
          <Route path='/Vintage_room' element={<Vintage_room />} />
          <Route path='/Dormatory' element={<Dormatory />} />
          <Route path='/About' element={<About />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
