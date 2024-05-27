import React, { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


const SelectData = ({ state, name, params, onChangeFunction,setCategory,select }) => {
  

  return (
    <>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">select {`${select}`}  </InputLabel>
        <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        onChange={(e) => {
          onChangeFunction(e);
        }}
        name={name}
        value={params}
        >
          {state.map((clas, index) => {
            const { name, _id} = clas;
            
            return (
              <MenuItem key={index} value={_id}>{name}</MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectData;
