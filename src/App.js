import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList"
import { useState } from "react"
import Feedbackdata from "./data/Feedbackdata"

function App(){

    const [feedback,setFeedback] = useState(Feedbackdata)
    
    return (
    <>
    <Header />                                         
    <div className = 'Container'>
    <FeedbackList  feedback = {feedback}/>
    <p>Random Value Generator = {Math.random()*(9+9)}
    </p>
    </div>
    </>
    )   
}
export default App


// <></> This is called a Fragmentwhich is used to return multiple things 
//Try to learn the map function in javascrip for list (it is like for loop)
//Github Working Again Check
//default() var = number, text, anything This is for working with props.
//"Evertime you Refresh the number will change !!"
//When the header value is not given it will take default values