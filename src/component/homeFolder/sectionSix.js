import React from 'react'
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SectionSix = (props) =>{
  // console.log(props)


  const settings = {
    arrows:true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 1000,
    dots: true,
    cssEase: 'linear',
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        }
      }
    ]

};

return(
  <article className="section-6-main-div">
    {/* <div className="section-text-div">
      <p className='text-6' >İnsanlar bizim haqqımızda nə düşünür?</p>
    </div> */}
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-6" >
            <div className="section-text-div">
              <p className='text-6' >İnsanlar bizim haqqımızda nə düşünür?</p>
            </div>
              <Slider {...settings}>
                {props.data.map((client) =>{
                  const {id, img, name, text} =client
                  return(
                  <div key={id} className="client-box">
                    {/* <div className="circle-div" >
                      <img src={img} alt="img"></img>
                    </div> */}
                    <div className="squer-div">
                      <p> {name} </p>
                      <p> {text} </p>
                    </div>
                  </div>
                  )
                })
                }
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  </article>
)
}

export default SectionSix