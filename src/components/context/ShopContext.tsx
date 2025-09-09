import { createContext, useState } from "react";
import {products} from "../assets/frontend_assets/assets"
export const ShopContext = createContext<any>(null);

const ShopContextProvider =(props:any)=>{

    const currency = '$';
    const deliveryFee = 10;
    const [search, setSearch] = useState<string>('')
    const [showSearch, setShowSearch] = useState<boolean>(false)
  // const products = "https://i.pinimg.com/736x/94/91/e6/9491e625120235b4c7b196d4f8b4e75e.jpg"
    const value ={
       currency,
       deliveryFee,
       products,
       search,
       setSearch,
       showSearch,
       setShowSearch
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider