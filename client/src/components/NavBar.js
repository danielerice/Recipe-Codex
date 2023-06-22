import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";


function NavBar({ setUser}) {

  async function handleLogOut (e) {
    e.preventDefault()
    const response = await fetch("/logout", { method: "DELETE" })
    setUser(null)
  }
  return (
    <div className="wrapper">
    
    <Link to="/">
    <p className="logo" >
      Recipe Codex
    </p>
    </Link>
    
    <container className="navBarContainer">
    <Link to="/myrecipebooks">
    <p className="navLink" >
      my recipe books
    </p>
    </Link>
    
    <Link to="/newrecipe">
    <p className="navLink" >
      new recipe
    </p>
    </Link>

    <Link to="/newrecipebox">
    <p className="navLink" >
      new recipe box
    </p>
    </Link>
    
    <button onClick={(e) => handleLogOut(e)}>log out</button>
    </container>
    </div>
  );
}




export default NavBar;