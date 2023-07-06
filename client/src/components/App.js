import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";
import NewRecipe from "./NewRecipe";
import NewRecipeBook from "./NewRecipeBook"
import MyRecipes from "./MyRecipes"
import MyRecipeBooks from "./MyRecipeBooks"



function App() {
  
  const [user, setUser] = useState(null);
  const [recipeBooks, setRecipeBooks] = useState("")
  const [recipes, setRecipes] = useState([]);
  const [errors, setErrors] = useState();
  
  console.log("errors:", errors)
  
  async function autoLogin ( ) {
    const response = await fetch("/me")
    const userLogin = await response.json()
    console.log("response:", response)
    if (response.status === 200) {
      console.log("in auto login:",userLogin)
      setUser(userLogin)
    } else {
      setErrors(userLogin)
    }}

  async function getBooks ( ) {
    const res = await fetch("/recipe_books")
    const books = await res.json()
    if (res.status === 200) {
      console.log("in fetch books:",books)
      setRecipeBooks(books)
    } else {
      setErrors(books)
    }}
  
  useEffect(() => {
    // auto-login
    console.log("autoLogin")
    autoLogin();
    getBooks();

    }, []);

    function updateRecipe (action, token, token2) {
      if (action === "delete") {
        //finds and deletes the  in state recipe in the user's recipe array
        const newRecipes = user.recipes.filter((recipe) => recipe.id !== token)
        const updatedUser = user
        updatedUser.recipes = newRecipes
        console.log("in updateRecipe:",updatedUser)
        //finds and deletes the in state recipe from the corresponding recipe book
        console.log("in updaterecipe 1st filter", recipeBooks)
        const targetBook = recipeBooks.filter((book) => book.id === token2)
        console.log("target book:", targetBook)
        const updatedRecipes = targetBook[0].recipes.filter((recipe) => recipe.id !== token)
        console.log("updatedRecipes:",updatedRecipes)
        targetBook.recipes = updatedRecipes
        const updatedBooks = recipeBooks.map((book) => {
          if(book.id === token2) {
            const finishedBook = book
            finishedBook.recipes = updatedRecipes
            return finishedBook
          } else {return book}
        })
        console.log("in updateRecipe:",updatedBooks)
        setRecipeBooks(updatedBooks)
        setUser(updatedUser)
      }
    }
  
  // useEffect(() => {
  //   //get /recipe_books
  //   console.log("fetch books")
  //   getBooks();
  //   }, []);

  if (!user) return <Login user={user} setUser={setUser} setErrors={setErrors}/>;
  if (recipeBooks) {
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
              recipeBooks = {recipeBooks}
              setRecipeBooks = {setRecipeBooks}
              recipes={recipes}
              errors={errors}
              setErrors={setErrors}
              updateRecipe={updateRecipe}
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
              recipeBooks={recipeBooks}
              setRecipeBooks={setRecipeBooks}
              errors={errors}
              setErrors={setErrors}
              />
            }
          ></Route>
  
          <Route 
            path="/myrecipes"
            element={
              <MyRecipes 
              key={'myRecipes'}
              user={user}
              updateRecipe={updateRecipe}
              />
            }
          ></Route>

          <Route 
            path="/myrecipebooks"
            element={
              <MyRecipeBooks 
              key={'myRecipeBooks'}
              user={user}
              />
            }
          ></Route>
          
          <Route></Route>
        </Routes>
      </div>
      
    );
  } else {
    return (<p>Loading...</p>)
  }
  }
  

export default App;
