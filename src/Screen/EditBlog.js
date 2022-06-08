import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import {useParams } from "react-router";

function EditBlog() {

  const [authors, setAuthors] = useState([]);
  const [title, setTitle] = useState("");
  const [content1, setContent1] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const {id} = useParams();

  const getAuthors = () => {
    fetch(`http://localhost:8000/api/get_authors`)
    .then((res) => res.json())
    .then((json) => {
      setAuthors(json);
    })
  }

  const handleSubmit = () =>{
    let payload = {
      title, content1, author, id
    }

    fetch('http://localhost:8000/api/edit_blog', {
      method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload)
    })

    .then(response => {
      return response.json();
    })

    .then(res => {
      alert(res.msg);
      navigate('/');
    })
    
    .catch(error => {
      return ('error', error)
    });
    
  }

  const getSingleBlog = (id) => {
    fetch(`http://localhost:8000/api/blogs/${id}`)
    .then((res) => res.json())
    .then((json) => {
      setTitle(json.title);
      setContent1(json.content1);
      setAuthor(json.author);
    })
  }

  useEffect(() => {
    getSingleBlog(id);
    getAuthors();
  }, [])

  return (
    <div>
      <form action="" method="POST">
        <h3>Blog Author</h3>
        <div>
          <strong>
            <span>SELECT AUTHOR</span>
          </strong>
          <select onChange={(e)=>setAuthor(e.target.value)} value={author} className="option" name="author" id="select">
            <option>SELECT AUTHOR</option>
            {
              authors.map((author) => (
                <option value={author.name}>{author.name}</option>
              ))
            }
          </select>
          <br />
          <br />
        </div>
        <label>
          <strong>Blog Title</strong>
        </label>
        <br />

        <input type="text" name="title" id="blog-title-input" placeholder="Blog-title" onChange={(e) =>setTitle(e.target.value)} value={title}
        />
        <br />
        <br />
        <label>
          <strong>Blog Content</strong>
        </label>
        <br />
        <textarea type="text" id="textarea" name="content1" placeholder="What's on your mind?" defaultValue={""} onChange={(e)=>setContent1(e.target.value)} value={content1}></textarea>
        <br />
        <br />
        <button type="button" onClick={handleSubmit} id="post-btn" name="post">Post Blog</button>
      </form>
    </div>
  )
}

export default EditBlog
