import React,{useState} from 'react';
import poster from '../../../images/guneshsistemi.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "react-video-js-player";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const  SectionOne = (props) =>{
   
 
  
  const [showMore,setShowMore ] = useState(false)
  

  const {id,  Description_1,  text_1, learn,requireds, image_1 } = props.data 

  
  return(
    
    
  <article className="position section-one">

    <div className="container bigScreenContainer environment course ">
      <div key={id} className="container-fluid">
        <div className="row" >
          <div  className=" information col-md-7 col-sm-12 col-xs-12 " >

            <div className="environment-course  main-box">
              <div>
                <div className='png' ></div>
                <h2>Nə əldə edəcəksiniz ?</h2>
                <ul>
                  {
                    learn.map((subject, index) =>{
                      const {tic} = subject
                      return(
                        <li key={index} >
                          <span>&#10003;</span> {tic}
                        </li>
                      )

                    })
                  }
                </ul>
             </div>
             <div>
               <div className='png' ></div>
                <h2>Tələblər</h2>
                <ul>
                  {
                    requireds.map((subject, index) =>{
                      const {required} = subject
                      return(
                        <li key={index}>
                          {required}
                        </li>
                      )
                    })
                  }
                  
                </ul>
             </div>
             
            </div>

          </div>
          
          
          <div  className=" img-box col-md-5 col-sm-12 col-12">
            {
              image_1 ? (<img src={image_1} alt="img" />) : ( <p> Loading... </p>)
            }
            
          </div>
          
          <div className=" col-md-12">
            <div   className="environment-desc main-desc">
              <div className='png' ></div>
              <b>Ümumi təsvir</b>
              <div className={showMore ? "linearunset" : "linear"} >
                <p>
                  {
                    showMore? `${text_1}` : `${text_1.slice(0, 300)} ... `
                  }
                </p>
                
              </div>
              <button
                onClick={() =>{
                if(!showMore){
                  setShowMore(true)
                }else
                  setShowMore(false)
                }}
              > 
              {
                showMore ? ( <span> Daha çox </span> ) : ( <span>Davamı </span> )
              } 
              </button>
            </div>
          </div>

        </div>
        
      </div>
    </div>

    <div className='smallScreen'  >
      <div key={id} className="container">
        <div className="container-fluid">
          <div className="row environment" >
            <div  className=" img-box col-md-5 col-sm-12 col-12">
              <img src={image_1} alt="img" />
            </div>
            <div  className="  col-md-12 col-sm-12 col-xs-12 " >
              <div className="environment-course main-box">
                <div>
                  <div className='png' ></div>
                  <h2>{Description_1}</h2>
                  <ul>
                    {
                      learn.map((subject, index) =>{
                        const {tic} = subject
                        return(
                          <li key={index} >
                            <span>&#10003;</span> {tic}
                          </li>
                        )

                      })
                    }
                  </ul>
                </div>
              </div>
              <div className="environment-course main-box">
                <div>
                  <div className='png' ></div>
                  <h2>Tələblər</h2>
                  <ul>
                    {
                      requireds.map((subject, index) =>{
                        const {required} = subject
                        return(
                          <li key={index}>
                            {required}
                          </li>
                        )
                      })
                    }
                    
                  </ul>
                </div>
              </div>


            </div>
          
          
          <div className=" col-md-12">
            <div   className="environment-desc main-desc">
              <div className='png' ></div>
              <b>Ümumi təsvir</b>
              <div className={showMore ? "linearunset" : "linear"} >
                <p>
                  {
                    showMore? `${text_1}` : `${text_1.slice(0, 300)} ... `
                  }
                </p>
                
              </div>
              <button
                onClick={() =>{
                if(!showMore){
                  setShowMore(true)
                }else
                  setShowMore(false)
                }}
              >
              {
                showMore ? ( <span>Daha az </span> ) : ( <span>Davamı</span> )
              } 
              </button>
            </div>
            
          </div>
        </div>
        </div>
      </div>
    </div>

  </article>  
  )
}

export default SectionOne