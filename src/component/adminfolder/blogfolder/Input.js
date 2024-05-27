import React from 'react'

export default function input({setBlogdata, blogData}) {
  
  return (
    
      <input
        type="file"
        name="file"
        accept="image/png, image/jpeg"
        id='img'
        onChange={(e) =>setBlogdata({...blogData, file:  [ ...blogData.file, e.target.files[0] ],})}
        />
    
  )
}
