import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import uuid from 'react-uuid'

const CalendarForm = ({
  Box,
  id,
  Button,
  state,
  State,
  Dispatch,
  dispatch,
  GetCalendar
}) => {
const [Name, setName] = useState('')
const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
  const onChangeFunction = (e) =>{

    dispatch(GetCalendar(e.target.value))
    Dispatch({type:"TEACHER", payload:e.target.value})

  }
  console.log()
  return (
    <>
      <div className=" create-admin create-data">
        <p> create Calendar</p>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {/* select teacher id */}
          {
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">select teacher  </InputLabel>
                  <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  onChange={(e) => {
                    onChangeFunction(e)
                  }}
                  value={State.teacher_Id}
                  >
                    {state.teacherReducer.map((clas, index) => {
                      const { name, _id,status} = clas;

                      if(status){
                        return (
                          <MenuItem key={index} value={_id}>{name}</MenuItem>
                        );
                      }
                      
                    })}
                  </Select>
                </FormControl>
            }
          {/* select student */}
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                select weekday{" "}
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                name="weekday"
                // value={newTimetable.category_name}
                onChange={(e) => {
                  Dispatch({type:`Weekday`, payload: e.target.value})
                }}
                value={State.weekday}
              >
                {weekday.map((name, i) => {
                  return (
                    <MenuItem key={i} value={name} >
                      {name}
                    </MenuItem>
                  );
                })}
              </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  select student{" "}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  
                  onChange={(e) => {
                    Dispatch({ type:"ID", payload:uuid() })
                    Dispatch({ type:"StudentId", payload:e.target.value })
                  }}
                  name={'student'}
                  value={State.studentId}
                >
                  {state.studentReducer.students.map((data, index) => {
                    const {name,status,_id} = data
                    if(status){
                      return (
                        <MenuItem key={index} value={_id}>{name}</MenuItem>
                      );
                    }
                  })}
                </Select>
            </FormControl>

            
          
          {/* set date */}
          <TextField
            // label="age"
            variant="outlined"
            type="time"
            name={"date"}
            onChange={(e) => {
              Dispatch({ type:"TIME", payload:e.target.value })
            }}
            value={State.time}
          />
          {State.weekday && (
            <>
              <Button onClick={() =>{ Dispatch({type:`${State.weekday}`}) }} >
                create or update
              </Button>
            </>
            
          )}
        </Box>
      </div>
    </>
  )
}

export default CalendarForm