import React, {useState} from 'react'
import Classes from './classes/classes';
import Teachers from './teacher/teachers';
import Student from './student/students';
import Timetable from './timetable/timetable'
import { Button } from "@mui/material";


const Create = ({Create}) => {
  const {div,setdiv} = Create
  // const [div,setdiv] = useState(10)
  const style = {
    display: "flex", 
    flexWrap:"wrap",
    height:'auto', 
    borderColor:'red',
  }

  return (
    <div className="container create-page">
        <Button className="create-box" variant="outlined" style={div === 0 ? {borderColor:'red'}:{borderColor:''}} onClick={
          () => div !== 0 ? setdiv(0) : setdiv(10) } >
          Create Classes 
        </Button>
        <Button className="create-box" variant="outlined" style={div === 1 ? {borderColor:'red'}:{borderColor:''}} onClick={
          () => div !== 1 ? setdiv(1) : setdiv(10) }>
          Create Teachers
        </Button>
        <Button className="create-box" variant="outlined" style={div === 2 ? {borderColor:'red'}:{borderColor:''}} onClick={
          () => div !== 2 ? setdiv(2) : setdiv(10) }>
          Create Student
        </Button>
        <Button className="create-box" variant="outlined" style={div === 3 ? {borderColor:'red'}:{borderColor:''}} onClick={
          () => div !== 3 ? setdiv(3) : setdiv(10) }>
          Create timetable
        </Button>
          <div className="col-md-12">
            <div style={
                div === 0 ? style : {display: "none"}
              } className="classes">
              <Classes  />
            </div>
            <div style={
                div === 1 ? style : {display: "none"}
              } className="classes">
              <Teachers />
            </div>
            <div style={
                div === 2 ? style : {display: "none"}
              } className="classes">
              <Student />
            </div>
            <div style={
                div === 3 ? {
                  display: "block", 
                  height:'auto', 
                  borderColor:'red'
                } : {display: "none"}
              } className="classes">
              <Timetable />
            </div>
          </div>
          
    </div>

  )
}

export default Create