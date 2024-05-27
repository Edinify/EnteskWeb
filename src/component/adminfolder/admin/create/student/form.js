import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const Form = ({ teacher, setData, data }) => {


  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <p>create Student</p>
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
        // label="age"
        type="date"
        variant="outlined"
        value={data.age}
        onChange={(e) => {
          setData({
            ...data,
            age: e.target.value,
          });
        }}
      />

      <TextField
        label="Parent Name"
        type="text"
        variant="outlined"
        value={data.ParentName}
        onChange={(e) => {
          setData({
            ...data,
            ParentName: e.target.value,
          });
        }}
      />
      <TextField
        label="Phone number"
        type="number"
        variant="outlined"
        value={data.PhoneNumber}
        onChange={(e) => {
          setData({
            ...data,
            PhoneNumber: e.target.value,
          });
        }}
      />
      <TextField
        label="Gmail"
        type="email"
        variant="outlined"
        value={data.Email}
        onChange={(e) => {
          setData({
            ...data,
            Email: e.target.value,
          });
        }}
      />
      <TextField
        label="Class Amount"
        type="number"
        variant="outlined"
        value={data.ClassAmount}
        onChange={(e) => {
          setData({
            ...data,
            ClassAmount: parseInt(e.target.value),
          });
        }}
      />
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">select</InputLabel>
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
      
    </Box>
  );
};

export default Form;
