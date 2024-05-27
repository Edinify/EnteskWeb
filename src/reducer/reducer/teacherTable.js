const reducer = (state = {table:[], count:''}, action ) =>{

    switch (action.type) {
      case "GETTEACHERTABLE":
        return { ...state, table: action.payload.tables, count: action.payload.count }
      case "CREATECOMMENT" :
        const {table} = state
        return {
          ...state, table: table.map((teacher) =>(teacher._id === action.payload._id? action.payload: teacher))
        }
      case "SEARCH_BY_DATE_FOR_TEACHER":
        return { ...state, table: action.payload.tables, count: action.payload.count }
      case "CALCULATE":
        return { ...state, table: action.payload.tables, count: action.payload.count }
      case "GETTEACHERCALENDAR":
        return { ...state, table: action.payload.tables,count:0 }
      default:
        return state;
    }
  }
  
  export default reducer