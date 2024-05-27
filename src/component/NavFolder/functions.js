import React from 'react'

const Functions = (
  // log out----
  dispatch
) => {
  
  // log out----
	const logOut = () =>{
		dispatch({ type:"LOGOUT" })
	}


  return{
    // log out----
    logOut
  }
}

export default Functions