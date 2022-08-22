import React from "react"
import Level3 from "./Level3"

const Level2 = () => {
    return (
        <div style={{border: '1px solid', width: 'fit-content', padding: '5px'}}>
            <div>I am the second deep level. I don't know context.</div>
            <Level3 />
        </div>
        )
}

export default Level2