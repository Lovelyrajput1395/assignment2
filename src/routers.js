import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import React from "react"
import Helo from "./helo.js"
import "./routers.css"
class Routers extends React.Component{
    render(){
        return(
            <div>
                <Router>
                <ul>
                    <li><Link to={"/helo"}>Home</Link></li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <Routes>
                    <Route path="/helo" element={<Helo></Helo>}></Route>
                </Routes>
                </Router>
            </div>
        )
    }
}
export default Routers;