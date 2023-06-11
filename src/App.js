import {v4 as uuidv4} from 'uuid'
import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList"
import { useState } from "react"
import Feedbackdata from "./data/Feedbackdata"
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm"
import AboutIcon from "./Components/AboutIcon"
import AboutPage from "./Pages/AboutPage"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App(){

    const deleteFeedback = (id) =>{
        if (window.confirm("Are you sure you want to delete?")){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }


    const [feedback,setFeedback] = useState(Feedbackdata)

    const addFeedback = (newFeedback) =>{

        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    
    return (
    <BrowserRouter>
        
    <Header />

                                                 
    <div className = 'Container'>
    <Routes>
    <Route exact path= "/" element = {
        <>
        <FeedbackForm handleAdd = {addFeedback}/>
        <FeedbackStats feedback = {feedback}/>
        <FeedbackList  feedback = {feedback} handleDelete={ deleteFeedback}/>
            <p>Random Value Generator = {Math.random()*(9+9)}
            </p>
        </>
    }>
    </Route>
           
    <Route path = "/about" element={<AboutPage/>}/>
    </Routes>
    <AboutIcon/> 
    </div>
    </BrowserRouter>
    )   
}
export default App


// <></> This is called a Fragmentwhich is used to return multiple things 
//Try to learn the map function in javascrip for list (it is like for loop)
//Github Working Again Check
//default() var = number, text, anything This is for working with props.
//"Evertime you Refresh the number will change !!"
//When the header value is not given it will take default values