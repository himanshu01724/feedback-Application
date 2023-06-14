import {createContext,useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider  = ({children}) =>{

    const [feedback,setFeedback] = useState([    ])

    useEffect(() =>{
        fetchFeedback()
    },[])
    
    //fetch Feedback from the backend

    const fetchFeedback = async () =>{
        const response = await fetch(`/feedback`)

        const data = await response.json()

        setFeedback(data);
    }

    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit:false
    })

    
    const deleteFeedback = async(id) =>{
        if (window.confirm("Are you sure you want to delete?")){
            await fetch(`/feedback/${id}`,{method:'DELETE'})
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        }
        )
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
    }}>
        {children}
    </FeedbackContext.Provider>

}
export default FeedbackContext