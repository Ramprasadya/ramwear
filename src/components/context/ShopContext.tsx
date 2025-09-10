import { createContext, useEffect, useState } from "react";
import {products} from "../assets/frontend_assets/assets"
import { toast } from "react-toastify";
export const ShopContext = createContext<any>(null);

const ShopContextProvider =(props:any)=>{

    const currency = '$';
    const deliveryFee = 10;
    const [search, setSearch] = useState<string>('')
    const [showSearch, setShowSearch] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<any>({})

    const addToCart = async(itemId:any,size:any)=>{
        if(!size){
            toast.error('Select Product Size')
            return;
        }
      let cartData = structuredClone(cartItems)
      if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size] +=1;
        }else{
        cartData[itemId][size] =1;
      }
      }else{
        cartData[itemId] = {};
        cartData[itemId][size] =1 ;
      }
      setCartItems(cartData)
    }

    const getCartCount=()=>{
        let totalCount =0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] >0){
                        totalCount +=cartItems[items][item]
                    }
                } catch (error) {
                    console.log(error);
                    
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async(itemId: string | number,size: string | number,quantity: any)=>{
       let cartData = structuredClone(cartItems);
       cartData[itemId][size] = quantity
       setCartItems(cartData)
    }

    useEffect(()=>{
        // console.log(cartItems);     
    },[cartItems])

  // const products = "https://i.pinimg.com/736x/94/91/e6/9491e625120235b4c7b196d4f8b4e75e.jpg"
    const value ={
       currency,
       deliveryFee,
       products,
       search,
       setSearch,
       showSearch,
       setShowSearch,
       addToCart,
       getCartCount,
       cartItems,
       updateQuantity
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider