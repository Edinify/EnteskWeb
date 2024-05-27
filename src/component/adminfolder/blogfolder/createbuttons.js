import React from 'react'
import {Link} from 'react-router-dom'


const createuttons = () => {
  return (
    <div className='create-blog' >
      <Link to={`/Createblog/${0}`}>
        <button>
          Create blog
        </button>
      </Link>
    </div>
  )
}

export default createuttons 
