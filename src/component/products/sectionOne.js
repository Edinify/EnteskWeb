import React from 'react'
import { Link } from 'react-router-dom'


function SectionOne(props) {

  const  {executeScroll} = props
  return (
    <article>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            
            {props.data.map((products) =>{
              const {name, image, id,text_1,Category} = products
              return(
                <div key={id} className="col-md-6">
                  <div className="main-products ">
                    <div className="circle">
                      <img src={image} alt="" />
                    </div>
                    <div className="squard">
                      <h2> {name} </h2>
                      <p> {text_1} </p>
                      <div className='product-btn'>

                        
                          <Link to={{pathname:`${Category}/${name}`,
                            aboutProps:{
                              name: name,
                            }
                          }} >
                            <button >  Məzmun</button>
                          </Link >
                        
                          <Link to={{pathname:'/',
                            aboutProps:{
                              name: 'fromproducts',
                            }
                          }} 
                          
                          >
                            <button  >Qeydiyyat</button>
                          </Link >

                        
                      </div>
                    </div>
                  </div>
                </div> 
              )
            })

            }
            
          </div>
        </div>
      </div>
    </article>
  )
}

export default SectionOne
