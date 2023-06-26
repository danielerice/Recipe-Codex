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
        const newUser = await response.json(); // error handling
        console.log(newUser)
        setName("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");

    }

    return (
      <div className="formContainer">
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
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          id="cofrimPassword"
          autoComplete="off"
          value={confirmPassowrd}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" value="Create Account"></input>
        </form>
        </div>
    )};

  export default SignupForm;