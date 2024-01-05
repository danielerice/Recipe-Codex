import React, {useState, useContext} from "react";
import Recipe from "./Recipe";
import {UserContext} from "../contexts/UserContext"


function RecipeBook ({ updateRecipe, recipeBook, patchRecipe, updateRecipeBooks, updateUser, isHome}) {

    const {user, setUser} = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [recipeName, setRecipeName] = useState("");
    const [directions, setDirections] = useState("");

    const exampleText = "Ingredients: \n2.5oz Gin\n.25oz Brine\n1 Olive\nDirections:\nPut all the ingredients in a cocktail mixer and stir until the extrior has condensated"

    function updateMyRecipeBooks (recipeBookID) {
        let bookIDArr = []
        user.my_recipe_books.forEach((book) => {
            bookIDArr.push(book.id)
        })
        let newBook = bookIDArr.includes(recipeBookID)
        
        if (!newBook) {

            let updatedUser = user.my_recipe_books.push(recipeBook)
            
            setUser(updatedUser);
        }

    }



    async function postNewRecipe (e) {
        //post to /recipes
        e.preventDefault()
        
        const formData = {
            "name": recipeName,
            "directions": directions,
            "user_id": user.id,
            "recipe_book_id": recipeBook.id
            };
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(formData),
            };
            
        const response = await fetch(`/recipes`, configObj);
        const newRecipe = await response.json();

        if (response.status === 201) {
            let newRecipeBook = recipeBook
            newRecipeBook.recipes.push(newRecipe)
            updateMyRecipeBooks(recipeBook.id)
            updateRecipeBooks(newRecipeBook)
            updateUser(newRecipe)
          } else {
            alert(newRecipe.errors)
          }
        
        setRecipeName("");
        setDirections("");
    }

    function createRecipeGrid() {
        const grid = []
        for (let i=0; i < recipeBook.recipes.length; i++) {
            grid.push(
                <div key={i} className="row justify-content-center">
                    <div className="col-5 gy-3">{recipeBook.recipes[i] ? <Recipe key={recipeBook.recipes[i].name} recipeBookID={recipeBook.id} name={recipeBook.recipes[i].name} recipeID={recipeBook.recipes[i].id} directions={recipeBook.recipes[i].directions} recipe={recipeBook.recipes[i]} updateRecipe={updateRecipe} patchRecipe={patchRecipe} />: <></>}</div>
                    <div className="col-5 gy-3">{recipeBook.recipes[i+1] ? <Recipe key={recipeBook.recipes[i+1].name} recipeBookID={recipeBook.id} name={recipeBook.recipes[i+1].name} recipeID={recipeBook.recipes[i+1].id} directions={recipeBook.recipes[i+1].directions} recipe={recipeBook.recipes[i+1]} updateRecipe={updateRecipe} patchRecipe={patchRecipe} /> : <></>}</div>
                </div>)
                i++
        }
        return grid.map((row) => {
            return row
        })
    }
    
    return (
                <div className="col-10 gy-5 text-center">
                    <div id={recipeBook.id} className="card">

                        {recipeBook.name ? (<h2 className="card-header">{recipeBook.name}</h2>) : (<h2 className="card-header">Recipe Name</h2>)}
                        {recipeBook.description ? (<i>{recipeBook.description}</i>) : (<i>description</i>)}
                        { recipeBook.recipes && isHome ? createRecipeGrid() : ( isHome ? <></> : <div className="card"><p className="card-header">Add Some Recipes!</p></div> )}

                        <div className="row justify-content-center">
                            <div className="col-2 gy-3">
                                <button type="button" className="btn btn-outline-primary" onClick={(e) => setOpen(!open)}>{open ? ("Done") : ("Add a Recipe!") }</button>
                            </div>
                            {open &&    <div className="card">
                                            <form onSubmit={postNewRecipe}>
                                                <label>Name: </label>
                                                <input id="name" type="text" placeholder="This is an example!" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} className="form-control"></input>
                                                <label>Directions:</label>
                                                <textarea id="directions" type="input" placeholder={exampleText} value={directions} onChange={(e) => setDirections(e.target.value)} className="form-control"></textarea>
                                                <button type="submit" className="btn">Submit</button>
                                            </form>
                                        </div>}
                        </div>
                    </div>
                </div>
    )
}

export default RecipeBook;