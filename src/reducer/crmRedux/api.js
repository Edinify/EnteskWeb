import axios from 'axios'


// http://localhost:5000/ https://enteskcrmserver.azurewebsites.net/
const API = axios.create({ baseURL: 'https://enteskcrmserver.azurewebsites.net/' });


// token

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});


// get all data 

export const getAlldata = (id) =>{

  return API.get(`/admin/${id}`)
}


export const SigninAdmin = (data) =>{
  return API.post(`/admin/signIn`,data )
}



// create update delete get class

export const getClass = () =>{

  return API.get('/class')
}

export const createClass = (data) =>{

  return API.post('/class', data)
}

export const updateClass = (id, data) =>{

  return API.patch(`/class/${id}`, data)
}

export const addCategory = (id, data) =>{

  return API.patch(`/class/addCategory/${id}`, data)
}

export const deleteClass = (id) =>{

  return API.delete(`/class/${id}`)
}

// create, update get teacher

export const getTeacher = () =>{

  return API.get('/teachers')
}

export const createTeacher = (data) =>{

  return API.post('/teachers/register', data)
}

export const updateTeacher = (id, data) =>{

  return API.patch(`/teachers/${id}`, data)
}



//  get post teacher search

export const getTeacherTable = (data) =>{
  return API.get(`/teacher?limit=${data.limit}&skip=${data.skip}`)
}

export const getTeacherCalendar = (id) =>{
  return API.get('/teacher/calendar', id)
}



export const createComment = (data) =>{
  return API.put('/teacher/addComment',data)
}

export const SearchByDateForTeacher = (search) =>{
  return API.get(
    `/teacher/search?startDate=${search.from}&endDate=${search.to}&state=${search.state}&limit=${search.limit}&skip=${search.skip}`
    )
}


export const calculate = (data) =>{
  return API.get(
    `/teacher/calculate?startDate=${data.from}&endDate=${data.to}&state=${data.state}&limit=${data.limit}&skip=${data.skip}`
    )
}
// create, update get  student

export const getStudent = () =>{

  return API.get('/student')
}

export const createStudent = (data) =>{

  return API.post('/student', data)
}

export const updateStudent = (id, data) =>{
  return API.patch(`/student/${id}`, data)
}

export const fetchByBirthday = () =>{
  return API.get(`/student/birthDay`)
}

// admin calendar get post 

export const createTeacherCalendar = (data) =>{
  return API.post('/calendar/create', data)
}

export const getCalendar = (id) =>{
  return API.get(`/calendar/${id}`)
}


export const updateCalendar = (data) =>{
  return API.patch('/calendar/', data)
}
// Timetable create get update



export const getTimetable = () => {

  return API.get('/timeTable')
}

export const createTimetable = (data) =>{

  return API.post('/timeTable', data)
}

export const updateTimetable = (data,id) =>{

  return API.patch(`/timeTable/${id}`, data)
}


export const SearchByDate = (search) =>{
  return API.get(
    `/timeTable/search?startDate=${search.from}&endDate=${search.to}&teacher_Id=${search.teacher_Id}&student_Name=${search.student_Name}&table_State=${search.table_State}`
    )
}

export const ConfirmOrCancel = (id,data) =>{
  return API.patch(`/timeTable/state/${id}`,data)
} 

export const DeleteStudentFromTable = (id,student_Id) =>{
  return API.patch(`/timeTable/student/${id}`,{student_Id: student_Id})
} 