import React, { useState, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import {
  GetTimetable,
  CreateTimetable,
  UpdateTimetable,
  CreateTeacherCalendar,
  GetCalendar,
  UpdateCalendar
} from "../../../../../reducer/crmRedux/action";
import { useDispatch } from "react-redux";
import SelectData from "./select/select";
import SelectClass from "./select/selectClass";
import Table from "./table/Table";
import ExistTable from "./table/existTable";
import TimeTableForm from "./timeTableForm/TimeTableForm";
import Index from "./exist&newTableFolder";
import CalendarForm from "./calendarForm";
import Swal from "sweetalert2";
import { positions } from "react-alert";
import TimetableFunc from "./function/function";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import NewCalendarTable from './calendarTable/newCalendar'
import ExistCalendarTable from './calendarTable/existCalendar'


const Create = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTimetable());
  }, []);
  const [students, setStudents] = useState([]);
  let state = useSelector((state) => state);
  const [newTimetable, setNewtimetable] = useState({
    StudentsArray: [],
    name: "",
    student_Id: "",
    teacher_Name: "",
    teacher_Email: "",
    teacher_Id: "",
    class_Name: "",
    class_Id: "",
    table_State:0,
    category_name:'',
    date: "",
    index:'',
    condition:false
  });
  const [Array, setArray] = useState([]);
  let [Category, setCategory] = useState([])
  const [tableAndCalendar, setTableAndCalendar] = useState(0)
  //  add class

  const {
    createTimetbale,
    // create Array
    addToArray,
    // onChange
    onChangeFunction,
    // create calendar
    onChangeForCalendar,
    // calendar reducer
    State,
    Dispatch,
    createCalendar,
    // students array
    handleAddStudent,
    DeleteStudent
  } = TimetableFunc(
    // class 
    state.classReducer,
    newTimetable,
    setCategory,
    Category,
    // student
    state.studentReducer.students,
    // teacher
    state.teacherReducer,
    // timetable
    state.timetableReducer,
    id,
    setId,
    setNewtimetable,
    // createTimetbale
    dispatch,
    UpdateTimetable,
    Array,
    CreateTimetable,
    setArray,
    Swal,
    // cerate calendar
    CreateTeacherCalendar,
    state.calendarReducer,
    UpdateCalendar,
    // student array
    setStudents,
    students,
  ) 
  const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = State;

  return (
    <>
    <div className="">
      {
        <>
          <Button onClick={()=> setTableAndCalendar(1) } >
            Table
          </Button>
          <Button onClick={()=> setTableAndCalendar(2) } >
            Calendar
          </Button>
        </>
      }

      {/* calendar & time table form */}
      {
        tableAndCalendar === 1 ?(
          <TimeTableForm 
            Box={Box}
            Array={Array}
            SelectData={SelectData}
            SelectClass={SelectClass}
            Select={Select}
            newTimetable={newTimetable}
            Category={Category}
            FormControl={FormControl}
            InputLabel={InputLabel}
            MenuItem={MenuItem}
            id={id}
            Button={Button}
            state={state}
            onChangeFunction={onChangeFunction}
            TextField={TextField}
            addToArray={addToArray}
            createTimetbale={createTimetbale}
            handleAddStudent={handleAddStudent}
            DeleteStudent={DeleteStudent}
          />
        ) :tableAndCalendar === 2 ?(
          <CalendarForm
            Box={Box}
            id={id}
            Button={Button}
            state={state}
            State={State}
            Dispatch={Dispatch}
            GetCalendar={GetCalendar}
            dispatch={dispatch}
          />
        ) : <></>
      }
      
      
    </div>

      {/* exist & new table */}
      {
        tableAndCalendar === 1?  (
          <Index
          Table={Table}
          setNewtimetable={setNewtimetable}
          Array={Array}
          setId={setId}
          newTimetable={newTimetable}
          Button={Button}
          createTimetbale={createTimetbale}
          ExistTable={ExistTable}
          state={state}
          />
        ): tableAndCalendar === 2 ?(
          <>
            {
              <NewCalendarTable 
                State={State} 
                createCalendar={createCalendar}
                Button={Button}
                Dispatch={Dispatch}
                
              />
            }
            
            {
              state.calendarReducer._id &&  (
                <ExistCalendarTable 
                  Button={Button}
                  Dispatch={Dispatch}
                  data={state.calendarReducer}
                  
                />
              )
            }
          </>
        ) : <></>
      }

      
      
    </>
  );
};

export default Create;
