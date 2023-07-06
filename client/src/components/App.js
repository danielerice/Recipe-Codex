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
  
  async function autoLogin ( ) {
    const response = await fetch("/me")
    const userLogin = await response.json()
    if (response.status === 200) {
      setUser(userLogin)
    } else {
      setErrors(userLogin)
    }}

  async function getBooks ( ) {
    const res = await fetch("/recipe_books")
    const books = await res.json()
    if (res.status === 200) {
      setRecipeBooks(books)
    } else {
      setErrors(books)
    }}
  
  useEffect(() => {
    // auto-login
    autoLogin();
    getBooks();

    }, []);

  function updateRecipe ( token, token2 ) {

      //finds and deletes the  in state recipe in the user's recipe array
      let newRecipes = user.recipes.filter((recipe) => recipe.id !== token)
      let updatedUser = user
      updatedUser.recipes = newRecipes
      
      //finds and deletes the in state recipe from the corresponding recipe book
      const updatedBooks = recipeBooks.map((book) => {
        if (book.id === token2) {
          let filteredBooks = book.recipes.filter((recipe) => recipe.id !== token)
          let finishedBook = book
          finishedBook.recipes = filteredBooks
          return finishedBook
        } else {return book}
      })

      setRecipeBooks(updatedBooks)
      setUser(updatedUser)
  }

  async function patchRecipe (formData, token, token2) {
    console.log("form data:", formData)
    const configObj = {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
      },
      body: JSON.stringify(formData),
      };
      const response = await fetch(`/recipes/${token}`, configObj)
      const patchedRecipe = await response.json();
      
      if (response.status === 200) {
        //finds and changes the target recipe in the user obj in state
        let updatedUserRecipes = user.recipes.map((recipe) => {
          if (recipe.id === token) {
            return patchedRecipe
          } else {return recipe}
        })
        let updatedUser = user
        updatedUser.recipes = updatedUserRecipes

        //finds and changes the target recipe in the recipeBook obj in state
        let updatedBooks = recipeBooks.map((book) => {
          if (book.id === token2) {
            let updatedBook = book.recipes.map((recipe) => {
              if (recipe.id === token) {
                return patchedRecipe
              } else {return recipe}
            })
          } else {return book}
        })

        setUser(updatedUser)
        setRecipeBooks(updatedBooks)
      } else {
        setErrors(patchedRecipe)
      }

  }

  function updateRecipeBooks (newRecipeBook) {
    //updates recipeBooks obj with new recipe in state
    console.log(newRecipeBook)
    let updatedBooks = recipeBooks.map((book) => {
      if (book.id === newRecipeBook.id) {
        return newRecipeBook
      } else {return book}
    })
    setRecipeBooks(updatedBooks)
  }

  function updateUser (newRecipe) {
    //updates user obj with new recipe in state
    let updatedUser = user
    updatedUser.recipes.push(newRecipe)
    setUser(updatedUser)
  }
  

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
              patchRecipe={patchRecipe}
              updateRecipeBooks={updateRecipeBooks}
              updateUser={updateUser}
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
              patchRecipe={patchRecipe}
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
