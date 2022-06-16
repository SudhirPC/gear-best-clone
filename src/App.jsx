import logo from './logo.svg';
import './App.css';
import { Footer } from './Components/Footer.jsx';
import { Navbar } from './Components/Navbar.jsx';
import { FrontPage } from './Components/FrontPage.jsx';


function App() {
  return (
    <div >
      <Navbar/>
      <FrontPage/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
