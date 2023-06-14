import React, { useEffect, useState } from "react";
import { Switch, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login user={user} setUser={setUser} />;
  
  return (
    <div>
      <NavBar user={user}/>
      <Routes>
        
        <Route 
        path="/"
        element={
          <Home user={user}/>
        }
        ></Route>
        
        <Route></Route>
      </Routes>
    </div>
    
  );
}

export default App;
