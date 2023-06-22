import React, { useEffect, useState } from "react";
import { Switch, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";
import NewRecipe from "./NewRecipe";
import NewRecipeBox from "./NewRecipeBox"
import MyRecipeBooks from "./MyRecipeBooks"



function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);

  async function autoLogin ( ) {
    const response = await fetch("/me")
    const userLogin = await response.json()
    setUser(userLogin)
  }
  useEffect(() => {
    // auto-login
    console.log("autoLogin")
    autoLogin();

  }, []);


  if (!user) return <Login user={user} setUser={setUser} />;
  
  return (
    <div>
      <NavBar setUser={setUser}/>
      <Routes>
        
        <Route 
        path="/"
        element={
          <Home user={user}
          recipes = {recipes}
          setRecipes = {setRecipes}
          />
        }
        ></Route>
        <Route 
        path="/newrecipe"
        element={
          <NewRecipe user={user}/>
        }
        ></Route>
        <Route 
        path="/newrecipebox"
        element={
          <NewRecipeBox user={user}/>
        }
        ></Route>

        <Route 
        path="/myrecipebooks"
        element={
          <MyRecipeBooks user={user}/>
        }
        ></Route>
        
        <Route></Route>
      </Routes>
    </div>
    
  );
}

export default App;
