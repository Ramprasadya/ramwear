import BestSeller from "../UiComponents/BestSeller"
import NewsLatterBox from "../UiComponents/NewsLatterBox"
import OurPolicity from "../UiComponents/OurPolicity"
import Hero from "../website/Hero"
import LatestCollection from "../website/LatestCollection"


const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller />
      <OurPolicity/>
      <NewsLatterBox/>
    </div>
  )
}

export default Home