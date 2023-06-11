import {FaTimes} from "react-icons/fa"
import PropTypes from "prop-types"
import Card from "./shared/Card"
import { useContext } from "react"
import FeedbackContext from "../Context/FeedbackContext"

function FeedbackItem({item}){

    // const handleClick = () => {   //This is how custom functions are created.
    //     console.log(item.id)
    // }

    const {deleteFeedback} = useContext(FeedbackContext)

    return (
        <Card reverse={false} >
            <div className="num-display">{item.rating}</div>
            <button onClick = { () => deleteFeedback(item.id)}
            className="close">
                <FaTimes color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>  
         
    )

}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem