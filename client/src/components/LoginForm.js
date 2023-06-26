import React, { useState } from "react";


function LoginForm({ setUser, setErrors }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin (e) {
        //POST to Users
        e.preventDefault()

        const formData = {
          "username": username,
          "password": password
          };
        console.log(formData)
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
          setErrors(newLogin)
        }
    }

  return (
    <div className="formContainer">
    <form onSubmit={handleLogin}>
      <label>Username:</label>
      <input
        type="text"
        id="name"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        id="name"
        autoComplete="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Login"></input>
    </form>
    </div>
    
  );
}

export default LoginForm;