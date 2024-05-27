import React from 'react'
import adminFunctions from './adminFunctions'
import Createuttons from './createbuttons'
import {Link} from 'react-router-dom'

const Blogs = () => {

  const {state,setCurrentId,currentId,setDeleteId} = adminFunctions() 
  // console.log(state)
 


  return (

    <div className="container">
      <div className="container-fluid">
        <div className="row"> 
          {/* <div className='admin-blogs'> */}
            <Createuttons />
            {  state.map((blog) =>{
              const {_id, name, file, text,title} = blog
              // console.log(file[0]?.filepath)
              return(
                <div className="col-md-6" key={_id} >
                  <div className="admin-blog">
                    <div className="admin-blog-img">
                        <img src={`http://localhost:5000/${file[0]?.filepath}`} alt="img" />
                    </div>
                    <div className="admin-blog-content">
                      <p className=''  > BlogName: {name}  </p>
                      <p className='' > Blogcontent: {text} </p>
                      <p className='' > Blogtitle: {title} </p>
                    </div>
                        <div className="admin-btn-div">
                          <Link  to={`/Createblog/${_id}`} >
                            <button >
                              <p>edit</p>
                            </button>
                          </Link>
                            <button onClick={() =>{setDeleteId(_id)}} >
                              <p>Delete</p>
                            </button>
                        </div>
                      
                        
                  </div>
                </div>
              )
            })}
          {/* </div> */}
          
        
          

        </div>
      </div>
    </div>
  )
}

export default Blogs
