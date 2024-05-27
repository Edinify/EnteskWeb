import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaQuery from 'react-responsive'
import { Link} from 'react-router-dom'

const SectionThree = ({data,myRef,blog}) =>{
  const [showMore,setShowMore ] = useState(false)
  const { id, Course} = data
  // console.log(id)
  return(
    <article className="section-3-main-div ">
      
      <div key={id} className="container bigScreenContainer environment ">
        <div className="container-fluid">
          <div className="row area" >

          {
              Course.map((subject, index)=>{
                const {
                  class_description,
                  class_text,
                  class_image,
                  classLink
                } = subject

                return(
                  <div key={index} className='d-flex'>

                    <div ref={myRef} className="img-box col-md-6 col-sm-12 col-12">
                      <img src={class_image} alt='img' ></img>
                    </div>

                    <div  className="text-box col-md-6 col-sm-12 col-xs-12"  >
                      <div className='png' ></div>
                      <h2>{class_description}</h2>
                      <p>
                        {
                          showMore? `${class_text}` : `${class_text.slice(0, 300)} ... `
                        }
                      </p>

                      
                            <Link to={{
                              pathname:`/CourseEnviroment/${classLink}`,
                              aboutId:{
                                id: 'fromNav-environment'
                              }
                               }}  >
                              <button className="section-3-button">Davamı</button>
                            </Link>
                          
                      
                    </div>

                  </div>
                )
              })
            }

          </div>
        </div> 
      </div>

      <MediaQuery maxDeviceWidth={767}  >
        <div className="container">
          <div className="container-fluid">
            <div className="row">
            {
                Course.map((subject, index)=>{
                  const {
                    class_description,
                    class_text,
                    class_image,
                    classLink
                  } = subject
                  return(
                    <div key={index} className="col-md-12 col-sm-12 section-3-for-mobile environment" ref={myRef} >
                
                      <h2>{class_description}</h2>
                      <img src={class_image} alt='img' ></img>
                      <p>{class_text}</p>
                      <Link to={{pathname:`/CourseEnviroment/${classLink}`, }}  >
                        <button className="section-3-button">Davamı</button>
                      </Link>

                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </MediaQuery>


      
    </article>
  )
}

export default SectionThree