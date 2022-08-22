import React, { useState } from "react"
import Level1 from "./Level1"

export const Context = React.createContext()

const UseContextShow = () => {
    const [value, setValue] = useState('')
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h3>useContext</h3>
          <Context.Provider value={value}>
            <div style={{border: '1px solid', width: 'fit-content', padding: '5px'}}>
             <div>The context is stored here</div>
            <input value= {value} onChange={(e) => setValue(e.target.value)}></input>
            <Level1 />
            </div>
          </Context.Provider>
        </div>
      
    )
}

export default UseContextShow