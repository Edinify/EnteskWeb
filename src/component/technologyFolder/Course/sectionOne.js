import React,{useState} from 'react';
import poster from '../../../images/guneshsistemi.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const  SectionOne = (props) =>{
   
 
  
  const [showMore,setShowMore ] = useState(false)
  

  const {id,   text_1, learn,requireds,image_1 } = props.data 

  
  return(
    
    
  <article className="position section-one">

    <div className="container bigScreenContainer technology ">
      <div key={id} className="container-fluid">
        <div className="row" >
          
          <div  className=" information col-md-7 col-sm-12 col-xs-12 " >
            <div className="main-box technology-course ">
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
          
          <div  className=" col-md-5 col-sm-12 col-12 img-box">
            <img src={image_1} alt="entesk" />
          </div>
          <div className=" col-md-12">
            <div   className="technology-desc main-desc">
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
                showMore ? ( <span> Daha az </span> ) : ( <span> davamı </span> )
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
          <div className="row technology" >
          <div  className=" col-md-12 col-sm-12 col-12 img-box">
            <img src={image_1} alt="entesk" />
          </div>


          <div  className="  col-md-12 col-sm-12 col-xs-12 " >
            <div className="main-box technology-course ">
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
            </div>
            <div className="main-box technology-course ">
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
            <div   className="technology-desc main-desc">
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
              > {
                showMore ? ( <span> Daha az </span> ) : ( <span> davamı </span> )
              }</button>
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