import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import HeroSlider from '../components/HeroSlider'
import Testimonials from '../components/Testimonials'
import Blog from '../components/blog'
import BestSelling from '../components/BestSelling'

const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <HeroSlider />
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <OurPolicy />
      <LatestCollection />
      <BestSelling />
      {/* <BestSeller /> */}
      
      <Testimonials />
      <Blog />
      <NewsletterBox />
      </div>
    </div>
  )
}

export default Home