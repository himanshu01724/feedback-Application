import FeedbackItem from "./FeedbackItem"
import FeedbackContext  from "../Context/FeedbackContext"
import { useContext } from "react"

function FeedbackList(){

    const {feedback} = useContext(FeedbackContext)

    // if (!feedback || feedback.length === 0){
    //     alert("No Feedback Recieved Yet")
    // }
    return <div className = "feedback-list">
        {feedback.map((item) => (
             <FeedbackItem key = {item.id} item={item}
             
             />
        ))}

        </div>

}



export default FeedbackList

/*
    FeedbackList.propTypes = {
    feedback:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
            rating:PropTypes.number.isRequired,
        })
    )
}
*/