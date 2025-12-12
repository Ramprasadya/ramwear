

const NewsLatterBox = () => {
    const onSubmitHandler=(e:any)=>{
          e.preventDefault()
    }
  return (
    <div className="text-center" >
      <p className=" text-2xl font-medium text-[#FFFF] " >Subscribe now & get 20% off</p>
      <p className=" text-[#FFFF] mt-3 " >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit?
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 " >
        <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your email"  />
        <button className=" bg-gray-700 text-white text-xs px-10 p-4 " type="submit" >SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLatterBox