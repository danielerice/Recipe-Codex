import {Link}from "react-router-dom";


function NavBar({ setUser }) {

  async function handleLogOut (e) {
    e.preventDefault()
    fetch("/logout", { method: "DELETE" })
    setUser("")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid d-flex">
      <Link className="navbar-brand" to="/">RecipeCodex</Link>{/*replace with svg */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/myrecipes">My Recipes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/newrecipebook">New Recipe Book</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/myrecipebooks">My Recipe Books</Link>
          </li>
          </ul>
          <button onClick={(e) => handleLogOut(e)} className="btn btn-outline-dark align-self-end">log out</button>
      </div>
    </div>
  </nav>
  );
}




export default NavBar;