import BannerComponent from "../components/BannerCompn"
import { BlogSection } from "../components/BlogSection"
import Category from "../components/Category"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import NewProduct from "../components/NewProduct"
import Sliders from "../components/sliders"
import TopBrand from "../components/TopBrand"
import { blogs } from "../data/data"

function Home() {

  return (
    <div className='flex flex-col gap-4 w-[90%] max-w-[1440px] mx-auto'>
    <Header/>
    <Hero/>

    <div className="hidden sm:block">

    <Category/>
    </div>
    <Sliders/>
    <NewProduct/>
    <TopBrand/>
    <BannerComponent/>
    <BlogSection blogs={blogs} />
    <Footer/>
    </div>
  )
}

export default Home
