import Counter from "./Counter.jsx"
import InputComponent from "./InputComponent.jsx"

function App(){
  // A component can have dynamic data which is simply JavaScript variables
  return(
    <>
 <Counter />
 <InputComponent />
    </>
  )
}

// After creating the App function (component), we need to export it
export default App