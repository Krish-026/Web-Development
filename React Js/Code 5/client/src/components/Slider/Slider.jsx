import React, { useState } from 'react'
import './Slider.scss'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
export default function Slider() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [

    "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600",
  ]

  const prevSlide = ()=>{
    console.log("Prevslide")
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  
  const nextSlide = ()=>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[currentSlide]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestIcon></WestIcon>
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastIcon></EastIcon>
        </div>
      </div>
    </div>
  )
}
