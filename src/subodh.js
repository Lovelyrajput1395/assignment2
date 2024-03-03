
import React from "react";
 class App extends React.Component{
    render(){
        return(
            <div>
                <p>name:{this.props.name}</p>
                <p>city:{this.props.city}</p>

            </div>
        )
    }
 }
 class App1 extends React.Component{
    render(){
        return(
            <div>
            <App name="subjkkhkehfkwf" city="baglore"/>
            </div>
        )
    }
 }
 
 export default App1;
