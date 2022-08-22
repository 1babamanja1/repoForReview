import React from "react"
import Level2 from "./Level2"

const Level1 = () => {
return (
<div style={{border: '1px solid', width: 'fit-content', padding: '5px'}}>
    <div>I am the first deep level. I don't know context.</div>
    <Level2 />
</div>
)
}

export default Level1