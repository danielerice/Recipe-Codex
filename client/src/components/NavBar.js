import { Link } from "react-router-dom";


function NavBar({ setUser }) {

  async function handleLogOut (e) {
    e.preventDefault()
    const response = await fetch("/logout", { method: "DELETE" })
    setUser()
  }
  return (
    <div className="wrapper">
    
    <Link to="/">
    <p className="logo" >
      Recipe Codex
    </p>
    </Link>
    
    <div className="navBarContainer">
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

    <Link to="/newrecipebook">
    <p className="navLink" >
      new recipe book
    </p>
    </Link>
    
    <button onClick={(e) => handleLogOut(e)}>log out</button>
    </div>
    </div>
  );
}




export default NavBar;