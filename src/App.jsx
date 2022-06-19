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
import { PaymentPage } from './Components/Payment.jsx';


function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={ <FrontPage/>} />
        <Route path="/login" element={ <Login/>}  />
        <Route path="/register" element={ <Register/> } />
        <Route path="/productpage" element={ <ProductPage/>} />
        <Route path="/productpage/:id" element={ <ProductPageDetails/> }/>
        <Route path="/cart" element={ <CartPage/>}/>
        <Route path="/checkout" element={ <CheckoutPage/>}/>
        <Route path="/payment" element={ <PaymentPage/>}/>
      </Routes>
       <Footer/>
    </div>
  );
}

export default App;
