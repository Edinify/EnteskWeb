import React from 'react'
import bgShape from '../../images/layout.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import allData from '../../course'


const SectionFive = (props) =>{


  const settings = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    // autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
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
// const state = useSelector((state) => state.allData) 
return(
   <article className="section-5-main-div">
    
    <div className="bg-img-div">
      
      <img src={bgShape}  alt="entesk"></img>
    </div>
    <div className="slide-div" >
      <h4>Entesk Xəbərlər</h4>
      <Slider {...settings}>
        {
          props.data.map((blog) =>{
            const {id, blogname, name,img} = blog
            // console.log(image)
            return(
            <div className="caruseldiv" key={id}>
              <div className="top-div">
                <img  src={img[0].img} alt="entesk" ></img>
              </div>
              <div className="bottom-div">
                <p>
                  {blogname}
                </p>
                <Link to={{pathname:`/blog/${name}`, }}>
                  <button className='green-button-small' > davamı </button>
                </Link>
                

              </div>
            </div>
            )
          })
        }

        
        

      </Slider>
    </div>

  </article>
)
}

export default SectionFive