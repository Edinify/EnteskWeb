import React from 'react'
import TextField from '@mui/material/TextField';


const Textfield = ({type,name,onChangeFunction,date}) => {
  return (
      <TextField 
        label={`select ${name}`}
        type={type}
        name={name}
        onChange={(e) => {
          onChangeFunction(e)
        }} id="filled-basic"  variant="outlined" />
  )
}

export default Textfield