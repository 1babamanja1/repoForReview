import React, { useEffect, useLayoutEffect, useRef } from "react"
import { useState } from "react"

const UseLayoutEffectShow = () => {
    const [panelVisible, setPanelVisible] = useState(0)
    const buttonRef = useRef(null)
    useEffect(() => {
        console.log("USE EFFECT FUNCTION TRIGGERED");
    });
    useEffect(() => {
        console.log("USE SECOND EFFECT FUNCTION TRIGGERED");
    });
    useLayoutEffect(() => {
        console.log("USE LAYOUT EFFECT FUNCTION TRIGGERED");
    });

    // useEffect(() => {
    //     document.body.style.backgroundColor = '#000'
    // return () => document.body.style.backgroundColor = '#fff'
    // },[])

    useLayoutEffect(() => {
        document.body.style.backgroundColor = '#000'
        return () => document.body.style.backgroundColor = '#fff'
    },[])


    return (
    <div>
        <h3>useLayoutEffect</h3>
        <button ref={buttonRef} onClick={() => {setPanelVisible(panelVisible => panelVisible + 1)}}>I am button in dom</button>
    </div>
    )
}

export default UseLayoutEffectShow