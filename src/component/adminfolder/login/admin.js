import React, {useState, useEffect} from 'react'
import "../admin.css"
import {useDispatch } from 'react-redux';
import {SignInAdmin} from '../../../reducer/crmRedux/action'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Swal from 'sweetalert2'


const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let state = useSelector((state) => state.admin);
  const [admin, setAdmin] = useState({
    email:'',
    password:''
  })

  useEffect(() => {
    localStorage.clear()
  }, [])
   

  const SignIn = (e) => {
    e.preventDefault();
    if(admin.email && admin.password){
      dispatch(SignInAdmin(admin,history))
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: ' gözləyin ',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      alert("please insert email and password")
    }
  }

  return (
   <>
   <div className="container">
     <div className="container-fluid">
       <div className="row">
         <div className="col-md-12">
           <div className='login-form' >
            <form action="">
                <TextField
                  id="outlined-password-input"
                  onChange={(e)=> setAdmin({
                    ...admin,  email: e.target.value
                  })}
                  label="email"
                  type="email"
                  variant="outlined"
                />

                <TextField
                  id="outlined-email-input"
                  onChange={(e)=> setAdmin({
                    ...admin,  password: e.target.value
                  })}
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                />
                <Button variant="outlined" onClick={SignIn}>SignIn</Button>
              </form>
           </div>
         </div>
       </div>
     </div>
   </div>
   </>
  )
}

export default Login
