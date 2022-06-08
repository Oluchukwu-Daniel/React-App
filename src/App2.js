import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App1 from './App1';
import BlogApp from './components/BlogApp';
import BlogCard from './components/BlogCard';
import Introduction from './components/Introduction';
import AddBlog from './Screen/AddBlog';
import Blog from './Screen/Blog';
import DeleteBlog from './Screen/DeleteBlog';
import EditBlog from './Screen/EditBlog';
import SingleBlog from './Screen/SingleBlog';

function App2() {
  return (
    <div>
    <BrowserRouter>
    {/* w3-content defines a container for fixed size centered content, 
and is wrapped around the whole page content, except for the footer in this example */}
    <div className="w3-content" style={{ maxWidth: 1400+"px" }}>
      {/* Header */}
      <header className="w3-container w3-center w3-padding-32">
        <h1>
          <b>MY BLOG</b>
        </h1>
        <p>
          Welcome to the blog of <span className="w3-tag">unknown</span>
        </p>
      </header>
      <div class="w3-row">
      
        <Routes>
          {/* Navigate Through App2 with these routes */}
          <Route path = "/blogs/:id" element = {<SingleBlog/>} />
          <Route path = "/blogs" element = {<Blog/>}/>
          <Route path = "/" element = {<Blog/>}/>
          <Route path = "/addblog" element = {<AddBlog />} />
          <Route path = "/editblog/:id" element = {<EditBlog />} />
          <Route path = "/deleteblog/:id" element = {<DeleteBlog />} />
          
        </Routes>
      
      </div><br />
      {/* The arrangement of routes here doesnt matter, we only use it to determine routes, and to determine which route page takes the design of the App */}
    </div>
    {/* Footer */}
    <footer className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
      <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">
        Previous
      </button>
      <button className="w3-button w3-black w3-padding-large w3-margin-bottom">
        Next »
      </button>
      <p>
        Powered by
        <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
          w3.css
        </a>
      </p>
    </footer>
    </BrowserRouter>
    </div>
   
  )
}

export default App2
