
import './App.css';
import { Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Events from "./pages/Events"
import Contact from './pages/Contact';
import About from "./pages/About";
import Registration from './pages/Registration';
import Navbar from './Components/Navbar';




function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
  <Routes>
   <Route exact path="/" element={<Home/> } />
   <Route exact path="/events" element={<Events/> } />
   <Route exact path="/about" element={<About/> } />
   <Route exact path="/contact" element={<Contact/> } />
   <Route exact path="/registration" element={<Registration/> } />
  </Routes> 
</div>
    </>
  );
}



export default App;
