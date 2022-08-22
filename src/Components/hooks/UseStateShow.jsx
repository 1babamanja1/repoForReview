import React, { useState } from "react"

const UseStateShow = () => {
    const [counter, setCounter] = useState(0);
    return (
    <div>
        <h3>useState</h3>
        Counter: {counter}
        <div>
            <button onClick={() => setCounter(counter + 1)}>Up</button>
            <button onClick={() => setCounter(counter - 1)}>Down</button>
        </div>
    </div>
    )
}

export default UseStateShow