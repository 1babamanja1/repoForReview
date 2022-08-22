import React from "react"
import useLocalStorage from "./customHooks/useLocalStorage"
import { useRef } from "react"
import useToggle from "./customHooks/useToggle"

const UseCustomShow = () => {
    const [isOpened, toggleOpened] = useToggle(false)
    const firstInputRef = useRef(null)
    const secondInputRef = useRef(null)
    const [localStorageData, setLocalStorageData] = useLocalStorage([], 'namesArray')
    const updateArray = () => {
        setLocalStorageData([...localStorageData,{name: firstInputRef.current.value, surname: secondInputRef.current.value}])
    }

    return (
    <div>
        <h3>useCustom, useDebugValue</h3>
        <h4>useToggle</h4>
        <button onClick={() => toggleOpened()}>Toggle panel using useToggle</button>
        <div style={{display: isOpened ? 'block' : 'none'}}>Hidden panel</div>
        <h4>useLocalStorage</h4>
        <input ref={firstInputRef}></input>
        <input ref={secondInputRef}></input>
        <button onClick={updateArray}>Update Array</button>
        <div>Array</div>
        {localStorageData.map(item => (
            <div key={item.name}>
              <div>{item.name} {item.surname}</div>
            </div>

        ))}
    </div>
    )
}

export default UseCustomShow