import React, { useEffect, useState, useDeferredValue } from "react"

const filterBySearch = (searchArray, searchString) => {
    return searchArray.filter(item => item.name.concat(item.body).includes(searchString))
}

const UseDeferredValueShow = () => {
    const [comments, setComments] = useState([]) 
    const [inputValue, setInputValue] = useState('')
    const handleSearch = (e) => {
            setInputValue(e.target.value)
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(setComments)
    },[])
    return (
    <div>
        <h3>useDeferredValue</h3>
        <input onChange={handleSearch} />
        <Comments entities={filterBySearch(comments, inputValue)}/>
        
    </div>
    )
}

export default UseDeferredValueShow

export const Comments = ({entities = []}) => {
    const values = useDeferredValue(entities)
    return (
        !entities ? null : values.map(entity => 
        <div key={entity.id}>
            <h4>{entity.name}</h4>
            <p>{entity.body}</p>
        </div>)
    )
}
