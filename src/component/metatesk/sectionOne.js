import React,{useState,useRef} from 'react'
import Slider from "react-slick";
import img1 from './metaImg/banner.png';
import img2 from './metaImg/banner2.png';
import img3 from './metaImg/banner3.png';


const SectionOne = () => {
  

// use spring 
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 4000,
  cssEase: "linear",
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

  return (
    <article className='metatesk-info section-one'>
      <p> EDUCATION in METAVERSE </p>
      <div className="text-container">
        <p> classes for </p>
        <p> 6-14 years old </p>
        <p> for </p>
        <p> any point of the world </p>
      </div>
        <div className="container-fluid">
          <div className="row">
            
            <div className="col-md-12">
            <Slider {...settings}>
              <div  className='slide' >
                <img src={img1} alt="" />
              </div>
              <div className='slide' >
                <img src={img2} alt="" />
              </div>
              <div className='slide' >
                <img src={img3} alt="" />
              </div>
            </Slider>
            </div>
          
          </div>
        </div>


    </article>
  )
}

export default SectionOne