import React from "react";
class State extends React.Component {
    constructor() {
        super();
        this.state = {
            Name: "lovely",
            City: "baglore",
            State: "karnatka",
            Age: 28,
            value: 0,
        data:""
        }

    }
    change = () => {
        this.setState({
            Name: "radhya",
            City: "basera",
            State: "bijnor",
            Age: 3.7
        })
    }
    inc=()=>{
        this.setState({
            value:this.state.value+1
        })
    }
    dec=()=>{
        this.setState({

            value:this.state.value-1
        })
    }
    reset=()=>{
        this.setState({
            value:0
        })
    }
    update=(e)=>{
        this.setState({
            data:e.target.value

        })
    }
    
    render() {
        return (
            <div>
                <h1>State</h1>
                <p>
                    NAME:{this.state.Name}
                    <br></br>
                    <br></br>
                    CITY:{this.state.City}
                    <br></br>
                    <br></br>
                    STATE:{this.state.State}
                    <br></br>
                    <br></br>
                    AGE:{this.state.Age}
                </p>
                <button onClick={this.change}>update</button>
                <h1>Count:{this.state.value}</h1>
                <button onClick={this.inc}>increment</button>
                <button onClick={this.dec}>decrement</button>
                <button onClick={this.reset}>reset</button>
                <br></br>
                <br></br>
                <input type="text" onChange={this.update}></input>
                <p>
                    current data:{this.state.data}
                </p>

            </div>
        )
    }
}
export default State;