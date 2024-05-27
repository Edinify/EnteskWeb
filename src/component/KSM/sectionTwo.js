import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SectionTwo = (props)=>{
  const Course = props.data.example_1

  const settings = {
      arrows: false,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      // autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 4000,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "180px",
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "140px",
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "120px",
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "50px",
          }
        }
      ]

  };

  return(
    <article className="section-2 KSM">
      <Slider {...settings}>
        {Course.map((subject) =>{
          const {img, title, id} = subject
          return(
          <div key={id} className="caruseldiv">
            <div className="top-div">
              <img  src={img} alt="img" ></img>
            </div>
            <div className="bottom-div">
              <h3>{title}</h3>
            </div>
          </div>
          )
        })
        }
      </Slider>
    </article>
    
  )
}

export default SectionTwo