const reducer = (state = [], action ) =>{
    switch (action.type) {
      case "FETCHBYSEARCH":
        // console.log(state);
        return  action.payload 
      default:
        return state;
    }
  }
  
  export default reducer