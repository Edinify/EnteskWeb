const reducer = (state = [], action ) =>{
    switch (action.type) {
      case "FETCHTEACHERDATA":
        return action.payload;
      case "CREATETEACHER":
        return [...state, action.payload]
      case "UPDATETEACHER":
        return state.map((teacher) =>(teacher._id === action.payload._id? action.payload: teacher))
      default:
        return state;
    }
  }
  
  export default reducer