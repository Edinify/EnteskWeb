import React from 'react'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


const Option = ({date,name,onChangeFunction,teacher}) => {

 
  return (
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">teacher </InputLabel>
          <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={(e) => {
            onChangeFunction(e);
            // classState(e)
          }}
          name={name}
          value={date}
          >
            {teacher.map((clas, index) => {
              const { name, _id} = clas;
              return (
                <MenuItem key={index} value={_id}>{name}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
  )
}

export default Option