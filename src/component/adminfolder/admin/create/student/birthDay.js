import React from 'react'

const BirthDay = ({birthDay,state}) => {
  return (
    <>
    <div className="birthDay">
      {
        birthDay.map((id) =>{


          return state.map((data,i) => {
            const {_id,name, age} = data

            if(id === _id){

              return(
                <div key={i}>
                  <p> {name} </p>
                  <p> {age} </p>
                </div>
              )
            }
          })
        })
      }
    </div>
    </>
  )
}

export default BirthDay