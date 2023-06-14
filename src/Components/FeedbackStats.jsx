import FeedbackContext from "../Context/FeedbackContext"
import { useContext } from 'react'

function FeedbackStats(){

    const {feedback} = useContext(FeedbackContext)

    let average = feedback.reduce((acc,curr)=>{
        const va = acc + curr.rating
        return va
    },0)/feedback.length
    
    console.log(average)

    return (
    <div className = "feedback-stats">
        <h4> {feedback.length} Reviews</h4>
        <h4> Average Rating = {isNaN(average.toFixed(2)) ? 0: average.toFixed(1)}</h4>
    </div>
    )
}



export default FeedbackStats