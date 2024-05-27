import React from 'react'
import Button from '@mui/material/Button'
const Student = ({state,setId}) => {
  return (
    <>
      {
        state.map((student, index) =>{
          const {
            name,  
            age, 
            ParentName,
            PhoneNumber,
            Email,
            ClassAmount,
            status,_id
          } = student;
          return(
            <div key={_id} className="col-md-4" >
              {
                ClassAmount === 0 ? (
                  <div className="info-table" style={{borderColor:"red"}}>
                    <p> <b>Student fullname:</b> {name}  </p>
                    <p> <b>ParentName:</b> {ParentName}  </p>
                    <p> <b>PhoneNumber:</b> {PhoneNumber}  </p>
                    <p> <b>Email:</b> {Email}  </p>
                    <p> <b>age:</b> {age}  </p>
                    <p> <b>ClassAmount:</b> {ClassAmount}  </p>
                    <p> <b>status:</b> {status ? ( <>active</> ) : ( <>inactive</> )}  </p>
                    <Button
                      onClick={()=>{setId({id: _id}) }} >
                      update
                    </Button>
                  </div>
                ):(
                  <div className="info-table" >
                    <p> <b>Student fullname:</b> {name}  </p>
                    <p> <b>ParentName:</b> {ParentName}  </p>
                    <p> <b>PhoneNumber:</b> {PhoneNumber}  </p>
                    <p> <b>Email:</b> {Email}  </p>
                    <p> <b>age:</b> {age}  </p>
                    <p> <b>ClassAmount:</b> {ClassAmount}  </p>
                    <p> <b>status:</b> {status ? ( <>active</> ) : ( <>inactive</> )}  </p>
                    <Button
                      onClick={()=>{setId({id: _id}) }} >
                      update
                    </Button>
                  </div>
                )
              }
              
            </div>
          )
        })
      }
    </>
  )
}

export default Student