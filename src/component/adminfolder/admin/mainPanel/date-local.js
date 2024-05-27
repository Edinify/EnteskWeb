import React,{useState} from 'react'
import TextField from '@mui/material/TextField';


const DateLocal = ({type,name,onChangeFunction}) => {

  return (
    <>
      <TextField
        // label="Multiline Placeholder"
        placeholder='sd'
        type='datetime-local'
        name={name}
        onChange={(e) => {
          onChangeFunction(e)
        }}
        variant="outlined"
      />
      </>
  )
}

export default DateLocal