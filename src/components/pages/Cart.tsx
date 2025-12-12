import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../UiComponents/Title";
import { Trash2 } from "lucide-react";
import CartTotal from "../UiComponents/CartTotal";


const Cart = () => {
  const {cartItems, products, currency, updateQuantity, navigate} = useContext(ShopContext);

  const [cartData, setCartData] = useState<any[]>([])

  useEffect(()=>{
    if(products.length > 0){
      let  tempData = [];
      for(const items in cartItems){
         for(const item in cartItems[items]){
            if(cartItems[items][item] > 0){
              tempData.push({
               _id:items,
               size:item,
               quantity:cartItems[items][item]
              })
            }
         }
      }
      setCartData(tempData)
    }
  //  console.log(tempData);
   
  },[cartItems,products])

  return (
    <div className="border-t pt-14" >
       <div className="text-2xl mb-3" >
        <Title text1="Your" text2="Cart"  />
        {cartData.length <= 0 && <p className="text-center my-10" >Your Cart is Empty</p>}
       </div>
       <div className="" >
          {
            cartData.map((item,index)=>{
              const productData = products.find((product: { _id: any; })=>product._id ===item._id)
              return(
                <div key={index} className="py-4 border-t border-b text-[#FFFF] grid grid-cols[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center" >
                  <div className="flex items-start gap-6" >
                    <img src={productData?.image[0]} alt=""  className="w-16 sm:w-20"/>
                    <div>
                      <p className="text-xs sm:text-lg font-medium" >{productData?.name}</p>
                      <div className="flex items-center gap-5 mt-2" >
                       <p>{currency}{productData?.price}</p>
                       <p className="px-2 sm:px-3 sm:py-1 border bg-gray-700" >{item?.size}</p>
                      </div>
                    </div>
                  </div>
                <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value)) } className="border max-w-10 sm:max-w-20 px-1 sm:py-2 py-1" type="number" min={1} defaultValue={item.quantity} />
                <Trash2 onClick={()=>updateQuantity(item._id, item.size, 0)} className="w-4 mr-4 sm:w-5 cursor-pointer " />
                </div>
              )
            })
          }
       </div>
       <div className="flex justify-end my-20" >
        <div className="w-full sm:w-[450px]" >
          <CartTotal/>
          <div className="w-full text-end" >
            <button onClick={()=> navigate("/placeOrder")} className=" bg-gray-700 text-white text-sm my-8 px-8 py-3   cursor-pointer " >Proceed To Checkout</button>
          </div>
        </div>

       </div>
    </div>
  )
}

export default Cart