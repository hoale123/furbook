
import React from 'react';
import { useState, useEffect } from 'react';
import PetNav from './components/pet-nav'
import PictureBox from './components/picture-box'
import AboutBox from './components/about-box'
import Posts from './components/posts'
import './App.css';

function App() {
  // const [blogs, setBlogs] = useState([])

  // useEffect(() => {
  //   fetch("/blogs")
  //   .then(r => r.json())
  //   .then(data => setBlogs(data))
  // }, [])

  // console.log(blogs)

  return (
    <div className="App">
    <PetNav/>
    <div class="container">
      <div class="row">
        <PictureBox/>
        <AboutBox/>
      </div>
      <div class="row">
        <Posts/>
      </div>
    </div>
  </div>
      /* Lets learn react test deployment  
      {blogs.map((blog) => 
         (
          <h1>
            this is a {blog.title} 4
          </h1>
        )
      )} */
  );
}

export default App;
