import React from 'react';
import poster from '../../images/guneshsistemi.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "react-video-js-player";

const  SectionOne = ({data,executeScroll }) =>{


  const {id,  Description_1,  text_1, image_1} = data 
  
  console.log()
  return(

    
  <article className="position section-one">

    <div className="container bigScreenContainer skill">
      <div key={id} className="container-fluid">
        <div className="row" >
          <div  className="text-box col-md-6 col-sm-12 col-xs-12" >
            <div className='png' ></div>
             <h2>{Description_1}</h2>
             <p>{text_1}</p>
            {/* <button  className="section-1-button" onClick={executeScroll} >Davamı</button> */}
            
          </div>
          <div  className="img-box col-md-6 col-sm-12 col-12">
            <img src={image_1} alt='entesk' ></img>
          </div>
        </div>
        
      </div> 
    </div>

   <div className='smallScreen'  >
      <div key={id} className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 section-1-for-mobile skill" >
              <h2>{Description_1}</h2>
                <img src={image_1} alt='entesk' ></img>
              <p>{text_1}</p>
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