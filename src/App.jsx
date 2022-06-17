import logo from './logo.svg';
import './App.css';
import { Footer } from './Components/Footer.jsx';
import { Navbar } from './Components/Navbar.jsx';
import { FrontPage } from './Components/FrontPage.jsx';
import { ProductPageDetails } from './Components/ProductPageDetails.jsx';
import { ProductPage } from './Components/ProductPage.jsx';
import { Login } from './Components/Login.jsx';
import { Register } from './Components/Register.jsx';


function App() {
  return (
    <div >
      <Navbar/>
      {/* <Login/> */}
      <Register/>
      {/* <ProductPage/> */}
      {/* <FrontPage/> */}
     {/* <Footer/> */}
{/* <ProductPage/> */}
    </div>
  );
}

export default App;
