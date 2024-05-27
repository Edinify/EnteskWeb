const reducer = (state = [], action ) =>{
    switch (action.type) {
      case "GETTEACHERCALENDARFORADMIN":
        return action.payload;
      case "CREATETEACHERCALENDAR":
        return action.payload;
      case "UPDATECALENDAR":
        return action.payload;
      default:
        return state;
    }
  }
  
  export default reducer