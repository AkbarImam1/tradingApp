
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Apparels from './apparels';
import Electronics from './eElectronics';
import Beuty from './Beuty';
import ContactUS from './ContactUs';
import Account from './Account'
import SellerLogin from './SellerLogin';
import SellerRegister from './SellerRegistre';
import SignUp from './SignUp';
import UserLogin from './UserLogin';
import TradingProduct from './TradingProduct';
import Subscription from './Subscription';
import CartPage from './Cart';
import SellerAccountPage from './SellerMyAccount';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/apparels' element={<Apparels />} />
        <Route exact path='/electronics' element={<Electronics />} />
        <Route exact path='/beauty' element={<Beuty />} />
        <Route exact path='/contactUs' element={<ContactUS />} />
        <Route exact path='/userAccount' element={<Account/>} />
        <Route exact path='/adminAccount' element={<SellerAccountPage/>} />
        <Route exact path = '/sellerLogin' element = {<SellerLogin/>}/>
        <Route exact path='/sellerRegister' element={<SellerRegister/>} />
        <Route exact path='/userRegister' element={<SignUp/>} />
        <Route exact path='/userLogin' element={<UserLogin/>} />
        {/* <Route exact path='/sellerLogin' element={<SellerLogin/>} /> */}
        <Route exact path='/trading' element={<TradingProduct />} />
        <Route exact path='/subscription' element={<Subscription />} />
        <Route exact path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
