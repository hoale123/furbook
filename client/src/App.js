
import React from 'react';
import { useState, useEffect } from 'react';
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