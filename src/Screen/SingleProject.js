import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function SingleProject() {
  const [data, setData] = useState({});
  const {id} = useParams();

  const getSingleProject = (id) => {

    fetch(`http://localhost:8000/api/projects/${id}`)
    .then( res => res.json())
    .then(json => {

        // console.log('json',json)
        // localStorage.setItem('data',JSON.stringify(json));
        setData(json);
    })
    

  }

    useEffect(() => {
    // console.log('id is', id)
    getSingleProject(id);
    }, [])
  
  return (
    <div>
      <h1>Course Title: {data.title}</h1>
      {/* <p>Course Price: {data.price}</p> */}
     Course Image:
        <img src={`http://localhost:8000/storage/${data.file_path}`} />
    </div>
  )
}

export default SingleProject
