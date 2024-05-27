import React from 'react'
import img1 from './metaImg/beforeRaul.png';
import img2 from './metaImg/chinaGirl.png'
// import entesk from '../../../public/images'


const Addsection1 = () => {
  return (
    <article className='add-section-one'>
      <div  className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
                <h3> <span> metatesk </span> <br />
                    <span> is making the learning process </span> <br />
                    <span> engaging, entertaining, exciting </span> </h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
              <p> before </p>
                <img src={img1} alt="metatesk" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
              <p> now </p>
                <img src={img2} alt="metatesk" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Addsection1