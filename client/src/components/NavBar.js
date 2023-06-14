import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";


function NavBar() {
  return (
    <div className="wrapper">
    <p className="logo" to="/">
      <Link>Recipe Codex</Link>
    </p>
    </div>
  );
}




export default NavBar;