
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("/blogs")
    .then(r => r.json())
    .then(data => setBlogs(data))
  }, [])

  // console.log(blogs)

  return (
    <div className="App">
      Lets learn react test deployment  
      {blogs.map((blog) => 
         (
          <h1>
            this is a {blog.title} 4
          </h1>
        )
      )}
    </div>
  );
}

export default App;
