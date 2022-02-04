
import React from 'react';
import { useState, useEffect } from 'react';
import PetNav from './components/pet-nav'
import PictureBox from './components/picture-box'
import AboutBox from './components/about-box'
import Posts from './components/posts'
import TitleHeader from "./components/TitleHeader"
import Homepage from "./components/Homepage"
import './App.css';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (
  <div className="App">
      <TitleHeader user={user} />
      <Homepage user={user} setUser={setUser} />
  </div>
  );
}

export default App;

    // <PetNav/>
    // <div class="container">
    //   <div class="row">
    //     <PictureBox/>
    //     <AboutBox/>
    //   </div>
    //   <div class="row">
    //     <Posts/>
    //   </div>
    // </div>