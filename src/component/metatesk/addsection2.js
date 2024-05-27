import React from 'react'
// import img1 from './metaImg/Img1.png';
import img1 from './metaImg/Img1.png';
import img2 from './metaImg/Img2.png';
import img3 from './metaImg/Img3.png';

const Addsection2 = () => {
  return (
    <article className='add-section-Two'>
      <div  className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
               <h3> accessible by any device </h3>
               <h3> for your convenience </h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-box">
                <img src={img3} alt="metatesk" />
                <p>PC</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-box">
                <img src={img2} alt="metatesk" />
                <p>VR</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-box">
                <img src={img1} alt="metatesk" />
                <p>MOBILE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Addsection2