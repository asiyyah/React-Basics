import { use } from "react";
import {useState} from "react"

function Counter(){
const [count, setCount] = useState(0)
const [steps, setSteps] = useState(10)

function increase(){
    setCount(count + 1);
    setSteps(steps + 10)
  
}

    function reset(){
        setCount(0);
        setSteps(10)
    }

    return(
        <>
        {/* Use the curly bracket to take the JavaScript code/variable into the HTML/Return section in React */}
        <h1>Count Value: {count}</h1>
        <h2>Steps Count: {steps}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}
export default Counter