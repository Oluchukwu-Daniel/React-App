import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';

function BlogApp() {

  const[data, setData] = useState([]);

  const getAllBlogs = () => {
      fetch('http://localhost:8000/api/blogs')
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('data', JSON.stringify(json));
        setData(json.data);
      })
  }

  useEffect(() =>{
    getAllBlogs();
  }, [])

console.log(data);
  return (
    <div className="w3-col l8 s12">
      {data.map((item) => (

        <BlogCard 
        image = {item.file_path}
        heading = {item.title}
        description = {item.title}
        content = {item.content1}
        date = {item.created_at}
        commentsNo ={item.id}
        id = {item.id}
        />
        
      ))}
    </div>
  )
}

export default BlogApp