import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Server_Url } from "@/config";
export const ShopContext = createContext<any>(null);

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  bestseller: boolean;
  date: number;
  __v: number;
}


const ShopContextProvider = (props: any) => {
  const currency = "₹ ";
  const deliveryFee = 10;
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<any>({});
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([])

  // Auth 
  const [token, setToken] = useState<string>('')

    const getProductsData =async()=>{
     try {
        const response = await axios.get(`${Server_Url}/product/list`)
        if(response.data.success){
          // console.log(response.data.products);  
          setProducts(response.data?.products)
        }else{
          console.log(response.data.message)
        }
     } catch (error) {
       console.log(error);
     }
  }

  const getUserCart =async(token:string)=>{
    try {
       const response = await axios.get(`${Server_Url}/cart/get`, {headers:{token}} )
       if(response.data.success){
        setCartItems(response.data.cartData)
       }else{
        console.log(response.data.message)
       }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductsData()
  }, []);

  const addToCart = async (itemId: any, size: any) => {
    if (!size) {
      toast.error("Select Product Size", {
        position: "bottom-right",
      });
      return; 
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    if(token){
      try {
        await axios.post(`${Server_Url}/cart/add`,{itemId,size},{headers:{token}})
        toast.success("Prooduct Added in Cart")
      } catch (error) {
        console.log(error);
        
      }
    }
  };
 
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (
    itemId: string | number,
    size: string | number,
    quantity: any
  ) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

    if(token){
      try {
        await axios.post(`${Server_Url}/cart/update`,{itemId, size, quantity}, {headers:{token}})
        toast.success("Cart Item updated...")
      } catch (error) {
        console.log(error)
      }
    }
  };

  const getCartAmmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      
      
      if (!itemInfo) {
        console.log("Item info not found ");
      }
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += (itemInfo?.price?? 0) * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };


  useEffect(()=>{
    let localStorageToken = localStorage.getItem('token') 
    if(!token && localStorageToken){
      setToken(localStorageToken)
      getUserCart(localStorageToken)
    }
  },[token])


  // const products = "https://i.pinimg.com/736x/94/91/e6/9491e625120235b4c7b196d4f8b4e75e.jpg"
  const value = {
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
    setCartItems,
    updateQuantity,
    getCartAmmount,
    navigate,
    setToken,
    token,

  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
