import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import {useParams } from "react-router";

function DeleteBlog() {

  const [data, setData] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();


  const getSingleBlog = (id) => {
    fetch(`http://localhost:8000/api/blogs/${id}`)
    .then((res) => res.json())
    .then(json => {
      setData(json);
    })
  }

  const handleSubmit = (id) =>{
    
    fetch(`http://localhost:8000/api/delete_blog/${id}`)
    .then(response => response.json())
    .then(res => {
      alert(res.msg)
      navigate('/')
    })
    
    .catch(error => {
      return ('error', error)
    });
    
  }

  useEffect(() => {
    getSingleBlog(id);
  }, [])


  return (
    <div>
      <h3>Blog</h3>
      <div><strong>Blog's Author:</strong>{data.author}</div>
      <div><strong>Blog's Title:</strong>{data.title}</div>
      <div><strong>Blog's content:</strong>{data.content1}</div>
      <div>
        <img src = {`http://localhost:8000/storage/${data.file_path}`} />
      </div>
    
      <button onClick={handleSubmit(id)} id="post-btn"> Delete Blog</button>
      
    </div>
  )
}

export default DeleteBlog
