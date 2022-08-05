import React from 'react'
import './style.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { data } from './data';

function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='app app-content'>
      <Slider {...settings}>
      {data.map((item) => (
        <div className='box box-content'>
          <div className='box-top'>
            <h1>{item.firstName}</h1>
          </div>
          <div className='box-bottom'>
            <p className='paragraph-slider'>{item.text}</p>
          </div>
          <div className='box-stars'>
            <i className={item.stars}></i>
            <i className={item.starsTwo}></i>
            <i className={item.starsThree}></i>
            <i className={item.starsFour}></i>
            <i className={item.starsFive}></i>
          </div>
      </div>
      ))}
      </Slider>
    </div>
  )
}

export default Carousel