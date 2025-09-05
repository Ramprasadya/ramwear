import Logo from "../../assets/log.png"

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm" >
           <div>
              <img src={Logo} className="mb-5 w-32"  alt="" />
              <p className="w-full md:w-2/3 text-gray-600 " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias quam repudiandae?</p>
           </div>
           <div >
             <p className="text-xl font-medium mb-4" >Company</p>
             <ul className="flex flex-col gap-1 text-gray-600
             " >
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
             </ul>
           </div>
           <div>
            <p className="text-xl font-medium mb-5" >Get in touch</p>
            <ul className="flex flex-col gap-1 text-gray-600
             ">
                <li>+91 9876543210</li>
                <li>contact@wear.com</li>
                
            </ul>
           </div>
        </div>
        <div>
            <hr/>
            <p className=" py-5 text-sm text-center " >Copyright 2025@ wear.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer