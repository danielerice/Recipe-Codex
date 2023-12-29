import React, { useState, useContext } from "react";
import {UserContext} from '../contexts/UserContext'


function LoginForm() {
    
    const {setUser} = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin (e) {
        //POST to Users
        e.preventDefault()

        const formData = {
          "username": username,
          "password": password
          };
        const configObj = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
          },
          body: JSON.stringify(formData),
          };
        
        const response = await fetch(`/login`, configObj)
        const newLogin = await response.json();
        
        if (response.status === 201) {
          setUser(newLogin)
        } else {
          alert(newLogin.errors)
        }
    }

  return (
    <div className="col-sm-12 col-lg-6">
      <form onSubmit={handleLogin}>
        <label>Username:</label>
          <input className="form-control"
            type="text"
            id="name"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        <label>Password:</label>
          <input className="form-control"
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
      </form>
      <button type="submit" value="Login" className="btn btn-primary">Login</button>
    </div>
    
  );
}

export default LoginForm;