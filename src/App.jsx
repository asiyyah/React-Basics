// import Counter from "./Counter.jsx"
// import InputComponent from "./InputComponent.jsx"
import ShoppingList from "./ShoppingList.jsx"
import Button from "./Button.jsx"
import Conditional from "./Conditional.jsx"
function App(){
  // A component can have dynamic data which is simply JavaScript variables
  return(
    <>
 {/* <Counter />
 <InputComponent /> */}
 <ShoppingList />
 <Conditional />
 {/* <Button /> */}
    </>
  )
}

// After creating the App function (component), we need to export it
export default App