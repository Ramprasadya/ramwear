import { Server_Url } from "@/config"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { toast } from "react-toastify"
import profile from "../../assets/profile.png"

interface profile {
  name?: string;
  email?: string;
}

const Profile = () => {
   const {token} = useContext(ShopContext)
   const [userData, setUserData] = useState<profile>({})

   const fetchUser =async()=>{
    const response = await axios.get(`${Server_Url}/user/userDetail`,{headers:{token}})
    if(response.data.success){
      setUserData(response.data.user)
    }else{
      toast.error(response.data.message)
    }
   }

   console.log(userData)

   useEffect(()=>{
     fetchUser()
   },[token])
  return (
    <div className="p-6 border-b border-t mt-6" >
      <div className="flex flex-col justify-between items-center gap-y-2 sm:gap-y-4" >
         <img src={profile} alt="Profile" className="rounded-full h-[150px] w-[150px] " />
         <h1 className=" text-sm sm:text-xl" >{userData.name}</h1>
         <p className=" text-sm sm:text-xl">{userData.email}</p>
      </div>
    </div>
  )
}

export default Profile
