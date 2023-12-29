import React, { useState, useContext } from "react";
import {UserContext} from "../contexts/UserContext"



  function SignupForm() {

      const {setUser} = useContext(UserContext);
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

        if (response.status === 201) {
          setUser(newUser)
        } else {
          alert(newUser.errors)
        }
          
        setName("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");

    }

    return (
      <div className="col-12">
        <form onSubmit={handleNewUser}>
          <label>Name:</label>
            <input
              className="form-control"
              type="text"
              id="name"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          <label>Username:</label>
            <input
            className="form-control"
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          <label>Password:</label>
            <input
            className="form-control"
              type="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          <label>Confirm Password:</label>
            <input
            className="form-control"
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