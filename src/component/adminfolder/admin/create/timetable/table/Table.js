import React from "react";
import Moment from 'react-moment';


const Table = ({setNewtimetable,tableData,newTimetable,setId }) => {
  tableData.sort( function(a, b) {
    return a.date.localeCompare(b.date);
  })
  return (
    <>
      {tableData.map((timetable, index) => {
        
        const {
          teacher_Name,
          class_Name,
          class_Id,
          date,
          category_name,
          StudentsArray
        } = timetable;
        const time = new Date(date);
        const dates = time.getDate();
        const month = time.getMonth();
        const year = time.getFullYear();

        
          return (
            <div key={index} className="col-md-4">
              <div className="info-table">
                <p>
                  <b>teacher:</b> {teacher_Name}
                </p>
                <p>
                  <b> Student: </b> 
                  {
                    StudentsArray.map((student,i) =>{
                      const {name} = student
                      return(
                        <span key={i} > {name}, </span>
                      )
                    })
                  }
                </p>
                <p>
                  <b>class:</b> {class_Name}
                </p>
                <p>
                  <b>category:</b> {category_name}
                </p>
                <p>
                  <b>date:</b> {year}/
                  {month.toString().length === 1 ? `0${month + 1}` : month + 1}/
                  {dates.toString().length === 1 ? `0${dates }` : dates }
                </p>
                <p>
                  <b>time:</b>
                  <Moment format="HH:mm " >{time}</Moment>
                  {/* { moment().format(` ${time.getUTCHours()}:${time.getUTCMinutes()}`) } */}
                  {/* { moment().format(` ${time.getHours()}:${time.getMinutes()}`) } */}
                  {/* {`${
                    time.getHours().toString().length === 1
                      ? `0${time.getHours()}`
                      : `${time.getHours()}`
                  }
                    :${
                      time.getUTCMinutes().toString().length === 1
                        ? `0${time.getUTCMinutes()}`
                        : `${time.getUTCMinutes()}`
                    }`} */}
                </p>
                <button
                  onClick={() => {
                    setNewtimetable({
                      ...newTimetable,
                      StudentsArray,
                      class_Name,
                      date,
                      class_Id,
                      category_name,
                      index:index,
                      condition:true
                    })
                  }}
                >
                  update
                </button>
              </div>
            </div>
          );
        
      })}
    </>
  );
};

export default Table;
