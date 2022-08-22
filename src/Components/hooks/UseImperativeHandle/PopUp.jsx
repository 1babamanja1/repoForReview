import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"

const PopUp = (props, ref) => {
    const renderCounter = useRef(0)
    const [modalOpened, setModalOpened] = useState(false)
    useImperativeHandle(ref, ()=>({
        openModal: () => setModalOpened(true)
    }))
    useEffect(() => {
        renderCounter.current += 1
    })
    return (
        <div style={{display: modalOpened ? 'block':'none'}}>
            I am a pop-up and I keep my "open" state inside. <br />
            I have been rendered {renderCounter.current} times <br />
            <button onClick={() => setModalOpened(false)}>Close me</button>
            </div>
    )
}

export default forwardRef(PopUp)