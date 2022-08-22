import React, { useState } from "react";

const useToggle = (initState) => {
    const [state, setState] = useState(initState)
    const toggle = () => {
        setState(state => !state)
    }
    return [state, toggle]
}

export default useToggle