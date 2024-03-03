import { useState } from "react";

function Form(){
    const [Name,setfullname]=useState("")
    const [Email,setemail]=useState("")
    const [Password,setpassword]=useState("")
    const [Cpassword,setcpassword]=useState("")


    const fullname=(a)=>{
        setfullname(a.target.value)
    }
    const email=(a)=>{
        setemail(a.target.value)
    }
    const password=(a)=>{
        setpassword(a.target.value)
    }
    const cpassword=(a)=>{
        setcpassword(a.target.value)

    }
    const submit=(a)=>{
        if(fullname.length>5){
            alert("please atleast define>5 character")
        }
        else if(Password !== Cpassword){
            alert("password does not matched")
        }
        else{
            alert("form is successfully submited")
            localStorage.setItem("fullname",Name)
            localStorage.setItem("email",Email)
            localStorage.setItem("password",Password)
            localStorage.setItem("cpassword",Cpassword)
        }
    }
    
    return(
        <div>
            <form onSubmit={submit}>
                <label>
                    Full name:
                </label>
                <input type="text" value={Name} onChange={fullname} ></input>
                <br></br>
                <br></br>
                <label>Email:</label>
                <input type="text" value={Email} onChange={email}></input>
                <br></br>
                <br></br>
                <label>
                    Password:
                </label>
                <input type="password" value={Password} onChange={password}></input>
                <br></br>
                <br></br>
                <label>
                    Confirm Password:
                </label>
                <input type="password" value={Cpassword} onChange={cpassword}></input>
                <br></br>
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default Form;