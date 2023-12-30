import { Link } from "react-router-dom";


function NavBar({ setUser }) {

  async function handleLogOut (e) {
    e.preventDefault()
    fetch("/logout", { method: "DELETE" })
    setUser("")
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">RecipeCodex</a>{/*replace with svg */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

    // <div className="navbar">
    
    // <Link to="/">
    // <p className="logo" >
    //   Recipe Codex
    // </p>
    // </Link>
    
  

    // <Link to="/myrecipes">
    // <p className="navLink" >
    //   my recipes
    // </p>
    // </Link>

    // <Link to="/newrecipebook">
    // <p className="navLink" >
    //   new recipe book
    // </p>
    // </Link>

    // <Link to="/myrecipebooks">
    // <p className="navLink" >
    //   my recipe books
    // </p>
    // </Link>
    
    // <button onClick={(e) => handleLogOut(e)} className="btn btn-dark">log out</button>
    // </div>
  );
}




export default NavBar;