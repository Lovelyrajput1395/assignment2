import { useEffect, useState } from "react";
import "./jason.css"
function App(){
    const[data,setData]=useState([])
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((a)=>{
return a.json()
    })
    .then((b)=>{
        console.log(b)
        setData(b)
    })
   })
    return(
        <div>
            <h2>get the data from the sercer</h2>
            <table>
                <thead>
                    <tr>
                        <th>user id </th>
                        <th>name</th>
                        <th>city </th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>(

                        <tr>
                        <td>{item.userId}</td>
                        <td>{item.name}</td>
                        <td>{item.city}</td>
                        <td>{item.age}</td>
                    </tr>
))}
                </tbody>
            </table>
        </div>
    )
}
export default App;