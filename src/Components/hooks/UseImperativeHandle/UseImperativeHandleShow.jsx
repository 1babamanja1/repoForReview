import React, { useEffect, useRef } from "react"
import PopUp from "./PopUp"

const UseImperativeHandleShow = () => {
const renderCounter = useRef(0)
 const popUpRef = useRef(null)

 const openModal = () => {
    popUpRef.current.openModal()
 }
 useEffect(() => {
    renderCounter.current += 1
})
    return (
    <div>
        <h3>useImperativeHandle</h3>
        <div>I am a parent component. I have been rendered {renderCounter.current} times</div>
        <button onClick={openModal}>Open child modal</button>
        <PopUp ref={popUpRef}/>
    </div>
)
}

export default UseImperativeHandleShow