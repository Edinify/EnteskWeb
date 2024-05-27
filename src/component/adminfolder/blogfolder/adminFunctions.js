import {React, useState,useEffect} from 'react'
import {useDispatch } from 'react-redux';
import {createUser, updateUser, deleteBlog} from '../../../reducer/blogReducer/action'
import { useSelector } from 'react-redux';
import { useParams} from 'react-router-dom'

function AdminFunctions() {
  const {id} = useParams()
  let state = useSelector((state) => state.blogs);
  const [currentId, setCurrentId] = useState(0);
  const [deleteId, setDeleteId] = useState(0);
  const [count, setCount] = useState(0);
  const [slideimg, setSlideimg] = useState("");
  const [objectUrl, setObjectUrl] = useState([]);
  const [img1, setImg1] = useState([])
  const [img2, setImg2] = useState([])
  const dispatch = useDispatch();
  const [blogData, setBlogdata] =  useState({ 
    title: '', 
    text: '', 
    name: '', 
    file: [],
  });
  

  const update = useSelector((state) =>(
    id ? state.blogs.find((blog) => blog._id === id) : null
  ))
  // function imgView(img) {
  //   if(img.type){
  //     const reader = new FileReader();
  //     reader.onload = () =>{
  //       if(reader.readyState === 2){
  //         setObjectUrl(reader.result)
  //       }
  //     }
  //   reader.readAsDataURL(img)
  //   }
    
  // }

  // useEffect(() => { 
  //     if(userData.file.length === 1){ 
  //       imgView(userData.file[0])
  //       setImg1( objectUrl)
  //     }else if(userData.file.length === 2){
  //       imgView(userData.file[1])
  //       setImg2( objectUrl)
  //     }
      
  //     // console.log(objectUrl)
      
  // }, [userData.file,objectUrl ]) 



  useEffect(() => {
    if(update){
      setBlogdata (update)
      setCurrentId(id)
    }
  }, [update])

  function handleUpdateimg(filepath) {

    const itemToRemoveIndex = blogData.file.findIndex( function(item) {
      return item.filepath === filepath
    })
    setCount(count + 1)
    blogData.file.splice(itemToRemoveIndex, 1)
    return 
  }


  let Itemindex  = false
   Itemindex = blogData.file.filter((img) => img.name === slideimg)
  // console.log(Itemindex)
  
  const handlerSubmit = (e) =>{
    e.preventDefault();

    if(slideimg){
      if(slideimg !== blogData.file[0].name){
        blogData.file.splice(0,0, Itemindex[0] )
        blogData.file.pop()
      } 
    }
    console.log(blogData.file)
    
    console.log(id)
    if(currentId === 0){
      if(blogData.title && blogData.text && blogData.name && blogData.file){
        blogData.blogName = blogData.name.replace(/[^a-zA-Z ]/g, "")
        dispatch(createUser(blogData));
        setBlogdata({
          title: '', 
          text: '', 
          blogName: '', 
          file: []
        })
      }else{
        alert("please insert data")
      }
    }else{
      
      dispatch(updateUser(currentId, blogData))
     
      setCurrentId(0)
      setBlogdata({
        title: '', 
        text: '', 
        blogName: '', 
        file: []
      })
    }
    
  }
  // console.log(state)

  useEffect(() => {
    if(deleteId){
      dispatch(deleteBlog(deleteId))
      // console.log(deleteId)
    }
    console.log()
    
  }, [deleteId,dispatch])


  return{
    setBlogdata,
    setSlideimg,
    update,
    handlerSubmit,
    state,
    blogData,
    setCurrentId,
    handleUpdateimg,
    currentId,
    setDeleteId,
  }

}

export default AdminFunctions
