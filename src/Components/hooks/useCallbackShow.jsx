import React, { useCallback, useEffect, useRef, useState } from "react";

const UseCallbackShow = () => {
    const [firstTerm, setFirstTerm] = useState(0)
    const [result, setResult] = useState(0)
    const inputRef = useRef(0)
    const eachRenderEffect = useRef(0)
    useEffect(() => {
        eachRenderEffect.current += 1
    })


    const memoizedCallback = useCallback((input) => {
        console.log('render')
        for (let i = 0; i < (10 ** 9); i+= 1){}
        return +firstTerm + +input
      },[firstTerm]);


    return (
    <div>
        <h3>useCallback</h3>
        Term, which influenced directly on a callback: <input value={firstTerm} onChange={(e) => setFirstTerm(e.target.value)} /> <br />
        Term, which is passed to callback like an arg (ref): <input ref={inputRef} /> <br />
        <button onClick={() => setResult(memoizedCallback(inputRef.current.value))}>Calculate sum</button>
        Result: {result} <br />
        Render: {eachRenderEffect.current} <br />
    </div>
    )
}

export default UseCallbackShow