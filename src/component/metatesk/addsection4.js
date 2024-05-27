import React, {useState,useEffect} from 'react'
import VideoPlayer from "react-video-js-player";
import ScrollTriger from 'react-scroll-trigger'
import img1 from './metaImg/book.png';
import poster from './metaImg/poster.png'

const Addsection4 = () => {
  const [number, setNumber] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setNumber(true)
      
  //   }, 2000);
  //   console.log(VideoPlayer)
  // }, [number])
  // const play = (e) =>{
  //   console.log(e)
    
  // }
  

  const src = "https://res.cloudinary.com/dbgyytugh/video/upload/v1665658464/recipes/MetateskTrailer_14.49.50_hmrro3.mp4"
  return (
    <ScrollTriger onEnter={()=>  setNumber(true)} onExit={() => setNumber(false)} >
      <article className='add-section-four'>
        <div  className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h3> shifting <span> EDUCATION </span>  from  </h3>
                <div className="text-box text">
                  <p> boring </p> <p> to </p> <p> exciting </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src={img1} alt="metatesk" />
                  <p>traditional learning</p>
                </div>
              </div>
              <div className="text-box-responsive text">
                  <p> boring </p>
                  <p>traditional learning</p>
                  <p> to </p> 
                  <p> exciting </p>
                </div>
              <div className="col-md-6">
                <div className="video-box ">
                <VideoPlayer
                  src={src}
                  // autoplay={true}
                  controls={true}
                  poster={poster}
                  className="video"   
                />
                <p>immersive learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </ScrollTriger>

  )
}

export default Addsection4

