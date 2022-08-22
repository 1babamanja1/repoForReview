import React, { useMemo, useState } from "react";

const UseMemoShow = () => {
    const [firstTerm, setFirstTerm] = useState(0)
    const [secondTerm, setSecondTerm] = useState(0)

    const [counter, setCounter] = useState(0)

    // const memoizedValue = useMemo(() => {
    //     console.log('render')
    //     for (let i = 0; i < (10 ** 9); i+= 1){}
    //     return +firstTerm + +secondTerm
    //   },[firstTerm, secondTerm]);

    const notMemoizedValue = () => {
          console.log('render')
        for (let i = 0; i < (10 ** 9); i+= 1){}
        return +firstTerm + +secondTerm
    }

    return (
    <div>
        <h3>useMemo</h3>
        First term: <input value={firstTerm} onChange={(e) => setFirstTerm(e.target.value)} /> <br />
        Second term: <input value={secondTerm} onChange={(e) => setSecondTerm(e.target.value)} /> <br />
        {/* Memo result: {memoizedValue} <br /> */} <br />
        Non memo result: {notMemoizedValue()} <br />
        
        Not depended counter: {counter}
        <button onClick={() => setCounter(counter => counter + 1)}>Up Ind Counter</button>
    </div>
    )
}

export default UseMemoShow