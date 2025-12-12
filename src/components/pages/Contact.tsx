import { assets } from "../assets/frontend_assets/assets"
import NewsLatterBox from "../UiComponents/NewsLatterBox"
import Title from "../UiComponents/Title"


const Contact = () => {
  return (
    <div>
    <div className="text-center text-2xl pt-10 border-t" >
      <Title text1="Contact" text2="US" />
    </div>
     <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28" >
       <img className="w-full md:max-w-[480px]  " src={assets.contact_img} alt="" />
       <div className="flex flex-col justify-center items-start gap-6" >
        <p className="font-semibold text-xl text-[#FFFF]" >Our Store</p>
        <p className="text-[#FFFF]" >8458 Gas Station <br/> Aurai 210, Varanasi, India </p>
        <p className="text-[#FFFF]" >Tel: (91) 9876543210 <br/> Email: admin@wear.com </p>
        <p className="font-semibold text-xl text-[#FFFF]" >Carrers at Wear</p>
         <p className="text-[#FFFF]" >Learn more about our teams and job opening</p>
         <button className="border-r border-b border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500" >Explore Jobs</button>
       </div>
     </div>
     <NewsLatterBox/>
    </div>
  )
}

export default Contact