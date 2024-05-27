const reducer = (state = {students:[], birthDay:[]}, action ) =>{
    const {students} = state
    switch (action.type) {
      case "FETCHSTUDENTDATA":
        return { ...state, students: action.payload.students, birthDay: action.payload.birthDay}
      case "CREATESTUDENT":
        students.push(action.payload)
        return {...state ,students:students}
      case "UPDATESTUDENT":
        return {
          ...state, students: students.map((students) =>(students._id === action.payload._id? action.payload: students))
        }
      case "FETCHBYBIRTHDAY":
        return {...state,birthDay: action.payload }
      default:
        return state;
    }
  }
  
  export default reducer