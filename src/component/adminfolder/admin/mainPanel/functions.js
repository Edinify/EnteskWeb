import React,{useEffect,useState} from 'react'

const Functions = (
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
) => {
  // get data from back
  useEffect(() => {
    dispatch(GetTimetable());
    dispatch(GetTeacher());
    dispatch(GetStudent())
  }, []);


  // searching table
  const Searching = (e) => {
    e.preventDefault();
    if(date.from || date.to || date.teacher_Id || date.student_Name || date.table_State){
      dispatch(searchByDate(date,setSearch));
      // setSearch(true);
    }
  };

  

  // get today
  const today = (e) => {
    e.preventDefault();
    dispatch(GetTimetable());
    setSearch(false);
    getDate({
      from: "",
      to: "",
      teacher_Id: "",
      student_Name: "",
      table_State: "",
    })
  };

  
  // confirm or gancel
  const ConCanHandler = (id, conData) => {
    setBoolean(id);
    let data = {
      table_State: conData,
    };
    dispatch(confirmOrCancel(id, data));
  };

  // onChangeFunction

  let value, Name

  const onChangeFunction = (e) =>{
    // e.preventDefault();
    Name = e.target.name;
    value = e.target.value;
    getDate({
      ...date,
      [Name]: value,
    })
  }

  // delete student

  const deleteStudentHandler = (id,studentId) =>{
    dispatch(deleteStudentFromTable(id,studentId))
  }





  const style ={
    display: "flex", 
    flexWrap:"wrap",
    height:'auto', 
  }

  return{
    Searching,
    today,
    ConCanHandler,
    onChangeFunction,
    style,
    deleteStudentHandler
  }
}

export default Functions