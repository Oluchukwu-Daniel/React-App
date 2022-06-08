import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function SingleBlog() {
  const [data, setData] = useState({});
  const {id} = useParams();
  

  const getSingleBlog = (id) => {

    fetch(`http://localhost:8000/api/blogs/${id}`)
    .then(res => res.json())
    .then(json => {
      setData(json);
    })
  }

  useEffect(() => {
    getSingleBlog(id);
  }, [])

  return (
    <div>
      <h1>The title is :{data.title}</h1>
      <img src = {`http://localhost:8000/storage/${data.file_path}`} />
    </div>
  )
}

export default SingleBlog
