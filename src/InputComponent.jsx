import { useState } from "react"

function InputComponent(){
    const [fullname, setFullname] = useState("")

    function handleChange(event){
        setFullname(event.target.value)
    }

    return(
        <>
        <input 
        type="text"
        value={fullname}
        onChange={handleChange}
        placeholder="Enter your name" />

        <h1>User Entered: {fullname}</h1>
        </>
    )   
}

export default InputComponent