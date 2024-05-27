import {React} from 'react'


function SectionOne(props) {
  const {description_1, description_2, img, } = props.data[0]

  
  return (
    <article>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 about-text">
                <div className='png' ></div>
                <p> {description_1} </p>
                <p> {description_2} </p>
            </div>
            <div className="col-md-6 ">
              <div className="about-img " >
                <img src={img} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SectionOne
