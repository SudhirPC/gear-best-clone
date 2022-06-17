import logo from './logo.svg';
import './App.css';
import { Footer } from './Components/Footer.jsx';
import { Navbar } from './Components/Navbar.jsx';
import { FrontPage } from './Components/FrontPage.jsx';
import { ProductPageDetails } from './Components/ProductPageDetails.jsx';
import { ProductPage } from './Components/ProductPage.jsx';

import { CheckoutPage } from './Components/CheckoutPage.jsx';
import { CartPage } from './Components/CartPage.jsx';
import {Login} from './Components/auth/Login.jsx';
import {Register} from './Components/auth/Register.jsx';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
      <Navbar/>
     {/* <Login/>  */}
    {/* <Register/> */}
      {/* <ProductPageDetails/> */}
      {/* <FrontPage/> */}
     {/* <Footer/> */}
      {/* <ProductPage/> */}
      <CheckoutPage/>
      {/* <CartPage/> */}

      <Routes>
        <Route path="/" elements={ <FrontPage/>} />
        <Route path="/login" elements={ <Login/>}  />
        <Route path="/register" elements={ <Register/> } />
        <Route path="/productpage" elements={ <ProductPage/>} />
        <Route path="/productdetail" elements={ <ProductPageDetails/> }/>
        <Route path="/cart" elements={ <CartPage/>}/>
        <Route path="/checkout" elements={ <CheckoutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
