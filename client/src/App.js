
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("/blogs")
    .then(r => r.json())
    .then(data => setBlogs(data))
  }, [])

  console.log(blogs)

  return (
    <div className="App">
      Lets learn react test deployment  
      {blogs.map((blog) => {
        return blog.title
      })}
    </div>
  );
}

export default App;
