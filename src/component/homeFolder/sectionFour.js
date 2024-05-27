import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import 'bootstrap/dist/css/bootstrap.min.css';

const SectionFour = ( props) =>{
  // console.log(props.data)
  
  return(
    <SRLWrapper  >
      <article className="bg-div">
        <div className="container ">
          <div className="container-fluid">
            <div className="row section-4-main-div">
              <div className="col-md-12 ">
                <h4>Qalereya</h4>
              </div>
              {props.data.map((img) =>{
                const  {image, id} = img
                  return(
                  <div key={id} className="col-md-4 section-4-div">
                    <div className=" " >
                      <img className="responsive" src={image} alt="..."></img>
                    </div>
                  </div>
                  )
              })}
            </div>
          </div>
        </div>
      </article>
      <article className="bg-div-media">
        <div className="container ">
          <div className="container-fluid">
            <div className="row ">
              <div className=" text-div ">
                <h4>Qalereya</h4>
              </div>
              {props.data.map((img) =>{
                const  {image, id} = img
                  return(
                  <div key={id} className="col-sm-6 col-6 section-4-div">
                    <div className=" " >
                      <img className="responsive" src={image} alt="entesk"></img>
                    </div>
                  </div>
                  )
              })}
            </div>
          </div>
        </div>
      </article>
    </SRLWrapper>
  )
}

export default SectionFour  