import React from 'react'
import './Home.scss'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
export default function Home() {
  return (
    <>
      <div className="home">
        <Slider></Slider>
        <FeaturedProducts type = "featured"></FeaturedProducts>
        <Categories></Categories>
        <FeaturedProducts type = "trending"></FeaturedProducts>
        <Contact></Contact>
      </div>
    </>
  )
}
