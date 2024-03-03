
// // // // // // import Proptypes  from "prop-types"
// // // // // // function App(props){
// // // // // //     const {name,city,state}=props
// // // // // //     return(
// // // // // //         <div>
// // // // // // <p>name:{name}</p>
// // // // // // <p>city:{city}</p>
// // // // // // <p>state:{state}</p>
// // // // // //         </div>
// // // // // //     )
// // // // // // }
// // // // // // App.proptypes={
// // // // // //     name:Proptypes.string,
// // // // // //     city:Proptypes.string,
// // // // // //     state:Proptypes.string
// // // // // // }
// // // // // // App.defaultprops={
// // // // // //     name:"lovely",
// // // // // //     city:"banglote",
// // // // // //     state:"karshwdhd"
// // // // // // }

// import { useState } from "react"

// // // import { useEffect, useState } from "react";

// // // // // // const react = require("react");

// // // // // // export default App;
// // // // // import React from "react";
// // // // // class App extends React.Component{
// // // // //     constructor(){
// // // // //         super()
// // // // //         this.state={
// // // // //             id:1,
// // // // //             auther:"radhya",
// // // // //             book:"front end",
// // // // //             data:0,
// // // // //             currentdata:""
// // // // //         }
// // // // //     }
// // // // //     update=()=>{
// // // // //         this.setState({
// // // // //             id:2,
// // // // //             auther:"lovely",
// // // // //             book:"beckend",
           
// // // // //         })
// // // // //     }
// // // // //     increment=()=>{
// // // // //         this.setState({
// // // // //            data:this.state.data+1
// // // // //         })
// // // // //     }
// // // // //     decrement =()=>{
// // // // //         this.setState({
// // // // //            data:this.state.data-1
// // // // //         })
// // // // //     }
// // // // //     reset =()=>{
// // // // //         this.setState({
// // // // //            data:0
// // // // //         })
// // // // //     }
// // // // //     input =(e)=>{
// // // // //         this.setState({
// // // // //             currentdata:e.target.value
// // // // //         })
// // // // //     }
// // // // //     render(){
// // // // //         return(
// // // // //             <div>
// // // // // <p>
// // // // //     Id:{this.state.id}
// // // // //     <br/>
// // // // //     Author:{this.state.auther}
// // // // //     <br/>
// // // // //     book:{this.state.book}
// // // // // </p>
// // // // // <button onClick={this.update}>update</button>
// // // // // <button onClick={this.increment}>increment</button>
// // // // // <button onClick={this.decrement}>decrement</button>
// // // // // <button onClick={this.reset}>reset</button>
// // // // // <h1>count:{this.state.data}</h1>
// // // // // <input type="text" onKeyUp={this.input}></input>
// // // // // <p>
// // // // //     currentdata:{this.state.currentdata}
// // // // // </p>
// // // // //             </div>
// // // // //         )
// // // // //     }
// // // // // }
// // // // // export default App;
// // // // import React from "react";
// // // // class App extends React.Component{
// // // //     constructor(){
// // // //         super()
// // // //         this.state={
// // // //             name:"lovely",
// // // //             city:"banglore",
// // // //             value:0,
// // // //             data:""
// // // //         }
// // // //     }
// // // //     update=()=>{
// // // //         this.setState({
// // // //             name:"radhya",
// // // //             city:"basera"
// // // //         })
// // // //     }
// // // //     inc=()=>{
// // // //         this.setState({
// // // //             value:this.state.value+1
// // // //         })
// // // //     }
// // // //     dec=()=>{
// // // //         this.setState({
// // // //             value:this.state.value-1
// // // //         })
// // // //     }
// // // //     reset=()=>{
// // // //         this.setState({
// // // //             value:this.state.value=0
// // // //         })
// // // //     }
// // // //     input=(e)=>{
// // // //         this.setState({
// // // //             data:e.target.value
// // // //         })
// // // //     }
// // // //     render(){
// // // //         return(
// // // //             <div>
// // // // <p>
// // // //     Name:{this.state.name}
// // // //     <br>
// // // //     </br>
// // // //     City:{this.state.city}
// // // // </p>
// // // // <p>
// // // //     count:{this.state.value}
// // // // </p>
// // // // <button onClick={this.update}>
// // // //     update
// // // // </button>
// // // // <button onClick={this.inc}>increment</button>
// // // // <button onClick={this.dec}>decrement</button>
// // // // <button onClick={this.reset}>reset</button>
// // // // <input type="text" onKeyUp={this.input}></input>
// // // // <p>
// // // //     {this.state.data}
// // // // </p>
// // // //             </div>
// // // //         )
// // // //     }
// // // // }
// // // // export default App;
// // // function App(){
// // //     const[state,setState]=useState("good morning")
// // //     const[data,setData]=useState(0)
// // //     const[Value,setvalue]=useState("")
// // //     const update=()=>{
// // //         setState("welcom")
// // //     }
// // // useEffect(()=>{
// // //     setTimeout(()=>{
// // //         setData(data+1)
// // //     },1000)
// // // },[]) 
// // //     const inc=()=>{
// // //         setData(0)
// // //     }
// // //     const inp=(e)=>{
// // //         setvalue(e.target.value)
// // //     }
// // //     return(
// // //         <div>
// // // <p>
// // //     {state}
// // // </p>
// // // <h1>count:{data}</h1>
// // // <button onClick={update}>udate</button>
// // // {/* <button onClick={inc}>inc</button> */}
// // // <p>curetdata:{Value}</p>
// // // <input type="text" onKeyUp={inp}></input>
// // //         </div>
// // //     )
// // // }
// // // export default App;
// // import React from "react";
// // import{BrowseRouter as Router,Routes,Route,Link} from "react-router-dom"
// // function App(){
// //     return(
// //         <div>
// // <Router>
// // <ul>
// //     <li> <Link to="/he"></Link>Home</li>
// //     <li>About</li>
// //     <li>services</li>

// // </ul>
// // </Router>
// // <Routes>
// // <Route path="/he" element={<home></home>}>

// // </Route>
// // </Routes>
// //         </div>
// //     )
// // }
// // export default App;

// function App(){
//     const[state,setState]=useState("good morning")
//     return(
//         <div>
// <h1>hello</h1>
// <App1 value={state}/>
// <App2 value={state}/>
// <App3/>
// <App4 value={state}/>
//         </div>
//     )
// }
// function App1({value}){
//     return(
//         <div>
// <h1>hello1{value}</h1>
//         </div>
//     )
// }
// function App2({value}){
//     return(
//         <div>
// <h1>hello2{value}</h1>
//         </div>
//     )
// }
// function App3(){
//     return(
//         <div>
// <h1>hello3</h1>
//         </div>
//     )
// }
// function App4({value}){
//     return(
//         <div>
// <h1>hello4{value}</h1>
//         </div> 
//     )
// }
// export default App;
import React from "react";
 class App extends React.Component{
constructor(){
    super()
    this.state={
        name:"lovely"
    }
}
componentWillMount(){
    alert("hello")
}

    render(){
        return(
            <div>
<h3>{this.state.name}</h3>
            </div>
        )
    }
 
 componentDidMount(){
    setTimeout(()=>{
        this.setState({
            name:"radhya"
        },1000)
    })
 }
}
 export default App;
