import { ChevronDown, Menu, } from "lucide-react"
import Logo from "../../assets/log.png"
import { Link, NavLink } from 'react-router-dom'
import { useContext, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { UserIcon } from "../ui/UserIcon"
import { ShoppingCartIcon } from "../ui/ShoppingCartIcon"
import { SearchIcon } from "../ui/SearchIcon"
import { toast } from "react-toastify"

const Navbar = () => {
  const [visible, setvisible] = useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const Logout = () => {
    navigate("/login")
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    toast.success("Logout Success ...")
  }

  return (
    <div className='flex items-center justify-between py-3 font-medium mb-5' >
      <NavLink to="/" ><img src={Logo} alt='Wear' className='w-20' /></NavLink>
      <ul className='hidden sm:flex gap-5 text-sm text-[#FFFF]'>
        <NavLink to="/" className="flex flex-col items-center gap-1" >
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-[#FFFF] hidden ' />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1" >
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-[#FFFF]  hidden' />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1" >
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-[#FFFF]  hidden' />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1" >
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-[#FFFF] hidden ' />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <SearchIcon onClick={() => {
          setShowSearch(true);
          navigate("/collection")
          }} className="w-5 cursor-pointer" />
        <div className="group relative hidden sm:block ">
          {
            token ? (

              <li className={`  flex items-center gap-1  `} > <UserIcon className="w-5 cursor-pointer" /></li>
            ) : (

              <Link className="flex items-center gap-1  " to="/login"> <UserIcon className="w-5 cursor-pointer" /> <span  >Login</span> </Link>
            )
          }
          {
            token && (

              <div className="group-hover:block hidden absolute dropdown-menu -right-[50px] pt-2 backdrop-blur-xl z-50" >
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-[#042929]/10  text-[#FFFF] rounded  ">
                  {token && <p onClick={() => navigate("/profile")} className="cursor-pointer hover:text-sky-700" >My Profile</p> }
                  <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-sky-700" >Orders</p>
                  <p onClick={Logout} className="cursor-pointer hover:text-sky-700" >Logout</p>
                </div>
              </div>
            )
          }
        </div>
        <Link to="/cart" className="relative" >
          <ShoppingCartIcon className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[5px] w-4 text-center leading-4 backdrop-blur-xl text-white aspect-square rounded-full text-[8px]  " >{getCartCount()}</p>
        </Link>
        <Menu onClick={() => setvisible(true)} className=" w-5 cursor-pointer sm:hidden" />
      </div>
      {/* Mobile Navabr  */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden backdrop-blur-3xl transition-all ${visible ? 'w-[70%]' : 'w-0'}`} >
        <div className="flex flex-col text-[#FFFF]" >
          <div onClick={() => setvisible(false)} className="flex items-center gap-2 p-3" >
            <ChevronDown className="h-4 rotate-90 mt-[3px]" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setvisible(false)} className="py-2 pl-6 border-b" to="/" >Home</NavLink>
          <NavLink onClick={() => setvisible(false)} className="py-2 pl-6 border-b" to="/collection" >Collection</NavLink>
          <NavLink onClick={() => setvisible(false)} className="py-2 pl-6 border-b" to="/about" >About</NavLink>
          <NavLink onClick={() => setvisible(false)} className="py-2 pl-6 border-b" to="/contact" >Contact</NavLink>
          <NavLink onClick={() => setvisible(false)} className="py-2 pl-6 border-b" to="/profile" >My Profile</NavLink>
           <NavLink onClick={() => setvisible(false)}  className="py-2 pl-6 " to="/orders" >Orders</NavLink>
         {token ? (
          <div className="w-full flex justify-center relative" >
          <button onClick={()=>{
            Logout()
            setvisible(false)
          }} className=" absolute top-[150px] cursor-pointer py-2 px-4 bg-gray-800 text-white w-[80%] " >Logout</button>
          </div> 
         ):(
          <div className="w-full flex justify-center relative" >
          <button onClick={()=>{
            navigate("/login")
            setvisible(false)
            }} className=" absolute top-[150px] cursor-pointer py-2 px-4 bg-gray-800 text-white w-[80%] " >Login</button>
          </div> 
         )}
          {/* <NavLink className="py-2 pl-6 border" to="/home" > Home</NavLink> */}
        </div>
      </div>
    </div>

  )
}

export default Navbar