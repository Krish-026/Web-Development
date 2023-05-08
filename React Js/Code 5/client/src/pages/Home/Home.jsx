import React from 'react'
import './Home.scss'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
export default function Home() {
  return (
    <>
      <div className="home">
        <Slider></Slider>
        <FeaturedProducts type = "featured"></FeaturedProducts>
        <FeaturedProducts type = "trending"></FeaturedProducts>
      </div>
    </>
  )
}
