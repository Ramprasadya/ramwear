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
  return (
    <>
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer" >
     <div className="overflow-hidden" >
     <img src={image[0]} alt="img" className="hover:scale-110 transition ease-in-out" />
     </div>
     <p className="pt-3 pb-1 text-sm" >{name}</p>
     <p className="text-sm font-medium" >{currency}{price}</p>
    </Link>
    </>
  )
}

export default ProductItem