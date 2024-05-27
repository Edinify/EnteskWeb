import axios from 'axios'

const url = 'http://localhost:5000/blogs';






export const fetchBlogs = () => axios.get(url)
// export const createPosts = (data,) => axios.post(url, {...data}, );
export const createBlogs = (data) =>{
  const formdata = new FormData()
    console.log(data)
    const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
    }


    for (let i = 0; i < data.file.length; i++) {

      formdata.append('files', data.file[i])
    }

  formdata.append('name', data.name)
  formdata.append('text', data.text)
  formdata.append('title', data.title)
    console.log(data)


    return axios.post(url,formdata,config )


}


export const updateBlogs = (id, updateBlog) => {

    const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
    }

    const formdata = new FormData()

    formdata.append('name', updateBlog.name)
    formdata.append('text', updateBlog.text)
    formdata.append('title', updateBlog.title)

    for (let i = 0; i < updateBlog.file.length; i++) {
      formdata.append('files', updateBlog.file[i])
    }
    let postData = []

    for (let i = 0; i < updateBlog.file.length; i++) {
      postData.push(JSON.stringify(updateBlog.file[i]))
      console.log(postData[i])
    }
    for (let i = 0; i < postData.length; i++) {
      formdata.append('file',  postData[i])
    }


    console.log(postData)
    return axios.patch(`${url}/${id}`, formdata, config);
}

export const deleteBlogs = (id) => axios.delete(`${url}/${id}`)