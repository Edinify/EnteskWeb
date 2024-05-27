import {
    createTimetable,
    SigninAdmin, 
    getAlldata, 
    createClass, 
    updateClass,
    getClass, 
    deleteClass,
    addCategory,
    getTeacher,
    createTeacher,
    updateTeacher,
    getStudent,
    createStudent,
    updateStudent,
    fetchByBirthday,
    getTimetable,
    updateTimetable,
    getTeacherTable,
    getTeacherCalendar,
    createComment,
    SearchByDate,
    ConfirmOrCancel,
    SearchByDateForTeacher,
    calculate,
    createTeacherCalendar,
    getCalendar,
    updateCalendar,
    DeleteStudentFromTable
  } from './api'
  import Swal from 'sweetalert2'
  
  
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  })
  
  // admin  get, create, update, delete 
  
  export const SignInAdmin = (adminData,navigate) => async (dispatch) => {
    // console.log(router)
    try {
      const { data } = await SigninAdmin(adminData);
  
      dispatch({ type: "SIGNIN", payload: data });
  
      if(data.superAdmin.role === 1){
        navigate('/adminTimetable')
      }else if(data.superAdmin.role === 0) {
        navigate('/teacher')
      }
  
    } catch (error) {
  
      error.response ? (
        Toast.fire({
          icon: 'warning',
          title: `${error.response.data.msg}`,
          color: "red"
        })
      ):(
        Toast.fire({
          icon: 'warning',
          title: 'Network Error',
          text:'İnternet əlaqəsi yoxdur !',
          color: "red"
        })
      )
  
    }
  };
  
  export const getData = (id) =>  async (dispatch) =>{
  
    try {
      const {data} = await getAlldata(id)
  
      dispatch({type:"FETCHDATA", payload:data})
    } catch (error) {
      console.log(error.message)
    }
  }
  
  
  // Class create update delete get
  
  export const GetClass = ()=> async(dispatch) =>{
  
    try {
      const {data} = await getClass()
      // console.log(data)
      dispatch({type:"FETCHCLASSDATA", payload:data})
    } catch (error) {
      console.log(error.message)
    }
  }
  
  export const CreateClass= (classData) => async (dispatch) =>{
  
    try {
      const {data} = await createClass(classData)
      console.log(data)
      dispatch({type:"CREATECLASS", payload: data})
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export const UpdateClass= (id,classData) => async (dispatch) =>{
  
    try {
      const {data} = await updateClass(id,classData)
      dispatch({type:"UPDATECLASS", payload: data})
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export const AddCategory = (id,classData) => async (dispatch) =>{
    try {
      const {data} = await addCategory(id,classData)
      dispatch({type:"ADDCATEGORY", payload: data})
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export const DeleteClass = (id) => async (dispatch)  => {
  
    try {
      console.log(id)
      const {data} = await deleteClass(id)
  
      dispatch({type: "DELETECLASS" , payload:id})
    } catch (error) {
      console.log(error.message);
    }
  }
  
  
  // Teacher create update  get
  
  export const GetTeacher = ()=> async(dispatch) =>{
  
    try {
      const {data} = await getTeacher()
      dispatch({type:"FETCHTEACHERDATA", payload:data})
    } catch (error) {
      console.log(error.message)
      error.response.data.message &&  localStorage.clear(); 
    }
  }
  
  export const CreateTeacher= (teacherData) => async (dispatch) =>{
  
    try {
      const {data} = await createTeacher(teacherData)
      console.log(data)
      dispatch({type:"CREATETEACHER", payload: data})
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export const UpdateTeacher = (id,teacherData) => async (dispatch) =>{
  
    try {
      const {data} = await updateTeacher(id,teacherData)
      console.log(data)
      dispatch({type:"UPDATETEACHER", payload: data})
    } catch (error) {
      console.log(error.message);
    }
  }
  
  //  get post teacher search
  
  export const GetTeacherTable = (id) => async (dispatch) =>{
  
  
    try {
      const {data} = await getTeacherTable(id)
      dispatch({type:"GETTEACHERTABLE", payload:data})
    } catch (error) {
      console.log(error.message);
      error.response.data.message &&  localStorage.clear(); 
    }
  }
  
  export const GetTeacherCalendar = () => async (dispatch) =>{
    try {
      const {data} = await getTeacherCalendar()
  
      dispatch({type:"GETTEACHERCALENDAR", payload:data})
    } catch (error) {
      console.log(error.message);
      error.response.data.message &&  localStorage.clear(); 
    }
  }
  
  // calendar for admin 
  export const CreateTeacherCalendar = (Data) => async (dispatch) =>{
    try {
      const {data} = await createTeacherCalendar(Data)
  
      dispatch({type:"CREATETEACHERCALENDAR", payload:data})
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export const GetCalendar = (id) => async (dispatch) =>{
    try {
      const {data} = await getCalendar(id)
      dispatch({type:"GETTEACHERCALENDARFORADMIN", payload:data})
    } catch (error) {
      console.log(error.message);
      error.response.data.message &&  localStorage.clear(); 
    }
  }
  
  
  export const UpdateCalendar = (Data) => async (dispatch) =>{
    try {
      const {data} = await updateCalendar(Data)
      dispatch({type:"UPDATECALENDAR", payload:data})
    } catch (error) {
      console.log(error.message);
    }
  }
  
  
  export const CreateComment = (comment) => async (dispatch)  =>{
    try {
      const {data} = await createComment(comment)
  
      // console.log(data)
      dispatch({type:"CREATECOMMENT", payload:data })
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export const searchByDateForTeacher = (search) => async (dispatch)  =>{
    try {
      const {data} = await SearchByDateForTeacher(search)
      dispatch({type:"SEARCH_BY_DATE_FOR_TEACHER", payload:data })
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export const Calculate = (search) => async (dispatch)  =>{
    try {
      console.log(search)
      const {data} = await calculate(search)
      dispatch({type:"CALCULATE", payload:data })
    } catch (error) {
      console.log(error.message);
    }
  }
  
  // Student create update get
  
  export const GetStudent = ()=> async(dispatch) =>{
  
    try {
      const {data} = await getStudent()
  
      dispatch({type:"FETCHSTUDENTDATA", payload:data})
    } catch (error) {
      console.log(error.message)
      error.response.data.message &&  localStorage.clear(); 
    }
  }
  
  export const CreateStudent = (studentData) => async (dispatch) =>{
  
    try {
      const {data} = await createStudent(studentData)
      console.log(data)
      dispatch({type:"CREATESTUDENT", payload: data})
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export const UpdateStudent = (id,studentData) => async (dispatch) =>{
  
    try {
      const {data} = await updateStudent(id,studentData)
      console.log(data)
      dispatch({type:"UPDATESTUDENT", payload: data})
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export const FetchByBirthday = () => async (dispatch) =>{
  
    try {
      const {data} = await fetchByBirthday()
      dispatch({type:"FETCHBYBIRTHDAY", payload: data})
    } catch (error) {
      console.log(error.message);
    }
  }
  
  // Timetable create update get
  
  
  export const GetTimetable = () => async (dispatch)=>{
  
  
    try {
  
      const {data} = await getTimetable()
  
      dispatch({type:"FETCHTIMETABLE", payload: data })
    } catch (error) {
  
    }
  }
  
  export const CreateTimetable = (timetableData) => async (dispatch) =>{
  
    try {
  
      const {data} = await createTimetable(timetableData)
      dispatch({type:"CREATETIMETABLE", payload:data})
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export const UpdateTimetable = (timetableData, id) => async (dispatch) =>{
  
    try {
      const {data} = await updateTimetable(timetableData, id)
  
      dispatch({type:"UPDATETIMETABLE", payload:data})
    } catch (error) {
      alert(error.response.data.msg);
    }
  }
  
  
  export const searchByDate = (search,setSearch) => async (dispatch) =>{
    try {
      const {data} = await SearchByDate(search);
      data && setSearch(true)
      dispatch({type:"FETCHBYSEARCH", payload:data})
    } catch (error) {
      alert(error.response.data.msg)
    }
  }
  
  export const confirmOrCancel = (id,Confirmdata) => async (dispatch) =>{
  
    try {
      const {data} = await ConfirmOrCancel(id,Confirmdata);
      console.log(data)
      dispatch({type:'ConfirmOrCancel', payload:data})
    } catch (error) {
      console.log(error.message); 
    }
  }
  
  export const deleteStudentFromTable = (id,studentId) => async (dispatch) =>{
  
    try {
      const {data} = await DeleteStudentFromTable(id,studentId);
      console.log(data)
      dispatch({type:'UPDATETIMETABLE', payload:data})
    } catch (error) {
      console.log(error.message); 
    }
  }
  