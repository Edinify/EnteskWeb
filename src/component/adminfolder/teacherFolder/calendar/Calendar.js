import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetTeacherCalendar } from "../../../../reducer/crmRedux/action";
import Swal from "sweetalert2";


const Calendar = () => {
  const dispatch = useDispatch();
  const [boolean, setBoolean] = useState(false);
  const [Query, setQuery] = useState({
    from: "",
    to: "",
    state: 0,
  });

  const table = useSelector((state) => state.teachertable.table);

  setTimeout(() => {
    setBoolean(true);
  }, 3000);

  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  useEffect(() => {
    let date = new Date();
    Query.from = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    setTimeout(() => {
      // Toast.fire({
      //   icon: "success",
      //   title: "Loading ...",
      // });
    }, 500);

    dispatch(GetTeacherCalendar());
  }, []);

  const {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday,Sunday} = table

  const sortFunction = (weekday) =>{
    console.log(weekday)
    weekday.sort( function(a, b) {
      return a.time.localeCompare(b.time);
    })
  }
  
  useEffect(() => {

    if(table._id){
      sortFunction(Monday)
      sortFunction(Tuesday)
      sortFunction(Wednesday)
      sortFunction(Thursday)
      sortFunction(Friday)
      sortFunction(Saturday)
      sortFunction(Sunday)
    }
  }, [table._id])
  

  const [tables, setTables] = useState([
  ]);



  return (
    <article className="Calendar-section">
      <>
      {
        table._id  && (
          <>
            <ul>
              <b>Monday</b>
              {Monday.map((list, i) => {
                const { studentName, time, studentId } = list;
                return (
                  <li key={i}>
                    <p>name: {studentName} </p>
                    <p> time: {time} </p>
                  </li>
                );
              })}
            </ul>

            <ul>
              <b>Tuesday</b>
              {Tuesday.map((list, i) => {
                const { studentName, time, studentId } = list;
                return (
                  <li key={i}>
                    <p>name: {studentName} </p>
                    <p> time: {time} </p>
                  </li>
                );
              })}
            </ul>

            <ul>
              <b>Wednesday</b>
              {Wednesday.map((list, i) => {
                const { studentName, time, studentId } = list;
                return (
                  <li key={i}>
                    <p>name: {studentName} </p>
                    <p> time: {time} </p>
                  </li>
                );
              })}
            </ul>

            <ul>
              <b>Thursday</b>
              {Thursday.map((list, i) => {
                const { studentName, time, studentId } = list;
                return (
                  <li key={i}>
                    <p>name: {studentName} </p>
                    <p> time: {time} </p>
                  </li>
                );
              })}
            </ul>

            <ul>
              <b>Friday</b>
              {Friday.map((list, i) => {
                const { studentName, time, studentId } = list;
                return (
                  <li key={i}>
                    <p>name: {studentName} </p>
                    <p> time: {time} </p>
                  </li>
                );
              })}
            </ul>

            <ul>
              <b>Saturday</b>
              {Saturday.map((list, i) => {
                const { studentName, time, studentId } = list;
                return (
                  <li key={i}>
                    <p>name: {studentName} </p>
                    <p> time: {time} </p>
                  </li>
                );
              })}
            </ul>

            <ul>
              <b>Sunday</b>
              {Sunday.map((list, i) => {
                const { studentName, time, studentId } = list;
                return (
                  <li key={i}>
                    <p>name: {studentName} </p>
                    <p> time: {time} </p>
                  </li>
                );
              })}
            </ul>
          </>
        )
      }
        <div className="mobile-box">
          {
            table._id  && (
              <>
              <ul>
                <b>Monday</b>
                {Monday.map((list, i) => {
                  const { studentName, time, studentId } = list;
                  return (
                    <li key={i}>
                      <p>name: {studentName} </p>
                      <p> time: {time} </p>
                      <hr />
                    </li>
                  );
                })}
              </ul>

              <ul>
              <b>Tuesday</b>
              {Tuesday.map((list, i) => {
                const { studentName, time, studentId } = list;
                return (
                  <li key={i}>
                    <p>name: {studentName} </p>
                    <p> time: {time} </p>
                    <hr />
                  </li>
                );
              })}
              </ul>

              <ul>
              <b>Wednesday</b>
              {Wednesday.map((list, i) => {
                const { studentName, time, studentId } = list;
                return (
                  <li key={i}>
                    <p>name: {studentName} </p>
                    <p> time: {time} </p>
                    <hr />
                  </li>
                );
              })}
              </ul>

              <ul>
              <b>Thursday</b>
              {Thursday.map((list, i) => {
                const { studentName, time, studentId } = list;
                return (
                  <li key={i}>
                    <p>name: {studentName} </p>
                    <p> time: {time} </p>
                    <hr />
                  </li>
                );
              })}
              </ul>

              <ul>
              <b>Friday</b>
              {Friday.map((list, i) => {
                const { studentName, time, studentId } = list;
                return (
                  <li key={i}>
                    <p>name: {studentName} </p>
                    <p> time: {time} </p>
                    <hr />
                  </li>
                );
              })}
              </ul>

              <ul>
              <b>Saturday</b>
              {Saturday.map((list, i) => {
                const { studentName, time, studentId } = list;
                return (
                  <li key={i}>
                    <p>name: {studentName} </p>
                    <p> time: {time} </p>
                    <hr />
                  </li>
                );
              })}
              </ul>

              <ul>
              <b>Sunday</b>
              {Sunday.map((list, i) => {
                const { studentName, time, studentId } = list;
                return (
                  <li key={i}>
                    <p>name: {studentName} </p>
                    <p> time: {time} </p>
                    <hr />
                  </li>
                );
              })}
              </ul>
            </>
            )

          }
          
        </div>
      </>
    </article>
  );
};

export default Calendar;
