import React, {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { 
  CreateStudent, 
  UpdateStudent,
  GetStudent,
  FetchByBirthday,
  GetTimetable
} from '../../../../../reducer/crmRedux/action';
import Functions from './functions';
import Swal from 'sweetalert2'
import Form from './form';
import BirthDay from './birthDay';
import Student from './student';
import Button from '@mui/material/Button'


const Classes = () => {
  const [data, setData] = useState({
    name:"",
    age:'',
    ParentName:'',
    PhoneNumber:'',
    Email:'',
    ClassAmount:'',
    status:'',
  })
  
  const [id, setId] = useState({})
  const dispatch = useDispatch();
  const state = useSelector((state) => state.studentReducer.students);
  const render = useSelector((state) => state.studentReducer);
  const birthDay = useSelector((state) => state.studentReducer.birthDay);
  const teacher = useSelector((state) => state.teacherReducer);

  const {createStudent}= Functions(
    // get student
    dispatch,
    GetStudent,
    // get birthDay
    render,
    // select update student
    state,
    id,
    setData,
    // create and update student
    Swal,
    data,
    UpdateStudent,
    CreateStudent,
    // get birth day
    FetchByBirthday,
    GetTimetable,
    // 
    teacher
    )
  return (
    <>

      <div className="col-md-12">
        <div className="create-admin  create-student">
          <BirthDay birthDay={birthDay} state={state} />
            <Form teacher={teacher} setData={setData} data={data}  />
            <Button
                onClick={() =>{createStudent()}}>
                {
                  id.id ? (
                    <span>update</span> 
                  ):(
                    <span>create</span> 
                  )

                }
            </Button>
        </div>
      </div>
      <Student state={state} setId={setId} />
    </>
  )
}

export default Classes