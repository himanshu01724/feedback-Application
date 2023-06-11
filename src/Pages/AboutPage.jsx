import Card from "../Components/shared/Card"
import {Link} from "react-router-dom"

function AboutPage(){
    return (
        <Card>
                <div className = "about">
                    <h1>This is Feedback Application</h1>
                    <p>This is react Application to leave feedback for a product service</p>
                    <p>Version 1.0.0</p>
                <Link to={{
                    pathname:"/",
                    search:"about-Page",
                    hash:"#hello",
                }}>Click here to submit a feedback</Link>

                </div>

        </Card>
    )
}
export default AboutPage