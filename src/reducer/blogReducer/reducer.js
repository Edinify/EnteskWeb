const reducer = (state = [], action ) =>{
    switch (action.type) {
      case "FETCH_ALL":
        // console.log(state)
        return action.payload;
      case "CREATE":
        console.log(action.payload);
        return [...state, action.payload]
      case "UPDATE":
        console.log(state)
        return state.map((blog) =>(blog.id === action.payload._id? action.payload : blog));
      case "DELETE":
        return state.filter((blog) => blog.id !== action.payload);
      default:
        return state;
    }
  }
  
  export default reducer