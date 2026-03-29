function Conditional(){
// const isLoggedIn = true

// // Using if/else statement
// // if(isLoggedIn){
// //     return(
// //         <>
// //         <h1>Welcome to the Dashboard</h1>
// //         </>
// //     )
// // }
// // else{
// //     return(
// //         <>
// //         <h1>Please Login to Continue</h1>
// //         </>
// //     )   
// // }

// // Using ternary operator
// return(
//     <>
//     <h1>{isLoggedIn? "Welcome to App" : "Please Login to Continue"}</h1>

//     {/* {isLoggedIn? <h1>Welcome to the Dashboard</h1> : <h1>Please Login to Continue</h1>} */}
//     </>
// )

// const hasPaid = true

// return(
//     <>
//     <h1>Dev and Design Dashboard</h1>
//     <p>DESIGN TO MVP BOOTCAMP</p>

//     {hasPaid ? (
//         <>
//         <h3>Access Granted</h3>
//         <p>Welcome to class</p>
//         <p>Access live class link Here</p>
//         </>
//     ) : (
//         <>
//         <h3>Payment Required for Access</h3>
//         <p>Please make payment to access the course content</p>
//         </>
//     )
//     }
//     </>
// )

const resultAvailable = true
const studentName = `Rose`
const score =250

return (
     <>
<h1>Exam Result Portal</h1>
<h3>Hello: {studentName}</h3>

{resultAvailable ? (
    <>
    <h3>Your result is available</h3>
    <p>Your score is: {score}</p>
    </>
) : (
    <>
    <h3>Result Not Available</h3>
    </>
)}
</>
)
}
export default Conditional