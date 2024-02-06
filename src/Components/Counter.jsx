import React, { useState } from 'react'


function Counter() {
    //state creation
    const [counter, setCounter] = useState(0)
    //function creation
    function increment() {
        setCounter(counter + 1)
    }
    function decrement() {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    function reset() {
        setCounter(0)
    }
    return (
        <div style={{ textAlign: 'center',boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',width:'500px',marginTop:'200px',marginLeft:'500px',borderRadius:'20px',padding:'20px' }}>
            <h2 style={{ fontSize: "40px", padding: '10px' }}>Counter App</h2>
            <h1 style={{ fontSize: "50px", padding: '10px',color:'violet' }}>{counter}</h1>
            <button onClick={increment} style={{ backgroundColor: '#1098F7' }}>Increment</button>
            <button onClick={decrement} style={{ backgroundColor: '#C7F2A7' }}>Decrement</button>
            <button onClick={reset} style={{ backgroundColor: '#DB162F' }}>Reset</button>
        </div>
    )
}

export default Counter