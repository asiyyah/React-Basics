import Home from "./Home"
import About from "./About"
import Contact from "./Contact" 
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
function App(){
  // A component can have dynamic data which is simply JavaScript variables
  return(
    <>
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>

   
    
    </>
  )
}

// After creating the App function (component), we need to export it
export default App