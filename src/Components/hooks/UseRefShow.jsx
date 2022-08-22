import React, { useRef, useState } from "react"

const UseRefShow = () => {
    const refCounter = useRef(0)
    const inputRef = useRef(null)
    const [renderCaller, setRenderCaller] = useState(false)
    return (
        <div>
            <h3>useRef</h3>
            Counter: {refCounter.current}
            <div>
                <button onClick={() => refCounter.current += 1}>Up Ref</button>
                <button onClick={() => refCounter.current -= 1}>Down Ref</button>
                <button onClick={() => setRenderCaller(renderCaller => !renderCaller)}>Call render</button> <br/>
                <div>I am input, connected to ref</div>
                <input ref={inputRef}></input>
                <div>I am result, got from ref.current</div>
                <div>{inputRef?.current?.value}</div>
            </div>
        </div>
        )
}

export default UseRefShow