import React, { useEffect, useReducer, useState } from "react";

const TimetableFunc = (
  // class
  classReducer,
  newTimetable,
  setCategory,
  Category,
  // student
  studentReducer,
  // teacher
  teacherReducer,
  // timetable
  timetableReducer,
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
  // calendar
  CreateTeacherCalendar,
  calendarReducer,
  UpdateCalendar,
) => {
  // calendar reducer for teacher

  const [State, Dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "Monday":
          return {
            ...state,
            Monday: [
              ...state.Monday,
              {
                studentId: state.studentId,
                studentName: state.studentName,
                time: state.time,
                Id: state.Id,
              },
            ],
            studentId: "",
            studentName: "",
            time: "",
            weekday: "",
          };
        case "Tuesday":
          return {
            ...state,
            Tuesday: [
              ...state.Tuesday,
              {
                studentId: state.studentId,
                studentName: state.studentName,
                time: state.time,
                Id: state.Id,
              },
            ],
            studentId: "",
            studentName: "",
            time: "",
            weekday: "",
          };
        case "Wednesday":
          return {
            ...state,
            Wednesday: [
              ...state.Wednesday,
              {
                studentId: state.studentId,
                studentName: state.studentName,
                time: state.time,
                Id: state.Id,
              },
            ],
            studentId: "",
            studentName: "",
            time: "",
            weekday: "",
          };
        case "Thursday":
          return {
            ...state,
            Thursday: [
              ...state.Thursday,
              {
                studentId: state.studentId,
                studentName: state.studentName,
                time: state.time,
                Id: state.Id,
              },
            ],
            studentId: "",
            studentName: "",
            time: "",
            weekday: "",
          };
        case "Friday":
          return {
            ...state,
            Friday: [
              ...state.Friday,
              {
                studentId: state.studentId,
                studentName: state.studentName,
                time: state.time,
                Id: state.Id,
              },
            ],
            studentId: "",
            studentName: "",
            time: "",
            weekday: "",
          };
        case "Saturday":
          return {
            ...state,
            Saturday: [
              ...state.Saturday,
              {
                studentId: state.studentId,
                studentName: state.studentName,
                time: state.time,
                Id: state.Id,
              },
            ],
            studentId: "",
            studentName: "",
            time: "",
            weekday: "",
          };
        case "Sunday":
          return {
            ...state,
            Sunday: [
              ...state.Sunday,
              {
                studentId: state.studentId,
                studentName: state.studentName,
                time: state.time,
                Id: state.Id,
              },
            ],
            studentId: "",
            studentName: "",
            time: "",
            weekday: "",
          };
        case "NAME":
          return { ...state, studentName: action.payload };
        case "StudentId":
          return { ...state, studentId: action.payload };
        case "ID":
          return { ...state, Id: action.payload };
        case "TIME":
          return { ...state, time: action.payload };
        case "TEACHER":
          return { ...state, teacher_Id: action.payload };
        case "Weekday":
          return { ...state, weekday: action.payload };
        case "SelectMonday":
          return {
            ...state,
            studentName: action.payload.studentName,
            time: action.payload.time,
            weekday: action.payload.weekday,
            index: action.payload.index,
            studentId: action.payload.studentId,
            Monday: state.Monday.filter(
              (data, i) => data.Id !== action.payload.Id
            ),
          };
        case "SelectTuesday":
          return {
            ...state,
            studentName: action.payload.studentName,
            time: action.payload.time,
            weekday: action.payload.weekday,
            index: action.payload.index,
            studentId: action.payload.studentId,
            Tuesday: state.Monday.filter(
              (data, i) => data.time !== action.payload.time
            ),
          };
        case "SelectWednesday":
          return {
            ...state,
            studentName: action.payload.studentName,
            time: action.payload.time,
            weekday: action.payload.weekday,
            index: action.payload.index,
            studentId: action.payload.studentId,
            Wednesday: state.Wednesday.filter(
              (data, i) => data.time !== action.payload.time
            ),
          };
        case "SelectThursday":
          return {
            ...state,
            studentName: action.payload.studentName,
            time: action.payload.time,
            weekday: action.payload.weekday,
            index: action.payload.index,
            studentId: action.payload.studentId,
            Thursday: state.Thursday.filter(
              (data, i) => data.time !== action.payload.time
            ),
          };
        case "SelectFriday":
          return {
            ...state,
            studentName: action.payload.studentName,
            time: action.payload.time,
            weekday: action.payload.weekday,
            index: action.payload.index,
            studentId: action.payload.studentId,
            Friday: state.Friday.filter(
              (data, i) => data.time !== action.payload.time
            ),
          };
        case "SelectSaturday":
          return {
            ...state,
            studentName: action.payload.studentName,
            time: action.payload.time,
            weekday: action.payload.weekday,
            index: action.payload.index,
            studentId: action.payload.studentId,
            Saturday: state.Saturday.filter(
              (data, i) => data.time !== action.payload.time
            ),
          };
        case "SelectSunday":
          return {
            ...state,
            studentName: action.payload.studentName,
            time: action.payload.time,
            weekday: action.payload.weekday,
            index: action.payload.index,
            studentId: action.payload.studentId,
            Sunday: state.Sunday.filter(
              (data, i) => data.time !== action.payload.time
            ),
          };
        case "GetAllCalendar":
          return {
            ...state,
            Monday: calendarReducer.Monday,
            Tuesday: calendarReducer.Tuesday,
            Wednesday: calendarReducer.Wednesday,
            Thursday: calendarReducer.Thursday,
            Friday: calendarReducer.Friday,
            Saturday: calendarReducer.Saturday,
            Sunday: calendarReducer.Sunday,
            teacher_Id: calendarReducer.teacherId,
            calendarId: calendarReducer._id,
          };
        case "ClearAllCalendar":
          return {
            ...state,
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
            Sunday: [],
            calendarId: "",
          };
        default:
          break;
      }
    },
    {
      // monday
      Monday: [],
      // Tuesday
      Tuesday: [],
      // Wednesday
      Wednesday: [],
      // Thursday
      Thursday: [],
      // Friday
      Friday: [],
      // Saturday
      Saturday: [],
      // Sunday
      Sunday: [],
      // propertys
      studentId: "",
      studentName: "",
      time: "",
      Id: "",
      // teacher
      teacher_Id: "",
      // weekday
      weekday: "",
      // index
      index: "",
      // calendar Id
      calendarId: "",
    }
  );

  // class
  useEffect(() => {
    classReducer.map((Class) => {
      const { name, _id, class_Category } = Class;
      if (_id === newTimetable.class_Id) {
        newTimetable.class_Name = name;
        Category.length === 0 && setCategory(class_Category);
      }
    });
  }, [newTimetable]);

  // student
  useEffect(() => {
    studentReducer.map((student) => {
      const { name, _id } = student;
      if (_id === newTimetable.student_Id) {
        newTimetable.name = name;
      }
      if (_id === State.studentId) {
        Dispatch({ type: "NAME", payload: name });
      }
    });
  }, [newTimetable, State.studentId]);

  // teacher
  useEffect(() => {
    teacherReducer.map((student) => {
      const { name, _id, email } = student;
      if (_id === newTimetable.teacher_Id) {
        newTimetable.teacher_Name = name;
        newTimetable.teacher_Email = email;
      }
    });
  }, [newTimetable]);

  // timetable
  useEffect(() => {
    timetableReducer.table.map((timetable) => {
      const { _id } = timetable;
      if (_id === id) {
        setNewtimetable(timetable);
      }
    });
  }, [id]);

  // create timatable
  const createTimetbale = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(UpdateTimetable(newTimetable, id));
      setNewtimetable({
        ...newTimetable,
        StudentsArray:[],
        fullName: "",
        student_Id: "",
        teacher_Name: "",
        class_Name: "",
        class_Id: "",
        class_Category: "",
        date: "",
      });
      setId("");
      setCategory([]);
    } else {
      if (
        Array.length > 0 &&
        !newTimetable.class_Name &&
        !newTimetable.student_Name &&
        !newTimetable.date
      ) {
        dispatch(CreateTimetable(Array));
        setArray([]);
        Swal.fire({
          color: "green",
          text: "Great",
        });
      } else {
        Swal.fire({
          color: "red",
          text: "please add time table",
        });
      }
    }
  };

  const createCalendar = () => {
    if (!State.calendarId) {
      dispatch(CreateTeacherCalendar(State));
      Dispatch({ type: "ClearAllCalendar" });
    } else {
      dispatch(UpdateCalendar(State));
      Dispatch({ type: "ClearAllCalendar" });
    }
  };

  // addToArray
  const addToArray = (e) => {
    e.preventDefault();
    if (newTimetable.condition) {
      setArray((data) => {
        return data.map((data, index) =>
          index === newTimetable.index ? newTimetable : data
        );
      });

      setNewtimetable({
        ...newTimetable,
        StudentsArray: [],
        student_Name: "",
        student_Id: "",
        class_Name: "",
        class_Id: "",
        category_name: "",
        date: "",
        index: "",
        condition: false,
      });
    } else if (
      newTimetable.student_Id &&
      newTimetable.teacher_Id &&
      newTimetable.class_Id &&
      newTimetable.date &&
      newTimetable.category_name &&
      newTimetable.StudentsArray.length > 0
    ) {
      console.log(true)
      setArray([...Array, newTimetable]);
      setNewtimetable({
        ...newTimetable,
        StudentsArray: [],
        student_Name: "",
        student_Id: "",
        class_Name: "",
        class_Id: "",
        category_name: "",
        date: "",
      });
      setCategory([]);
    } else {
      Swal.fire({
        color: "red",
        text: "please complete form",
      });
    }
  };
  // student array
  const handleAddStudent = (e) => {
    e.preventDefault();
    let existingStudent
    if(newTimetable.StudentsArray.length > 0){
      existingStudent = newTimetable.StudentsArray.find(
        (student) => student.student_Id === newTimetable.student_Id
      );
    }else{
      setNewtimetable({
        ...newTimetable,
        StudentsArray: [
          ...newTimetable.StudentsArray,
          {
            name: newTimetable.name,
            student_Id: newTimetable.student_Id,
          },
        ],
      });
    }
    if(!existingStudent && newTimetable.StudentsArray.length > 0 ){
      setNewtimetable({
        ...newTimetable,
        StudentsArray: [
          ...newTimetable.StudentsArray,
          {
            name: newTimetable.name,
            student_Id: newTimetable.student_Id,
          },
        ],
      });
    }
    console.log(newTimetable)
  };

  
  const DeleteStudent = (id) => {
    setNewtimetable({
      ...newTimetable,
      StudentsArray: newTimetable.StudentsArray.filter(
        (student) => student.student_Id !== id
      ),
    });
  };

  // for time table
  let Name, value;
  const onChangeFunction = (e) => {
    e.preventDefault();
    Name = e.target.name;
    value = e.target.value;
    setNewtimetable({
      ...newTimetable,
      [Name]: value,
    });
    classReducer.map((data) => {
      const { name, _id, class_Category } = data;
      if (_id === value) {
        setCategory(class_Category);
      }
    });
  };

  return {
    // create timatable
    createTimetbale,
    // create Array
    addToArray,
    onChangeFunction,
    // calendar reducer
    State,
    Dispatch,
    createCalendar,
    // student array
    handleAddStudent,
    DeleteStudent,
  };
};

export default TimetableFunc;
