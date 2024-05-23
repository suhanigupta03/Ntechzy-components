import './App.css';
import Navbar from './component/Navbar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contactus'
import Services from './component/Services'
import Slider from './component/Slider'
import Foot from './component/Footer';
function App() {
  return (
    <div>
      <Router basename="/">
        <div className='mb-8'>
        <Navbar/> 
        </div>
        {/* <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/About" Component={About}></Route>
          <Route exact path="/Services" Component={Services}></Route>
          <Route exact path="/Contact" Component={Contact}></Route>
        </Routes> */}
        <div className='my-14'>
        <Slider />
        </div>
        <Foot />
      </Router>
    
    </div>
  );
}

export default App;
