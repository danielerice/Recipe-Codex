import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";
import NewRecipe from "./NewRecipe";
import NewRecipeBook from "./NewRecipeBook"
import MyRecipeBooks from "./MyRecipeBooks"



function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [recipeBooks, setRecipeBooks] = useState();
  const [errors, setErrors] = useState();

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
  
  useEffect(() => {
    fetch("/recipe_books")
    .then((response) => response.json())
    .then((recipeBooks) => setRecipeBooks(recipeBooks))
  }, []);

  if (!user) return <Login user={user} setUser={setUser} setErrors={setErrors}/>;
  
  return (
    <div>
      <NavBar key={'navBar'} setUser={setUser}/>
      <Routes>
        
        <Route 
          path="/"
          element={
            <Home 
            key={'home'}
            user = {user}
            recipes = {recipes}
            setRecipes = {setRecipes}
            />
        }
        ></Route>
        <Route 
          path="/newrecipe"
          element={
            <NewRecipe 
            key={'newRecipe'}
            user={user}
            />
          }
        ></Route>
        <Route 
          path="/newrecipebook"
          element={
            <NewRecipeBook 
            key={'newRecipeBook'}
            user={user}
            />
          }
        ></Route>

        <Route 
          path="/myrecipebooks"
          element={
            <MyRecipeBooks 
            key={'myRecipeBooks'}
            recipeBooks={recipeBooks}
            setRecipeBooks={setRecipeBooks}
            user={user}
            />
          }
        ></Route>
        
        <Route></Route>
      </Routes>
    </div>
    
  );
}

export default App;
