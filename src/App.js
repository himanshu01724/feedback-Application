const head = "Make My Trip"
const body = "Welcome Aboard"
const comments = [{id:1,text:'Singapore'},
{id:1,text:'America'},{id:1,text:'London'}]

const loading = false
const showcomment = true

function App(){

    if (loading) return <h1>Loading ...........</h1>

    const codeblock = <div className="comments">
    <h2>Apply visa for {comments.length} Countries</h2>
    <ul>
        {
            comments.map((comments,index)=>(
                <li>
                    {comments.text.toUpperCase()}
                </li>
            ))
        }
    </ul>
</div>
    
    return (
    <div className = 'Container'>
    <h1>{head.toUpperCase()}</h1>
    <p>{body}</p>
    <p>Random Value Generator = {Math.random()*(9+9)}
    </p>

        {showcomment && codeblock}
    </div>
    )   
}
export default App


// <></> This is called a Fragmentwhich is used to return multiple things 
//Try to learn the map function in javascrip for list (it is like for loop)
//Github Working Again Check
