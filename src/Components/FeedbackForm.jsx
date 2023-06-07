import {useState} from "react"
import Card from "./shared/Card"

function FeedbackForm(){

    const [text,setText] = useState('')

    const handleText = (e) => { 
        setText(e.target.value)
    }

    return (
        <Card> 
            <form>
                <h2>Your Opinion Matters Please Rate us !!</h2>
            </form>
            <div className="input-group" >
                <input onChange = {handleText}type="text" placeholder="Leave a Review" value = {text} />
                <button type="submit">Send</button>
            </div>
        </Card>
    )
}
export default FeedbackForm