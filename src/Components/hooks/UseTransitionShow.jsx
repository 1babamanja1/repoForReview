import React, { useEffect, useState, useTransition } from "react"

const filterBySearch = (searchArray, searchString) => {
    return searchArray.filter(item => item.name.concat(item.body).includes(searchString))
}

const UseTransitionShow = () => {
    const [isPending, startTransition] = useTransition()
    const [comments, setComments] = useState([]) 
    const [inputValue, setInputValue] = useState('')
    const handleSearch = (e) => {
        startTransition(() => {
            setInputValue(e.target.value)
        })  
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(setComments)
    },[])
    return (
    <div>
        <h3>useTransition</h3>
        {isPending ? <h4>RENDERING</h4> :<h4>not rendering</h4> }
        <input onChange={handleSearch} />
        <Comments entities={filterBySearch(comments, inputValue)}/>
        
    </div>
    )
}

export default UseTransitionShow

export const Comments = ({entities}) => {
    return (
        !entities ? null : entities.map(entity => 
        <div key={entity.id}>
            <h4>{entity.name}</h4>
            <p>{entity.body}</p>
        </div>)
    )
}

 