import React, {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';

import { CreateClass,GetClass,UpdateClass,AddCategory,DeleteClass } from '../../../../../reducer/crmRedux/action';
import Swal from 'sweetalert2'
import { set } from 'lodash';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const Classes = () => {

  const [data, setData] = useState({
    name:"",
    category:"",
    key:''
  })
  const [id, setId] = useState({
    id:'',
    category:false
  })

  const dispatch = useDispatch();
  const [Category, setCategory] = useState([])
  const state = useSelector((state) => state.classReducer);
    // get classes
  useEffect(() => {
    dispatch(GetClass())
  }, [])
  

    
  // select update classes
  useEffect(() => {
    state.map((classes) =>{
      const {_id,class_Category } = classes
      if(_id === id.id){
        setCategory(class_Category)
        setData(classes)
      }
    })
  }, [id])
    // create delete class
  const createClass = (e) =>{
    if(id.id &&  !id.category){
      if(data.name && data.category){
        // console.log(data)
        dispatch(UpdateClass(id.id,data))
        setData({
          name:"",
          category:"",
        })
        setCategory([])
        setId({
          id:'',
          category:false
        })
        Swal.fire({
          color:"green",
          text: "Great",
          timer:1000
        })
      }else{
        Swal.fire({
          color:"red",
          text: "please wriet name",
          timer:1000
        })
      }
    }else if(id.id && id.category){
      if(data.category){
        dispatch(AddCategory(id.id,data))
        setData({
          name:"",
          category:"",
        })
        setCategory([])
        setId({
          id:'',
          category:false
        })
      }else{
        Swal.fire({
          color:"red",
          text: "please add category",
          timer:1000
        })
      }
    }else{
      if(data.category && data.name){

        dispatch(CreateClass(data))
        setData({
          name:"",
          category:"",
        })
        Swal.fire({
          color:"green",
          text: "Great",
          timer:1000
        })
      }else{
        Swal.fire({
          color:"red",
          text: "please complete form",
          timer:1000
        })
      }
      
    }
  }


  const gancel = (e) =>{
    e.preventDefault()
    setId({
      ...id,
      id:'',
      category:false
    })
    setData({
      name:"",
      category:"",
    })
  }
  const deleteClass =(id) =>{
    dispatch(DeleteClass(id))
  }
  return (
    <>

          <div className="col-md-12">
            <div className=" create-admin create-class">
              <p>create class</p>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 2, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                  label="name"
                  type="text"
                  variant="outlined"
                  value={data.name}
                    onChange={(e) =>{
                      setData({
                        ...data, name: e.target.value
                      })
                    }}
                  />
                  {
                    id.id && !id.category && !data.key ? (
                    <></>
                    ) : Category.length > 0 ? (
                      <TextField
                      label="category"
                      type="text"
                      variant="outlined"
                      value={data.category}
                      onChange={(e) =>{
                        setData({
                          ...data, category: e.target.value
                        })
                      }}
                      />
                    ):  (
                      <TextField
                      label="category"
                      type="text"
                      variant="outlined"
                      value={data.category}
                      onChange={(e) =>{
                        setData({
                          ...data, category: e.target.value
                        })
                      }}
                      />
                    )
                  }



                {

                    
                  Category.length !== 0 && id.id && !id.category &&
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">select</InputLabel>
                   <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    onChange={(e) =>{
                      const index = Category.map(item => item).indexOf(e.target.value);
                        setData({
                          ...data,
                          category:e.target.value,
                          key:index + 1
                        })

                      }}
                    label="Age"
                    >
                      {
                        Category.map((data, i) =>{
                      

                          return(
                            <MenuItem id={i} key={i} value={data}>{data}</MenuItem>
                          ) 
                        })
                      }
                    </Select>
                  </FormControl>
                }

                  <Button variant="outlined" onClick={() =>{createClass()}}>
                    {
                      id.id && !id.category ? (
                        <span>update</span> 
                      ): id.id && id.category ? (
                        <span>add category</span> 
                      ) :(
                        <span>create</span> 
                      )

                    }

                  </Button>
                  {
                  id.id && <Button
                  style={{marginLeft:'5px'}}
                   onClick={(e) =>{gancel(e)}}>
                    cancel
                  </Button>
                }
                </Box>
            </div>
          </div>

          {
            state.map((clas, index) =>{
              const {name, _id,class_Category} =clas

              return(
                <div key={index} className="col-md-4">
                  <div className="info-table">
                    <p> <b>Class Name:</b> {name}  </p>
                    <p> <b>Category Name:</b>  {
                      class_Category.map((category) => `${category}, ` )
                    } </p>
                    <Button
                      onClick={()=>{setId({id: _id}) }} >
                      update
                    </Button>
                    <Button
                      onClick={()=>{
                        setId({...id, id: _id, category:true}) 
                        }} >
                      add category
                    </Button>
                    <Button
                      onClick={()=>{
                        deleteClass(_id) 
                        }} >
                      delete Class
                    </Button>
                  </div>
                </div>
              )
            })
          }


    </>
  )
}

export default Classes