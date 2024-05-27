import React from 'react';
// import poster from '../../images/guneshsistemi.png';
import 'bootstrap/dist/css/bootstrap.min.css';
// import VideoPlayer from "react-video-js-player";
// import video from "../../video/video1.mp4";
// import MediaQuery from 'react-responsive'


// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
const  SectionOne = ({data, executeScroll}) =>{
  
  const {id,  SectionOne_description,  SectionOne_text,SectionOne_image } = data 
  
  

  return(
  <article className="position section-one">

    <div className="container bigScreenContainer ">
      <div key={id} className="container-fluid technology">
        <div className="row" >
          <div  className="text-box col-md-6 col-sm-12 col-xs-12 " >
            <div className='png' ></div>
             <h2>{SectionOne_description}</h2>
             <p>{SectionOne_text}</p>
            {/* <button  className="section-1-button" onClick={executeScroll} >Davamı</button> */}
            
          </div>
          <div  className="img-box col-md-6 col-sm-12 col-12 img-box ">
            <img src={SectionOne_image} alt='entesk'></img>
          </div>
        </div>
        
      </div> 
    </div>

    <div className='smallScreen'  >
      <div key={id} className="container">
        <div className="container-fluid">
          <div className="row technology">
            <div className="col-md-12 col-sm-12 section-1-for-mobile" >
              <h2>{SectionOne_description}</h2>
                <img src={SectionOne_image} alt='entesk'></img>
              <p>{SectionOne_text}</p>
            {/* <button  className="section-1-button" onClick={executeScroll} >Davamı</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  </article>  
  )
}

export default SectionOne