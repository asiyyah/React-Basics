function Conditiona(){
const isLoggedIn = true
if(isLoggedIn){
    return(
        <>
        <h1>Welcome to the Dashboard</h1>
        </>
    )
}
else{
    return(
        <>
        <h1>Please Login to Continue</h1>
        </>
    )   
}
}
export default Conditional