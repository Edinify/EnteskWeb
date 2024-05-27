 import {createBlogs,fetchBlogs, updateBlogs, deleteBlogs} from './api'

export const createUser = (blog) => async (dispatch) => {
  try {
    const { data } = await createBlogs(blog);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const getUser = () => async (dispatch) => {
  try {
    const { data } = await fetchBlogs();
    // console.log(data)
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    // console.log(error.message);
  }
};

export const updateUser = (id, blog) => async (dispatch) =>{
  try{

    const {data} = await updateBlogs(id, blog);
    console.log(data)

    dispatch({type: 'UPDATE' ,payload: data})

  }catch(error){
    console.log(error.message);
  }
}

export const deleteBlog = (id) => async (dispatch) =>{
  try{
    await deleteBlogs(id);

    dispatch({type: "DELETE", payload: id})

  }catch(error){
    console.log(error.message)
  }
}