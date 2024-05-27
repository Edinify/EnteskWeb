import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import poster from '../../../images/guneshsistemi.png';


const SectionThree = (props) =>{
  const { id,   Video, module, module_mun , module_for,image_2} = props.data
  const [moreLess , setMoreLess] = useState({display: 'none'})
  const [span , setSpan] = useState(false)

  return(
    <article className="section-3-main-div">
      
      <div key={id} className="container environment Course ">
        <div className="container-fluid">
          <div className="row" >
            <div>
              <div  className=" course-img-box img-box">
                <img src={image_2} alt="" />
              </div>

              <div  className="main-box linethree col-md-12 col-sm-12 col-xs-12" >
                <div className='png' ></div>
                <div className='environment-course '>
                  
                  <p>Modula daxildir</p>
                <ul>
                  {
                    module.map((subject, index) =>{
                      const {mod,note} = subject

                      return(
                        <div key={index}>
                          <li >
                            {mod} <span>&#8226;</span>
                          </li>
                          <li style={ note ? {display: 'block'} : {display: 'none'} }>{note}</li>
                        </div>
                        
                      )
                    })

                  }
                  
                </ul>
                </div>
                
              </div>

              <div className="col-md-12 ">
                <div className='main-box environment-course mundaricat ' >
                  <div className='png' ></div>
                  <div className={span? "cantentul  " : "cantents " }  >
                    

                    <div className="cantent">

                      <p> Modulun mündəricatı </p>
                      <ul  >
                      {
                      module_mun.map((subject, index) =>{
                        const {li} = subject
                        return(
                        <li key={index}>
                           {li}   <span>&#8226;</span>
                        </li>
                        )
                      })
                      }
                      </ul>
                    </div>
                      
                    <div className="note">
                      <p> Bu modul kimlər üçündü  </p>
                      <ul  >
                      {
                      module_for.map((subject, index) =>{
                        const {li} = subject
                        return(
                        <li key={index}>
                           {li}  <span>&#8226;</span>
                        </li>
                        )
                      })
                      }
                      </ul>

                    </div>
                    
                  </div>
                    <button className="cantent-btn"
                      onClick={() => {
                      if(moreLess.display === 'none'  ){
                        setSpan(true)
                        setMoreLess({display: 'flex'})
                      }else{
                        setMoreLess({display: 'none'})
                        setSpan(false)
                      }
                      }}
                    >
                      {
                        span ? ( <span> Daha az </span> ) : ( <span> Davamı </span> )
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

export default SectionThree