import {useState} from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm({handleAdd}){

    const [text,setText] = useState('')

    const [btnDisabled,setBtnDisabled] = useState(true)

    const [message, setMessage] = useState('')

    const [rating,setRating] = useState(10)

    const handleText = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !== '' && text.trim().length <= 10){
            setMessage('Text should be at least 10 characters')
            setBtnDisabled(true)
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (text.trim().length > 10){
            const newFeedback = {
                text,
                rating 
            }
            handleAdd(newFeedback)

            setText('')
        }
    }

    return (
        <Card> 
            <form onSubmit = {handleSubmit}>
                <h2>Your Opinion Matters Please Rate us !!</h2>
                <RatingSelect select = {(rating) => setRating(rating) }/>
            <div className="input-group" >
                <input onChange = {handleText}type="text" placeholder="Leave a Review" value = {text} />
                <Button type = 'submit' isDisabled = {btnDisabled}>Send</Button>
            </div>
            {message && <div className = 'message'> {message}</div>}
            </form>
        </Card>
    )
}
export default FeedbackForm