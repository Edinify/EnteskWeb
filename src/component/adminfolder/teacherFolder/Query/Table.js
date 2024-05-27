import React, { useEffect, useState } from "react";
import Studentinfo from "./Studentinfo";
import Moment from "react-moment";

const Table = ({
  State,
  ReturnParms,
  count,
  table,
  Query,
  setQuery,
  dispatch,
  searchByDateForTeacher,
  number,
  getLimit,
}) => {
  const { Return, setReturn } = ReturnParms;
  const { id, setId } = State;

  const [CountDate, setCountDate] = useState("");
  let studentData = table.filter((data) => data._id === id);

  const weekday = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [separatedData, setSeparatedData] = useState({});

  useEffect(() => {
    const separator = table.reduce((acc, curr) => {
      const { StudentsArray, date } = curr;
      const newDate = new Date(date);
      const day = newDate.toLocaleString("default", { weekday: "long" });
      if (acc[day]) {
        acc[day].push(curr);
      } else {
        acc[day] = [curr];
      }
      return acc;
    }, {});
    setSeparatedData(separator);
  }, [table]);

  Object.keys(separatedData).map(
    (day) => (
      separatedData[day].map((entry, index) => console.log(entry.student_Name))
    )
  );

  useEffect(() => {
    if (Query.skip === 1) {
      setCountDate(count);
    }
    dispatch(searchByDateForTeacher(Query));
  }, [count]);

  // sorting data
  table.sort(function (a, b) {
    return a.date.localeCompare(b.date);
  });

  return (
    <div style={{ overflow: "auto" }}>
      {Return >= 2 ? (
        <>
          {studentData.length > 0 && <Studentinfo studentData={studentData} />}
        </>
      ) : (
        <>
          {/* for desktop */}
          {table.length > 0 &&
            Object.keys(separatedData).map((day, i) => {
              return (
                <div key={i}>
                  <p> {day} </p>
                  <table>
                    <tbody>
                      <tr>
                        {/* <th> {day} </th> */}
                        <th>Name</th>
                        <th>Time</th>
                        <th>date</th>
                        <th>Class Name</th>
                        <th>category info</th>
                        <th>Select Student</th>
                      </tr>
                      {separatedData[day].map((data, i) => {
                        const {
                          StudentsArray,
                          date,
                          class_Name,
                          _id,
                          category_name,
                        } = data;
                        const lessonDate = new Date(date);
                        return (
                          <tr key={i}>
                            <td> 
                              {
                                StudentsArray.map((student,i) =>{
                                  const {name} = student
                                  return(
                                    <b key={i} > {name}, </b>
                                  )
                                })
                              } 
                            </td>
                            <td>
                              {" "}
                              <Moment format="HH:mm " utc>
                                {date}
                              </Moment>{" "}
                            </td>

                            <td>
                              {" "}
                              {lessonDate.getMonth().toString().length === 1
                                ? `0${lessonDate.getMonth() + 1}`
                                : lessonDate.getMonth() + 1}
                              /
                              {lessonDate.getDate().toString().length === 1
                                ? `0${lessonDate.getDate()}`
                                : lessonDate.getDate()}{" "}
                            </td>
                            <td> {class_Name} </td>
                            <td> {category_name} </td>
                            <td>
                              <button
                                onClick={() => {
                                  setId(_id);
                                  setReturn(Return + number);
                                }}
                              >
                                select
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            })}
          {/* for mobile */}

          <div className="mobile-box">
            {table.length > 0 &&
              
              Object.keys(separatedData).map((day) => {
                return (
                  
                  <div>
                    <p> {day} </p>
                    <div>
                      {separatedData[day].map((data, i) => {
                        const {
                          student_Name,
                          date,
                          class_Name,
                          _id,
                          category_name,
                        } = data;
                        const lessonDate = new Date(date);

                        return (
                          <div key={i}>
                            <p>
                              {" "}
                              <b> Name : </b> {student_Name}{" "}
                            </p>
                            <p>
                              {" "}
                              <b> Time : </b>{" "}
                              <Moment format="HH:mm ">{date}</Moment>{" "}
                            </p>
                            <p>
                              {" "}
                              <b> date : </b>{" "}
                              {lessonDate.getMonth().toString().length === 1
                                ? `0${lessonDate.getMonth() + 1}`
                                : lessonDate.getMonth() + 1}
                              /
                              {lessonDate.getDate().toString().length === 1
                                ? `0${lessonDate.getDate()}`
                                : lessonDate.getDate()}{" "}
                            </p>
                            <p>
                              {" "}
                              <b> Class Name : </b> {class_Name}{" "}
                            </p>
                            <p>
                              {" "}
                              <b> category info : </b> {category_name}{" "}
                            </p>
                            <button
                              onClick={() => {
                                setId(_id);
                                setReturn(Return + number);
                              }}
                            >
                              select
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
              // table.map((data,i) =>{

              //   const {student_Name,date,class_Name,_id, category_name} = data
              //   const lessonDate = new Date(date)

              //   return(
              //     <div key={i} >
              //       <p> <b> Name : </b>   {student_Name} </p>
              //       <p> <b> Time : </b> <Moment format="HH:mm ">{date}</Moment> </p>
              //       <p> <b> date : </b> {lessonDate.getMonth().toString().length === 1 ? `0${lessonDate.getMonth() + 1}` :  lessonDate.getMonth() + 1}/
              //         {lessonDate.getDate().toString().length === 1 ? `0${lessonDate.getDate()}` :  lessonDate.getDate()} </p>
              //       <p> <b> Class Name : </b> {class_Name} </p>
              //       <p> <b> category info : </b> {category_name} </p>
              //       <button onClick={() => {
              //           setId(_id)
              //           setReturn(Return + number)
              //         } } >
              //           select
              //       </button>
              //     </div>
              //   )
              // })
            }
          </div>
          {CountDate >= 6 && (
            <button
              onClick={(e) => {
                setQuery({
                  ...Query,
                  skip: Query.skip + 1,
                });
                setCountDate(CountDate - 5);
                getLimit();
              }}
            >
              next
            </button>
          )}
          {Query.skip !== 1 && (
            <button
              onClick={(e) => {
                setQuery({
                  ...Query,
                  skip: Query.skip - 1,
                });
                setCountDate(CountDate + 5);
                getLimit();
              }}
            >
              prev
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Table;
