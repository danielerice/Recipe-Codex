import React, { useState } from "react";



  function SignupForm({ setUser }) {
      const [username, setUsername] = useState("");
      const [name, setName] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassowrd, setConfirmPassword] = useState("");

      async function handleNewUser (event) {
        event.preventDefault();
        
        const formData = {
            "name": name,
            "username": username,
            "password": password,
            "password_confirmation": confirmPassowrd
        };
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(formData),
            };
        
        const response = await fetch(`/signup`, configObj)
        const newUser = await response.json();
        setName("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");

    }

    return (
      <div className="card">
      <form onSubmit={handleNewUser}>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <label>Confirm Password:</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={confirmPassowrd}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" value="Login"></input>
        </form>
        </div>
    )};

  export default SignupForm;