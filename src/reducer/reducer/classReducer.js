const reducer = (state = [], action ) =>{
    switch (action.type) {
      case "FETCHCLASSDATA":
        // console.log(state);
        return action.payload;
      case "CREATECLASS":
        console.log(state)
        return [...state, action.payload]
      case "UPDATECLASS":
        return state.map((clas) =>(clas._id === action.payload._id? action.payload: clas))
      case "DELETECLASS":
        console.log(action.payload)
        return state.filter((clas) => clas._id !== action.payload)
      case 'ADDCATEGORY':
        return state.map((clas) =>(clas._id === action.payload._id? action.payload: clas))
      default:
        return state;
    }
  }
  
  export default reducer