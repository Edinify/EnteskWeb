import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const SelectData = ({
  state,
  name,
  params,
  onChangeFunction,
  select,
  handleAddStudent,
  students,
  DeleteStudent
}) => {
  return (
    <div className="select-div">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          select {`${select}`}{" "}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={(e) => {
            onChangeFunction(e);
          }}
          name={name}
          value={!params ? "" : params}
        >
          {state.map((clas, index) => {
            const { name, _id, status } = clas;
            if (status) {
              return (
                <MenuItem key={index} value={_id}>
                  {name}
                </MenuItem>
              );
            }
          })}
        </Select>
      </FormControl>
      {name === "student_Id" && params && (
        <button onClick={(e) => handleAddStudent(e)}>add student</button>
      )}
      {name === "student_Id" && (
        <div className="students">
          {students.map((student, i) => {
            const { name, student_Id } = student;
            return (
              <p key={i}>
                {" "}
                {name} <span onClick={() => DeleteStudent(student_Id)}  > X </span>{" "}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectData;
