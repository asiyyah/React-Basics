import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./dashboard/Layout"
import Dashboard from "./dashboard/Dashboard"
import Products from "./dashboard/Products"
import Orders from "./dashboard/Orders"
import Analytics from "./dashboard/Analytics"
import Auth from "./auth/Auth"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
        <Route path="auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
