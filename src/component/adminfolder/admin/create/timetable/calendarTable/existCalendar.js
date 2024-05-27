
import React,{useEffect} from 'react'

const index = ({Button,Dispatch,data}) => {


  

  const {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday,Sunday, } = data
  const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]


  return (
    <div style={{display: "flex", justifyContent: "space-around", flexWrap:"wrap"}} >
      <div style={{ textAlign:'center', width:"100%" }} > 
        <p style={{ fontWeight:"bolder", fontSize:" 25px " }} > exist </p> 
      </div>
      <ul>
        <b>Monday</b>
        {
          Monday.map((list,i) =>{
            Monday.sort( function(a, b) {
              return a.time.localeCompare(b.time);
            })
            const {studentName,time,studentId } = list
            return(
              <li key={i} >
                {/* <Button onClick={() =>{
                  Dispatch({type:`SelectMonday`, payload:{studentName ,time, weekday:"Monday",studentId,index:i + 1 }})
                }} > select </Button> */}
                <p>name: {studentName} </p> 
                <p> time: {time} </p> 
              </li>
            )
          })
        }
      </ul>
      <ul>
        <b>Tuesday</b>
        {
          Tuesday.map((list,i) =>{
            Tuesday.sort( function(a, b) {
              return a.time.localeCompare(b.time);
            })
            const {studentName,time,studentId } = list
            return(
              <li key={i} >
                {/* <Button onClick={() =>{
                  Dispatch({type:`SelectTuesday`, payload:{studentName ,time, weekday:"Tuesday",studentId,index:i + 1 }})
                }} > select </Button> */}
                <p>name: {studentName} </p> 
                <p> time: {time} </p> 
              </li>
            )
          })
        }
      </ul>
      <ul>
        <b>Wednesday</b>
        {
          Wednesday.map((list,i) =>{
            Wednesday.sort( function(a, b) {
              return a.time.localeCompare(b.time);
            })
            const {studentName,time,studentId } = list
            return(
              <li key={i} >
                {/* <Button onClick={() =>{
                  Dispatch({type:`SelectWednesday`, payload:{studentName ,time, weekday:"Wednesday",studentId,index:i + 1 }})
                }} > select </Button> */}
                <p>name: {studentName} </p> 
                <p> time: {time} </p> 
              </li>
            )
          })
        }
      </ul>
      <ul>
        <b>Thursday</b>
        {
          Thursday.map((list,i) =>{
            Thursday.sort( function(a, b) {
              return a.time.localeCompare(b.time);
            })
            const {studentName,time,studentId } = list
            return(
              <li key={i} >
                {/* <Button onClick={() =>{
                  Dispatch({type:`SelectThursday`, payload:{studentName ,time, weekday:"Thursday",studentId,index:i + 1 }})
                }} > select </Button> */}
                <p>name: {studentName} </p> 
                <p> time: {time} </p> 
              </li>
            )
          })
        }
      </ul>
      <ul>
        <b>Friday</b>
        {
          Friday.map((list,i) =>{
            Friday.sort( function(a, b) {
              return a.time.localeCompare(b.time);
            })
            const {studentName,time,studentId } = list
            return(
              <li key={i} >
                {/* <Button onClick={() =>{
                  Dispatch({type:`SelectFriday`, payload:{studentName ,time, weekday:"Friday",studentId,index:i + 1 }})
                }} > select </Button> */}
                <p>name: {studentName} </p> 
                <p> time: {time} </p> 
              </li>
            )
          })
        }
      </ul>
      <ul>
        <b>Saturday</b>
        {
          Saturday.map((list,i) =>{
            Saturday.sort( function(a, b) {
              return a.time.localeCompare(b.time);
            })
            const {studentName,time,studentId } = list
            return(
              <li key={i} >
                {/* <Button onClick={() =>{
                  Dispatch({type:`SelectSaturday`, payload:{studentName ,time, weekday:"Saturday",studentId,index:i + 1 }})
                }} > select </Button> */}
                <p>name: {studentName} </p> 
                <p> time: {time} </p> 
              </li>
            )
          })
        }
      </ul>
      <ul>
        <b>Sunday</b>
        {
          Sunday.map((list,i) =>{
            const {studentName,time,studentId } = list
            return(
              <li key={i} >
                <p>name: {studentName} </p> 
                <p> time: {time} </p> 
              </li>
            )
          })
        }
      </ul>
      <Button 
      style={{width:"90%",background:"green",color:"white"}} 
      onClick={()=>{Dispatch({type:'GetAllCalendar'})}} > update </Button>
    </div>
  )
}

export default index