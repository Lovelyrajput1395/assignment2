import "./Contact.css"

function Contact() {
    return (
        <div >

           <div className="flex">
           <div className="text"><h2>Full Stack Developer Training & Placements </h2>
                <br></br>
                <hr></hr>
                <br></br>

                <p>To be an effective full-stack developer, you should acquire and continue upgrading your
                    knowledge of applicable programming language skills. Consider taking courses in relevant
                    languages—like Python, HTML, CSS, and Javascript.<br></br>
                    <br></br>
                    
                    To be an effective full-stack developer, you should acquire and continue upgrading your
                    knowledge of applicable programming language skills. 
                    Consider taking courses in relevant
                    languages—like Python, HTML, CSS, and Javascript.

                </p>
                <br></br>
            <hr></hr>
            <br></br>
            <button>Learn More</button>
            </div>
            <div className="form">
                <form>

                    <h3>Fill & Get Upto 25% off in Course Fees</h3>
                    <br></br>

                    <input placeholder="Name*" className="inp"></input>
                    <br></br>
                    <br></br>
                    <br></br>
                    <input placeholder="10 Digit Mobile Number*" className="inp"></input>
                    <br></br>
                    <br></br>
                    <br></br>
                    <input placeholder="Email*" className="inp"></input>
                    <br></br>
                    <br></br>
                    <br></br>
                    <input placeholder="Massage*" className="inp"></input>
                    <br></br>
                    <br></br>
                    <button>I am intrested, tell me more...</button>
                </form>


                
            </div>
           </div>
        </div>
    )
}
export default Contact;