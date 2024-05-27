import React from "react";

const TimeTableForm = ({
  Box,
  Array,
  SelectData,
  SelectClass,
  Select,
  newTimetable,
  Category,
  FormControl,
  InputLabel,
  MenuItem,
  id,
  Button,
  state,
  onChangeFunction,
  TextField,
  addToArray,
  createTimetbale,
  handleAddStudent,
  DeleteStudent
}) => {

  
  return (
    <>
      <div className=" create-admin create-data">
        <p> create Timetable</p>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {/* select teacher  */}
          {Array.length === 0 && (
            <SelectData
              state={state.teacherReducer}
              name={"teacher_Id"}
              params={newTimetable.teacher_Id}
              onChangeFunction={onChangeFunction}
              select={"Teacher"}
            />
          )}

          {/* select student */}
          {newTimetable.teacher_Id ? (
            <SelectData
              state={state.studentReducer.students}
              name={"student_Id"}
              params={newTimetable.student_Id}
              onChangeFunction={onChangeFunction}
              select={"Student"}
              handleAddStudent={handleAddStudent}
              students={newTimetable.StudentsArray}
              DeleteStudent={DeleteStudent}
            />
          ) : (
            <></>
          )}
          {/* select class */}
          {newTimetable.teacher_Id ? (
            <>
              <SelectClass
                state={state.classReducer}
                name={"class_Id"}
                params={newTimetable.class_Id}
                onChangeFunction={onChangeFunction}
                select={"Class"}
              />
            </>
          ) : (
            <></>
          )}
          {Category.length > 0 && (
            <>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  select category{" "}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  name="category_name"
                  value={newTimetable.category_name}
                  onChange={(e) => {
                    onChangeFunction(e);
                  }}
                >
                  {Category.map((name, i) => {
                    return (
                      <MenuItem key={i} value={name}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </>
          )}
          {/* set date */}
          {newTimetable.teacher_Id ? (
            <TextField
              // label="age"
              variant="outlined"
              type="datetime-local"
              name={"date"}
              value={newTimetable.date || "YY-MM-DD"}
              onChange={(e) => {
                onChangeFunction(e);
              }}
            />
          ) : (
            <></>
          )}
          {!id && (
            <Button
              onClick={(e) => {
                addToArray(e);
              }}
            >
              {newTimetable.condition === true ? (
                <span>Update</span>
              ) : (
                <span>Create</span>
              )}
            </Button>
          )}

          {id ? (
            <Button
              onClick={(e) => {
                e.preventDefault();
                createTimetbale(e);
              }}
            >
              update exist table
            </Button>
          ) : (
            <></>
          )}
        </Box>
      </div>
    </>
  );
};

export default TimeTableForm;
