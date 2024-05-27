import React from "react";

const index = ({ State, createCalendar, Button, Dispatch }) => {
  const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = State;

  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <div style={{ textAlign: "center", width: "100%" }}>
        <p style={{ fontWeight: "bolder", fontSize: " 25px " }}> new </p>
      </div>

      <ul>
        <b>Monday</b>
        {Monday.map((list, i) => {
          Monday.sort( function(a, b) {
            return a.time.localeCompare(b.time);
          })
          const { studentName, time, studentId, Id } = list;
          return (
            <li key={i}>
              <Button
                onClick={() => {
                  Dispatch({
                    type: `SelectMonday`,
                    payload: {
                      studentName,
                      time,
                      weekday: "Monday",
                      studentId,
                      index: i + 1,
                      Id,
                    },
                  });
                }}
              >
                {" "}
                select{" "}
              </Button>
              <p>name: {studentName} </p>
              <p> time: {time} </p>
            </li>
          );
        })}
      </ul>
      <ul>
        <b>Tuesday</b>
        {Tuesday.map((list, i) => {
          Tuesday.sort( function(a, b) {
            return a.time.localeCompare(b.time);
          })
          const { studentName, time, studentId } = list;
          return (
            <li key={i}>
              <Button
                onClick={() => {
                  Dispatch({
                    type: `SelectTuesday`,
                    payload: {
                      studentName,
                      time,
                      weekday: "Tuesday",
                      studentId,
                      index: i + 1,
                    },
                  });
                }}
              >
                {" "}
                select{" "}
              </Button>
              <p>name: {studentName} </p>
              <p> time: {time} </p>
            </li>
          );
        })}
      </ul>
      <ul>
        <b>Wednesday</b>
        {Wednesday.map((list, i) => {
          Wednesday.sort( function(a, b) {
            return a.time.localeCompare(b.time);
          })
          const { studentName, time, studentId } = list;
          return (
            <li key={i}>
              <Button
                onClick={() => {
                  Dispatch({
                    type: `SelectWednesday`,
                    payload: {
                      studentName,
                      time,
                      weekday: "Wednesday",
                      studentId,
                      index: i + 1,
                    },
                  });
                }}
              >
                {" "}
                select{" "}
              </Button>
              <p>name: {studentName} </p>
              <p> time: {time} </p>
            </li>
          );
        })}
      </ul>
      <ul>
        <b>Thursday</b>
        {Thursday.map((list, i) => {
          Thursday.sort( function(a, b) {
            return a.time.localeCompare(b.time);
          })
          const { studentName, time, studentId } = list;
          return (
            <li key={i}>
              <Button
                onClick={() => {
                  Dispatch({
                    type: `SelectThursday`,
                    payload: {
                      studentName,
                      time,
                      weekday: "Thursday",
                      studentId,
                      index: i + 1,
                    },
                  });
                }}
              >
                {" "}
                select{" "}
              </Button>
              <p>name: {studentName} </p>
              <p> time: {time} </p>
            </li>
          );
        })}
      </ul>
      <ul>
        <b>Friday</b>
        {Friday.map((list, i) => {
          Friday.sort( function(a, b) {
            return a.time.localeCompare(b.time);
          })
          const { studentName, time, studentId } = list;
          return (
            <li key={i}>
              <Button
                onClick={() => {
                  Dispatch({
                    type: `SelectFriday`,
                    payload: {
                      studentName,
                      time,
                      weekday: "Friday",
                      studentId,
                      index: i + 1,
                    },
                  });
                }}
              >
                {" "}
                select{" "}
              </Button>
              <p>name: {studentName} </p>
              <p> time: {time} </p>
            </li>
          );
        })}
      </ul>
      <ul>
        <b>Saturday</b>
        {Saturday.map((list, i) => {
          Saturday.sort( function(a, b) {
            return a.time.localeCompare(b.time);
          })
          const { studentName, time, studentId } = list;
          return (
            <li key={i}>
              <Button
                onClick={() => {
                  Dispatch({
                    type: `SelectSaturday`,
                    payload: {
                      studentName,
                      time,
                      weekday: "Saturday",
                      studentId,
                      index: i + 1,
                    },
                  });
                }}
              >
                {" "}
                select{" "}
              </Button>
              <p>name: {studentName} </p>
              <p> time: {time} </p>
            </li>
          );
        })}
      </ul>
      <ul>
        <b>Sunday</b>
        {Sunday.map((list, i) => {
          Sunday.sort( function(a, b) {
            return a.time.localeCompare(b.time);
          })
          const { studentName, time, studentId } = list;
          return (
            <li key={i}>
              <Button
                onClick={() => {
                  Dispatch({
                    type: `SelectSunday`,
                    payload: {
                      studentName,
                      time,
                      weekday: "Sunday",
                      studentId,
                      index: i + 1,
                    },
                  });
                }}
              >
                {" "}
                select{" "}
              </Button>
              <p>name: {studentName} </p>
              <p> time: {time} </p>
            </li>
          );
        })}
      </ul>
      { Monday.length > 0 ||
        Tuesday.length > 0 ||
        Wednesday.length > 0 ||
        Thursday.length > 0 ||
        Friday.length > 0 ||
        Saturday.length > 0 ||
        Sunday.length > 0 ? (
          <Button
            style={{ width: "90%", background: "green", color: "white" }}
            onClick={() => createCalendar()}
          >
            Save
          </Button>
        ):(
          <></>
        ) }
    </div>
  );
};

export default index;
