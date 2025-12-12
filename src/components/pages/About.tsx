import { assets } from "../assets/frontend_assets/assets"
import NewsLatterBox from "../UiComponents/NewsLatterBox"
import Title from "../UiComponents/Title"


const About = () => {
  return (
    <div className="text-2xl text-center pt-8 border-t" >
      <Title text1="About" text2="Us"  />
      <div className="my-10 flex flex-col md:flex-row gap-16" >
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-[#FFFF]" >
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae facilis iure deleniti perspiciatis rerum cum porro inventore quidem modi rem.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro qui dolorum eos voluptatibus, incidunt temporibus voluptas necessitatibus asperiores voluptatem officiis facilis. Accusantium quaerat architecto nisi nostrum sint qui beatae laboriosam.</p>
          <b className="text-[#FFFF]">Our Mission</b>
          <p>At Wear, we believe fashion should be more than just what you wear—it should be an expression of who you are. Our mission is to make style accessible, sustainable, and inspiring for everyone. We’re here to bring you carefully curated pieces that blend comfort, quality, and individuality, so you can look good, feel confident, and make your mark—every day.</p>
        </div>
      </div>
      <div className="text-4xl py-4" >
        <Title text1="Why" text2="Choose Us" />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20" >
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5" >
           <b>Quality Assurance:</b>
           <p>We handpick and inspect every product to ensure top quality, durability, and style. Your satisfaction is our priority, and we deliver only the best.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5" >
           <b>Convenience:</b>
           <p>We make shopping simple and seamless, with easy browsing, secure checkout, and fast delivery—so you can enjoy your style without the hassle.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5" >
           <b>Exceptional Customer Service:</b>
           <p>Our team is always here to help with quick, friendly support—because your experience matters as much as our products.</p>
        </div>
      </div>
      <NewsLatterBox />
    </div>
  )
}

export default About