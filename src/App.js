
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Apparels from './apparels';
import Electronics from './eElectronics';
import Beuty from './Beuty';
import ContactUS from './ContactUs';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/apparels' element={<Apparels />} />
        <Route exact path='/electronics' element={<Electronics />} />
        <Route exact path='/beauty' element={<Beuty />} />
        <Route exact path='/contactUs' element={<ContactUS />} />
        {/* <Route exact path='/signup' element={<SignUp />} /> */}
      </Routes>
    </div>
  );
}

export default App;
