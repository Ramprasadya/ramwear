import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom"


interface myProps{
    id:any,
    image:any,
    name:string,
    price: string | number

}

const ProductItem = ({id,image,name,price}:myProps) => {
    const {currency} = useContext(ShopContext)
    const ScrollToTop =()=>{
        window.scroll({
          top:0,
          behavior: 'smooth'
        })
    }
  return (
    <>
    <Link to={`/product/${id}`} onClick={ScrollToTop} className="text-[#FFFF] cursor-pointer border-b mb-2 rounded-[3px]" >
     <div className="overflow-hidden" >
     <img src={image[0]} alt="img" className="hover:scale-110  transition ease-in-out rounded-[5px]" />
     </div>
     <p className="pt-3 pb-1 text-sm" >{name}</p>
     <p className="text-sm font-medium" >{currency}{price}</p>
    </Link>
    </>
  )
}

export default ProductItem