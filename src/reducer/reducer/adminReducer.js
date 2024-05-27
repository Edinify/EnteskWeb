const reducer = (state = { authData: null }, action ) =>{
    switch (action.type) {
      case "SIGNIN":
        // console.log(action.payload.token);
        localStorage.setItem("profile", JSON.stringify({...action.payload}))
        return {...state, authData: action.payload}
      case "LOGOUT":
        localStorage.clear();
        // console.log(action.payload)
        return {...state, authData: null}
      default:
        return state;
    }
  }
  
  export default reducer