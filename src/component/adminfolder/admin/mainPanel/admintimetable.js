import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {
  GetTimetable,
  searchByDate,
  confirmOrCancel,
  GetTeacher,
  GetStudent,
  deleteStudentFromTable
} from "../../../../reducer/crmRedux/action";
import Functions from "./functions";
import DateLocal from "./date-local";
import SearchResult from "./searchResult";
import Tables from "./tables";
import Textfield from "./text-field";
import { Button } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import Option from './option'



const Admin = () => {
  const [search, setSearch] = useState(false);
  const [boolean, setBoolean] = useState(0);
  let state = useSelector((state) => state.timetableReducer);
  const teacher = useSelector((state) => state.teacherReducer);
  const dispatch = useDispatch();
  const [date, getDate] = useState({
    from: "",
    to: "",
    teacher_Id: "",
    student_Name: "",
    table_State: "",
  });


  const { 
    Searching,
    today,
    ConCanHandler,
    onChangeFunction,
    style,
    deleteStudentHandler
   } = Functions(
    // get data from back
    dispatch,
    GetTimetable,
    GetTeacher,
    // searching table
    searchByDate,
    date,
    setSearch,
    // confirm or cancel
    setBoolean,
    confirmOrCancel,
    // get search data
    getDate,
    // get birthday
    GetStudent,
    // delete student
    deleteStudentFromTable
  )
  const { cancelClass,confirmedClass,salary } = state.teacherData


  const [tables, setTables] = useState([
  ]);


  useEffect(() => {
    const sortedAndUniqueTables = state.table
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .reduce((acc, table) => {
        if (!acc.some(item => item.name === table.name && item.date === table.date)) {
          acc.push(table);
        }
        return acc;
      }, []);
    setTables(sortedAndUniqueTables);
  }, [state.table]);

  return (
    <>
      {state ? (
        <div className="main-admin-page">
          <div className="container">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <form action="" className="get-date">
                    <DateLocal date={date.from} type={'datetime-local'} name={'from'} onChangeFunction={onChangeFunction} />
                    <DateLocal date={date.to} type={'datetime-local'} name={'to'} onChangeFunction={onChangeFunction} />
                    <Textfield  type={'text'} name={'student_Name'} onChangeFunction={onChangeFunction} date={date} />
                    <Option date={date.teacher_Id} teacher={teacher}  name={'teacher_Id'} onChangeFunction={onChangeFunction} />
                    
                    <label
                      htmlFor="state"
                      onChange={(e) => {

                        e.target.checked
                          ? getDate({
                              ...date,
                              table_State: 1,
                            })
                          : getDate({
                              ...date,
                              table_State: "",
                            });
                      }}
                    >
                      search confirmed class:{" "}
                      <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                      />
                    </label>
                    <Button variant="outlined" onClick={Searching}>Searching</Button>
                  </form>

                  <Button variant="outlined" onClick={today}>today</Button>
                </div>
                {
                  <>
                  <p>
                    confirmed : { search ?
                     confirmedClass : <>0</> }
                  </p>
                  <p>
                    canceled : {search ? 
                      cancelClass : <>0</> }
                  </p>
                  <p>
                    salary :  { search ?  
                    salary : <>0</>
                    }
                  </p>
                  </>
                }
                {search ? (
                  <>
                  
                  <SearchResult 
                    state={tables} 
                    ConCanHandler={ConCanHandler} 
                    deleteStudentHandler={deleteStudentHandler}
                  />
                  </>
                  
                ) : (
                  <Tables 
                    state={tables} 
                    teacher={teacher} 
                    ConCanHandler={ConCanHandler}
                    deleteStudentHandler={deleteStudentHandler}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>wait</p>
      )}
    </>
  );
};

export default Admin;
