import React, { useState, useEffect, useDebugValue } from "react";

const useLocalStorage = (initialValue, key) => {

    //get value from local storage
    const getValue = () => {
        const storedData = localStorage.getItem(key)
        if(storedData && storedData !== 'undefined'){
            return JSON.parse(storedData)
        }
        return initialValue
    }
    const [value, setValue]  = useState(getValue)
    useDebugValue(new Date(), date => date.toDateString())

    //set value to local storage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[value])

    return [value, setValue]
}

export default useLocalStorage