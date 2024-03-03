import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import "./App.css"
import Home from "./Home.js"
import About from "./About.js"
import Contact from "./Contact.js"
import Gallery  from "./Gallery";
function App(){
    return(
        <div>
            <Router>
            <ul>
                <li><Link to={"/Home"}>Home</Link></li>
                <li><Link to={"/About"}>About</Link></li>
                <li><Link to={"/Contact"}>Contact</Link></li>
                <li>Services</li>
                <li><Link to={"/Gallery"}>Gallery</Link></li>
                <li>LogIn & LogOut</li>
            </ul>
            <Routes>
                <Route path="/Home" element ={<Home/>}></Route>
                <Route path="/About" element ={<About/>}></Route>
                <Route path="/Contact" element ={<Contact/>}></Route>
                <Route path="/Gallery" element={<Gallery/>}></Route>

            </Routes>
            </Router>
        </div>
    )
}
export default App;