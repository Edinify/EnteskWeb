import React from 'react'
import {Link} from 'react-router-dom'
import Blogs from './blogs'


const Admin = (props) =>{
 

  return(
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="admin-page">
            <Link to='/adminBlogs'>
                <button>
                  Blogs
                </button>
            </Link>
            <Link to={`/Createblog/${0}`}>
              <button>
                Create blog
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Admin
