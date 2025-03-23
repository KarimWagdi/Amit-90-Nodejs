import { useState } from "react";

export default function Counter(){
    const[count, setCount]= useState(0)
    const [value, setValue]= useState(1)

    const handelClick = () => {
        setCount(count + value)
    }
    const decrement = () => {
        setCount(count - value)
    }
    return (
        <>
            <h1>Counter: {count }</h1>
            <button onClick={handelClick}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <h2>Value of update: {value}</h2>
            <button onClick={() => setValue(value + 1)}>Increment Value</button>
            <button onClick={() => setValue(value - 1)}>Decrement Value</button>

        </>
    )
}