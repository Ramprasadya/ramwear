import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title"
import ProductItem from "./ProductItem"


const RelatedProducts = ({category,subCategory}:any) => {
    const {products} = useContext(ShopContext)
    const [related, setRelated] = useState<any[]>([])
    useEffect(()=>{
      if(products.length >0){
        let productsCopy = products.slice();
        productsCopy = productsCopy.filter((item:{category:any})=>category === item.category);
        productsCopy = productsCopy.filter((item:{subCategory:any})=> subCategory === item.subCategory);
        // console.log(productsCopy.slice());
        setRelated(productsCopy.slice())
        
      }
    },[products])
  return (
    <div className="my-24" >
      <div className="text-3xl text-center py-2" >
       <Title text1="Related" text2="Products" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6" >
        {
            related.map((item,index)=>(
             <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))
        }

      </div>
    </div>
  )
}

export default RelatedProducts