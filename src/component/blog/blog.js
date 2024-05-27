import {React, useEffect } from 'react'
import SectionOne from './sectionOne'
import SectionFive from '../homeFolder/sectionFive'
import FooterSection from '../homeFolder/footerSection'
import allData from '../../course'
import { useParams,useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Circular from '../../circular/circular'
// dsfghjk

function Blog(props) { 

  const state = useSelector(state => state.allData)
  const location = useLocation();
  
  const { name } = useParams();
  let Course = allData.Course
  const blogs = allData.blog
  let data
  
  
blogs.map((blog) =>{
  if(blog.name === name ){
    data = blog
    
  }
  
  return data 
})

  useEffect(() => {
	window.scrollTo(0, 0);
	}, [name] );


  return (
    <article onClick={props.handlerSideClose}> 
      
    <div className='blog-banner'>
      <h2>Xəbərlər</h2>
    </div>
    
    <SectionOne data={data}  /> 
    <SectionFive data={blogs} />
    <FooterSection data={Course} />
  </article> 

  )
}

export default Blog
