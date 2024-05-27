import React from 'react';
import poster from '../../images/poster.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "react-video-js-player";
import video from "../../video/Entesk.MOV"
import { Link } from 'react-router-dom';


const  SectionOne = (props) =>{

  const {Description, areas } = props.data[0]
  // console.log(props.data)

  const videoSrc = video;
  return(

    
  <article className="position home section-one">
    <div   className="container  bigScreenContainer">
      <div className="container-fluid">
        <div className="row" >
          <div  className="text-box col-md-6 col-sm-12 col-xs-12" >
            <div className='png' ></div>
            <p className='' >Biz Kimik ?</p>
             <p >{Description}</p>
             <ul>
              {
                areas.map((areas, index) =>{
                  const { area } = areas

                  return(
                    <li key={index} >
                      {
                        area
                      }
                    </li>
                  )
                })
              }
             </ul>

            <Link to={{
                pathname:'/products',
              }}>
              <button className="yellow-button-big">
              Davamı
              </button>
            </Link>
          </div>
          <div  className="text-box col-md-6 col-sm-12 col-12">
          <h1> <span>Entesk</span> 
            <VideoPlayer 
            src={videoSrc} className="video"   
            />
          </h1>
          </div>
        </div>
      </div> 
    </div> 

    <div className='smallScreen'  >
      <div  className="container">
        <div className="container-fluid">
          <div className="row">
            <div className=" col-md-12 col-sm-12 section-1-for-mobile" >
              <p>Biz Kimik ?</p>
              
              <p>{Description}</p>
              <h1> <span>Entesk</span> 
                <VideoPlayer 
                src={videoSrc} className="video"   
                />
              </h1>
               <ul>
              {
                areas.map((areas, index) =>{
                  const { area } = areas

                  return(
                    <li key={index} >
                      {
                        area
                      }
                    </li>
                  )
                })
              }
             </ul>
            <Link to={{
                pathname:'/products',
              }}>
              <button className="yellow-button-big">
                Ətraflı
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </article>  
  )
}

export default SectionOne