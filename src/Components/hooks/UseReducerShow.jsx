import React, { useReducer } from "react";

const UseReducerShow = () => {

    const initialState = {count: 1}
    const myReducer = (state, action) => {
        switch (action.type) {
            case 'multiple 2': {
                return {count: state.count * 2};
            }
            case 'divide 2': {
                return {count: state.count / 2};
            }
            default: return state
        }
    }
    const [state, dispatch] = useReducer(myReducer, initialState);
    return (
        <div>
            <h3>useReducer</h3>
            Reducer counter: {state.count}
            <button onClick={() => dispatch({type: 'multiple 2'})}>*2</button>
            <button onClick={() => dispatch({type: 'divide 2'})}>/2</button>
        </div>
        )
}

export default UseReducerShow