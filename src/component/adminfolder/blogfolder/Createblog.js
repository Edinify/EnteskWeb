import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import adminFunctions from './adminFunctions'
import Input from './Input'
import BlogUpdate from './blogUpdate'
import {useParams} from 'react-router-dom'


const  Createblog = () => {


  const { id } = useParams();
  const {
    setSlideimg,
    setBlogdata,
    update,
    handlerSubmit,
    blogData,
    handleUpdateimg,
    currentId,
  } = adminFunctions(id)

  // console.log(update)
  return (
    <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <form autoComplete="off" className='admin-form' action="/upload" method='POST'  >
              <label htmlFor="name">Blog name: 
                <input required type='text' name="name" variant="outlined" value={blogData.name}  id='name' 
                  onChange={(e) =>setBlogdata({...blogData, [e.target.name]: e.target.value})}
                ></input> 
              </label>
              <label htmlFor="title"> Blog title:
              <input required type='text' name="title" variant="outlined" value={blogData.title} id='title' 
                onChange={(e) =>setBlogdata({...blogData, [e.target.name]: e.target.value})}
              ></input> 

              </label>
              <label required htmlFor="text">Content
                <textarea  name="text" variant="outlined" value={blogData.text} id='text' 
                  onChange={(e) =>setBlogdata({...blogData, [e.target.name]: e.target.value})}
                ></textarea> 
              </label> 
              {
                update ? (
                  <>
                   {
                     blogData.file.length == 1 ?(
                       <>
                        <label className='fileUpload' htmlFor="img"> Upload picture
                          <Input setBlogdata={setBlogdata} blogData={blogData} />
                        </label>
                       </>
                      
                     ):(
                      <>
                      {
                        blogData.file.length == 0 ?(
                          <>
                            <label className='fileUpload' htmlFor="img"> Upload title picture
                              <Input setBlogdata={setBlogdata} blogData={blogData} />
                            </label>
                            <label className='fileUpload' htmlFor="img"> Upload content picture
                              <Input setBlogdata={setBlogdata} blogData={blogData} />
                            </label>
                          </>
                        ):(
                          <>
                            {
                          blogData.file ? (
                          <>
                            <select id="file" onChange={(e) => setSlideimg(e.target.value)} >
                              <option select="selected"> set slide </option>
                              {
                                blogData.file.map((file, index) =>{
                                  // console.log(file)
                                  const {name} = file
                                  return(
                                    
                                    <option key={index} value={name} > {name} </option>
                                  )
                                })
                              }
                            </select>
                              </>
                              ):(
                                null
                              )
                            }
                          </>
                        )
                      }
                      </>
                     )
                   }
                  </>
                ):(
                  <>
                  <label className='fileUpload' htmlFor="img"> 
                  {blogData.file[0]? ( blogData.file[0].name ) : ( <>Upload title picture</> )} 
                    <Input setBlogdata={setBlogdata} blogData={blogData} />
                  </label>
                  <label className='fileUpload' htmlFor="img">
                  {blogData.file[1]? ( blogData.file[1].name ) : ( <>Upload title picture</> )}
                    <Input setBlogdata={setBlogdata} blogData={blogData} />
                  </label>
                    {/* <img src={img1} alt="img" />
                    <img src={img2} alt="img" /> */}
                    {
                      blogData ? (
                      <>
                        <select id="file" onChange={(e) => setSlideimg(e.target.value)} >
                          <option select="selected"> set slide </option>
                          {
                            blogData.file.map((file, index) =>{
                              const {name} = file
                              return(
                                
                                <option key={index} value={name} > {name} </option>
                              )
                            })
                          }
                        </select>
                      </>
                      ):(
                        null
                      )
                    }
                    
                  </>
                )
              }
                <button type="submit" className="btn btn-primary" onClick={handlerSubmit} >
                  {
                    update ? (
                      <Link to="/adminblogs">
                        <p>Update</p>
                      </Link>
                    ):(
                      <Link to="/adminblogs">
                        <p>Create</p>
                      </Link>
                      
                    )
                  }
                </button>
              </form> 
              
              {
                update ? (
                  <BlogUpdate 
                    blogData={blogData} 
                    currentId={currentId} 
                    handleUpdateimg={handleUpdateimg}
                  />
                ):(
                  null
                )
              }
            </div>
          </div>
        </div>
      </div>
  )
}

export default Createblog
