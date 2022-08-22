import React, { useContext } from "react"
import { Context } from "./UseContextShow"

const Level3 = () => {
    const contValue = useContext(Context)
    return (
        <div style={{border: '1px solid', width: 'fit-content', padding: '5px'}}> 
            <div>I am the context target; the value is {contValue}</div>
        </div>
        )
}

export default Level3