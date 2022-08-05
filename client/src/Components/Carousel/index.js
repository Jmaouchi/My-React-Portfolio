import React from 'react'
import './carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { data } from './data';

function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div className='app'>
      <Slider {...settings}>
      {data.map((item) => (
        <div className='card'>
          <div className='card-top'>
            <img className='image-carousel' src={item.linkImage} alt={item.title} />
            <h1 className='heading-slider'>{item.title}</h1>
          </div>
          <div className='card-bottom'>
            <p className='paragraph-slider'>{item.price}</p>
          </div>
      </div>
      ))}
      </Slider>
    </div>
  )
}

export default Carousel