import React from 'react'

function sectionTwo(props) {
  
  const team = props.data[0].team
  return (
    <article>
      <div className="container">
        <div className="container-fluid">
          <div className="row">

            {
              team.map((team) =>{
                const {teacher, team_img, team_name, id} = team

                return(
                  <div key={id} className="col-md-3 col-lg-2 col-sm-4 col-6 team-info">
                    <img src={team_img} alt="" />
                    <h5> {team_name} </h5>
                    <p> {teacher} </p>
                  </div>
                )
              })
            }
            
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12  team-info-text">
              <p> {props.data[0].description_3} </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default sectionTwo
