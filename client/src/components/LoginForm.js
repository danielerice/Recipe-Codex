import React, { useEffect, useState } from "react";


function LoginForm({ setUser }) {
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
        setUser(response);
    }

  return (
    <div className="card">
    <form onSubmit={handleLogin}>
      <label>Username:</label>
      <input
        type="text"
        id="name"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Passowrd:</label>
      <input
        type="text"
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