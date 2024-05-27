import React from 'react'


function BlogUpdate({
  blogData,
  currentId,
  handleUpdateimg,
  img1,
  img2
  }) {

    console.log(img1)
    console.log(img2)
    const {_id, name, file, text,title} = blogData

  return (  
    <div>
      
      {  
      blogData._id ? (
        <>
          <div className="col-md-12" key={_id}>
            <div className="updateBlog" >
              <div className="updateText">
                <p className="title">title: {title} </p>
                <p className="blogName">name: {name}</p>
                <p className="text">text: {text}</p>
              </div>
              <div className="updateimgDiv">
                {
                  blogData.file.map((image, index)=>{
                    const {filepath} = image
                    return(
                      
                      <div className='updateImage'  key={index}>
                        {
                          filepath? (
                            <>
                            { 
                              currentId === _id ?
                              (<button onClick={() =>handleUpdateimg(filepath)}>remove</button>) :
                              (null)
                            }
                              <img className="" 
                              src={`http://localhost:5000/${filepath}`} 
                              alt="img"
                              />
                            </>
                          ):
                          (
                            null
                          )
                          
                        }
                      </div>
                    )
                  })
                }
              </div>
              
            </div>
          </div>
        </>
      ):(
        <b>Wait...</b>
      )
        }
    </div>
  )
}

export default BlogUpdate
