import React from "react";
import Moment from 'react-moment';

const ExistTable = ({Array,teacher, tableData, setId }) => {
  tableData.sort( function(a, b) {
    return a.date.localeCompare(b.date);
  })
  return (
    <>
      {tableData.map((timetable, index) => {

        const {
          StudentsArray,
          teacher_Name,
          class_Name,
          date,
          _id,
          table_State,
          teacher_Id,
          category_name
        } = timetable;
        const time = new Date(date);
        const dates = time.getDate();
        const month = time.getMonth();
        const year = time.getFullYear();
        const hour = time.getHours().toString().length === 1
        ? `0${time.getHours()}`
        : `${time.getHours()}`
        const minute = time.getUTCMinutes().toString().length === 1
        ? `0${time.getUTCMinutes()}`
        : `${time.getUTCMinutes()}`

        // console.log( time.getUTCHours() < time.getHours() )
        // console.log( date )
        if(teacher_Id === teacher){
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
                  <b>category:</b>{category_name}
                </p>
                <p>
                  <b>date:</b> {year}/
                  {month.toString().length === 1 ? `0${month + 1}` : month + 1}/
                  {dates.toString().length === 1 ? `0${dates }` : dates }
                </p>
                <p>
                  <b>time:</b>
                  <Moment format="HH:mm " utc>{date}</Moment>
                </p>
                <p>
                  <b>class state</b>
                  {table_State === 0 ? (
                    <span> tesdiq olunmamis </span>
                  ) : (
                    <span></span>
                  )}
                </p>
                <button
                  onClick={() => {
                    setId(_id);
                  }}
                >
                  update
                </button>
              </div>
            </div>
          );
        }
        
      })}
    </>
  );
};

export default ExistTable;
