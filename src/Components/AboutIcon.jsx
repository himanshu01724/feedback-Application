import {FaQuestion} from "react-icons/fa"
import {Link} from "react-router-dom"

function AboutIcon(){
    return (
        <div className = "about-link">
            <Link to = {{
                pathname:"/about",
                search:"HomePage",
                hash: "Welcome"
            }}>
            <FaQuestion size = {50}/>
            </Link>
            </div>
    )
}
export default AboutIcon