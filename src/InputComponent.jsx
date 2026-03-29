import { useState } from "react"

function InputComponent(){
    const [fullname, setFullname] = useState("")

    function handleChange(event){
        setFullname(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        alert("Form Submitted")
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name:</label>
        <input 
        type="text"
        value={fullname}
        onChange={handleChange}
        placeholder="Enter your full name" 
        id="fullname"/>

        <button type="submit">Submit</button>

       
        </form>
        <h1>User Entered: {fullname}</h1>
        </>
    )   
}

export default InputComponent