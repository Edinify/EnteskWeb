import React from 'react';
import line from '../../images/line1.png';
import poster from '../../images/guneshsistemi.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "react-video-js-player";
import video from "../../video/video1.mp4";
import MediaQuery from 'react-responsive'


const  SectionOne = (props) =>{
  console.log(props.data.example)
  const {Description, image, text} = props.data
  const videoSrc = video;
  return(

    
  <article className="position KSM ">
    <div className="container bigScreenContainer section-one">
      <div className="container-fluid">
        <div className="row KSM" >
          <div  className="text-box col-md-6 col-sm-12 col-xs-12" >
             <h2>{Description}</h2>
             <p>{text}</p>
            <button className="section-1-button" >Davami</button>
            <img src={line} alt="img"></img>
          </div>
          <div  className=" ksm-img-box  col-md-6 col-sm-12 col-12">
            <img className='KSM-img' src={image} alt="" />
          </div>
        </div>
        
      </div> 
    </div>

    <MediaQuery maxDeviceWidth={780}  >
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 section-1-for-mobile" >
              <h2>{Description}</h2>
                <div  className=" ksm-img-box  col-md-6 col-sm-12 col-12">
                  <img className='KSM-img' src={image} alt="" />
                </div>
              <p>{text}</p>
            <button className="button">Davami</button>
            </div>
          </div>
        </div>
      </div>
    </MediaQuery>

  </article>  
  )
}

export default SectionOne