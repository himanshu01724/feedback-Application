
import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList"
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm"
import AboutIcon from "./Components/AboutIcon"
import AboutPage from "./Pages/AboutPage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {FeedbackProvider} from "./Context/FeedbackContext"

function App(){
    
    return (
        <FeedbackProvider>
    <BrowserRouter>
    <Header />                           
    <div className = 'Container'>
    <Routes>
    <Route exact path= "/" element = {
        <>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
            
        </>
    }>
    </Route>
    <Route path = "/about" element={<AboutPage/>}/>
    </Routes>
    <AboutIcon/> 
    </div>
    </BrowserRouter>
    </FeedbackProvider>
    )   
}
export default App


// <></> This is called a Fragmentwhich is used to return multiple things 
//Try to learn the map function in javascrip for list (it is like for loop)
//Github Working Again Check
//default() var = number, text, anything This is for working with props.
//"Evertime you Refresh the number will change !!"
//When the header value is not given it will take default values
//<p>Random Value Generator = {Math.random()*(9+9)}</p>