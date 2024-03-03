import { useState } from "react";

function Hooks(){
    const [data,setData]=useState("helo how are you")
    // const change=()=>{
    //     setData("front end")
    // }
    return(
        <div>
            <h1>Hooks method{data}</h1>
            <Hooks1 value={data}/>
            {/* <button onClick={change}>update</button> */}
            
        </div>
    )
}
function Hooks1({value}){
    return(
        <div>
            <h1>1st component{value}</h1>
            <Hooks2 value={value}/>
        </div>
    )
}
function Hooks2( {value}){
    return(
        <div>
            <h1>2st component{value}</h1>
            <Hooks3 value={value}/>
        </div>
    )
}
function Hooks3({value}){
    return(
        <div>
            <h1>3st component{value}</h1>
            <Hooks4 value={value}/>
        </div>
    )
}
function Hooks4({value}){
    return(
        <div>
            <h1>4st component{value}</h1>
            <Hooks5 value={value}/>
        </div>
    )
}
function Hooks5({value}){
    return(
        <div>
            <h1>5st component{value}</h1>
        </div>
    )
}

export default Hooks;