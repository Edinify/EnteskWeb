import React,{useState} from 'react'
import sectionImg from './metaImg/sectionOnebg.jpeg'
import CountUp from 'react-countup'
import ScrollTriger from 'react-scroll-trigger'
import google from './metaImg/google.png';
const Addsection5 = () => {
  


  return (
    <article className='add-section-five'>
    {/* <div className='png' ></div> */}
    <div  className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="text-box">
            <p>overall</p>
            <p>11385</p>
            <p> class hours </p>
            </div>
          </div>
          <div className="col-md-4">
          <div className="text-box">
            <p> students from  </p>
            <p>5</p>
            <p>countries</p>
          </div>
          </div>
          <div className="col-md-4">
          <div className="text-box">
            <p>under   </p>
            <img src={google} alt="" />
            <p>program</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </article>
  )
}

export default Addsection5