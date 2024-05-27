import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CreateTeacher,
  UpdateTeacher,
  GetTeacher,
} from "../../../../../reducer/crmRedux/action";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const Classes = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    status: "",
    salary: 0,
  });
  const [id, setId] = useState({});
  const dispatch = useDispatch();
  const state = useSelector((state) => state.teacherReducer);
  
  // get teacher
  useEffect(() => {
    dispatch(GetTeacher());
  }, []);

  // select update teacher
  useEffect(() => {
    state.map((classes) => {
      const { _id } = classes;
      if (_id === id.id) {
        setData(classes);
      }
    });
  }, [id]);

  // create and update teacher
  const createTeacher = (e) => {
    if (id.id) {
      dispatch(UpdateTeacher(id.id, data));
      setData({
        name: "",
        email: "",
        password: "",
        status: "",
        salary: "",
      });
    } else {
      if (data.email && data.name && data.password && data.status) {
        dispatch(CreateTeacher(data));
        setData({
          name: "",
          email: "",
          password: "",
          status: "",
          salary: "",
        });
        Swal.fire({
          color: "green",
          text: "Great",
          timer: 1000,
        });
      } else {
        Swal.fire({
          color: "red",
          text: "please complete form",
          timer: 1000,
        });
      }
    }
  };

  return (
    <>
      <div className="col-md-12">
        <div className=" create-admin create-teacher">
          <p>create teacher</p>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="name"
              type="text"
              variant="outlined"
              value={data.name}
              onChange={(e) => {
                setData({
                  ...data,
                  name: e.target.value,
                });
              }}
            />
            <TextField
              label="email"
              type="email"
              variant="outlined"
              value={data.email}
              onChange={(e) => {
                setData({
                  ...data,
                  email: e.target.value,
                });
              }}
            />
            <TextField
              label="password"
              type="password"
              variant="outlined"
              value={data.password}
              onChange={(e) => {
                setData({
                  ...data,
                  password: e.target.value,
                });
              }}
            />
            <TextField
              label="salary"
              type="number"
              variant="outlined"
              value={data.salary}
              onChange={(e) => {
                setData({
                  ...data,
                  salary: e.target.value,
                });
              }}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                select
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={(e) => {
                  setData({
                    ...data,
                    status: parseInt(e.target.value),
                  });
                }}
                value={data.status}
                label="status"
              >
                <MenuItem value="0">inactive</MenuItem>
                <MenuItem value="1">active</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="outlined"
              onClick={() => {
                createTeacher();
              }}
            >
              {id.id ? <span>update</span> : <span>create</span>}
            </Button>
          </Box>
        </div>
      </div>
      {state.map((teacher, index) => {
        const { name, _id, email, status, salary } = teacher;

        return (
          <div key={_id} className="col-md-4">
            <div className="info-table">
              <p>
                {" "}
                <b>Teacher name:</b> {name}
              </p>
              <p>
                {" "}
                <b>Email:</b> {email}{" "}
              </p>
              <p>
                {" "}
                <b>salary:</b> {salary}{" "}
              </p>
              <p>
                {" "}
                <b> status: </b>{" "}
                {status === 1 ? <span>active</span> : <span>inactive</span>}
              </p>
              <button
                onClick={() => {
                  setId({ id: _id });
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

export default Classes;
