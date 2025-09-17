import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import Collection from "./components/pages/Collection"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Products from "./components/pages/Products"
import Cart from "./components/pages/Cart"
import Login from "./components/pages/Login"
import PlaceOrder from "./components/pages/PlaceOrder"
import Orders from "./components/pages/Orders"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import SearchBar from "./components/UiComponents/SearchBar"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
     <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] " >
      <ToastContainer/>
      <Navbar />
      <SearchBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/collection" element={<Collection/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product/:productId" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/placeOrder" element={<PlaceOrder/>} />
          <Route path="/orders" element={<Orders/>} />
        </Routes>
        <Footer />
     </div>
    </>
  )
}

export default App
