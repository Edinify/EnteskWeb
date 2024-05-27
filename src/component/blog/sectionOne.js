import React from 'react'


function SectionOne(props) {

  const deletedBlog = {
    title: 'Blog silinmisdir',
    text: '____',
    filepath: ""
  }

  let data
  if(props.data){
    data = props.data
  }else{
    data = deletedBlog
  }
  // if(data.blogContent){
  //   const {description, text, list} = data.blogContent
  //   console.log(data.blogContent)
  // }

  // data.blogContent ? 
  // data.blogContent.map((subject) =>{
  //   console.log(subject)
  // }):

  

  
  const {id, img,text,title} = data

  return (
    <article>
      <div className="container">
        <div className="container-fluid">
          <div className="row ">
            {
              data.blogContent? (
                <>
                  <div className="col-md-12">
                    <div className='blog-text-box  blog-text-box-One'>
                      <div className='blog-img'>
                        <img   style={{width: "80%"}} src={img[0].img} alt='img'/>
                      
                        <p>{img[0]?.imgName} <a href={img[0]?.imgSource} target="_blank">{img[0]?.imgSourceName}</a> </p>
                      </div>
                      <p>
                        {
                          data.blogContent[0].description
                        }
                      </p>
                      <p>
                        {
                          data.blogContent[0].text
                        }
                      </p>

                      <p className='blog-desc' >
                        {
                          data.blogContent[1]?.description
                        }
                      </p>

                      <p>
                        {
                          data.blogContent[1].text
                        }
                      </p>

                      <p className='blog-desc'>
                        {
                          data.blogContent[2]?.description
                        }
                      </p>

                        <p>
                        {
                          data.blogContent[2].text
                        }
                      </p>

                      <p className='blog-desc'>
                        {
                          data.blogContent[3]?.description
                        }
                      </p>

                      <p >
                        {
                          data.blogContent[3].text
                        }
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className='blog-text-box '>
                      {
                        img[1] ? (
                          <>
                            <img  className='blog-img2' src={img[1].img} alt='img'/>
                          </>
                        ) : (
                          null
                        )
                      }
                      
                      <p className='blog-desc' >
                        {
                          data.blogContent[4]?.description
                        }
                      </p>

                      <p>
                        {
                          data.blogContent[4]?.text
                        }
                      </p>

                      <p className='blog-desc' >
                        {
                          data.blogContent[5]?.description
                        }
                      </p>

                      <p>
                        {
                          data.blogContent[5]?.text
                        }
                      </p>

                      <p>
                        {
                          data.blogContent[6]?.text
                        }
                      </p>
                      <p>
                        {
                          data.blogContent[7]?.text
                        }
                      </p>
                      <p>
                        {
                          data.blogContent[8]?.text
                        }
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className=' bigScreenContainer ' >
                    <div className="col-md-6 ">
                      <div className='blog-text-box blog-text-box-two'>
                        {
                          <>
                            <p>{title}</p>
                            <p>{text}</p>
                          </>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className='blog-text-box'>
                        {
                          <div className='blog-img' style={{width: "100%"}}>
                            <img style={{width: "100%"}}  src={img[0].img} alt="img" />
                          </div>
                          
                        }
                      </div>
                    </div>
                  </div>
                  <div className='smallScreen' >
                    <div className="col-md-6">
                      <div className='blog-text-box'>
                        {
                          <div className='blog-img' style={{width: "100%"}}>
                            <img style={{width: "100%"}}  src={img[0].img} alt="img" />
                          </div>
                          
                        }
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <div className='blog-text-box blog-text-box-two'>
                        {
                          <>
                            <p>{title}</p>
                            <p>{text}</p>
                          </>
                        }
                      </div>
                    </div>
                    
                  </div>
                  
                </>
                
              )
            }

          </div>
        </div>
      </div>
    </article>
  )
}

export default SectionOne
