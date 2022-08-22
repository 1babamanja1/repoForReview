import React, { useEffect, useState } from "react"
import { useId } from "react"


const UseIdShow = () => {
    const [comments, setComments] = useState([]) 
    const id = useId()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(setComments)
    },[])
    return (
    <div>
        <h3>useId</h3>
        {comments.map(comment => 
        <div key={comment.id}>
            <h4>comment.name</h4>
            <p>{`${id} -- ${comment.id}`}</p>
        </div>
        
        
        )}
        
    </div>
    )
}

export default UseIdShow