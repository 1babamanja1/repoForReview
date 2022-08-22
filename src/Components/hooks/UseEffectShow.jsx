import React, { useEffect, useState, useRef } from "react"

const UseEffectShow = () => {
    const [counter, setCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0)
    const eachRenderEffect = useRef(0)
    const [firstRenderEffect, setFirstRenderEffect] = useState(0)
    const [dependedRenderEffect, setDependedRenderEffect] = useState(0)

    useEffect(() => {
        eachRenderEffect.current += 1
    })

    useEffect(() => {
        setFirstRenderEffect(state => state + 1)
    },[])

    useEffect(() => {
        setDependedRenderEffect(state => state + 1)
    },[counter])

    useEffect(() => {
        return () => {
            console.log('bye')
        }}, [])
        
    return (
    <div>
        <h3>useEffect</h3>
        Counter: {counter}
        <div>
            <button onClick={() => setCounter(counter => counter + 1)}>Up</button>
            <button onClick={() => setCounter(counter => counter - 1)}>Down</button>
        </div>

        Second Counter: {secondCounter}
        <div>
            <button onClick={() => setSecondCounter(counter => counter + 1)}>Up</button>
            <button onClick={() => setSecondCounter(counter => counter - 1)}>Down</button>
        </div>
        
        I'm changing on each render. I have changed {eachRenderEffect.current} times <br />
        I depend only on first render. I have changed {firstRenderEffect} times <br />
        I depend only on first counter I have changed {dependedRenderEffect} times
    </div>
    )
}

export default UseEffectShow