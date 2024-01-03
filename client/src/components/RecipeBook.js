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
    
    return (
                <div className="col-10 gy-5 text-center">
                    <div id={recipeBook.id} className="card">

                        {recipeBook.name ? (<h2>{recipeBook.name}</h2>) : (<h2>Recipe Name</h2>)}
                        {recipeBook.description ? (<i>{recipeBook.description}</i>) : (<i>description</i>)}
                            { recipeBook.recipes && isHome ? (
                                recipeBook.recipes.map((recipe) => {
                                    return (
                                            <div className="row justify-content-center">
                                                <div className="col-11 gy-5">
                                                    <Recipe 
                                                        key={recipe.id}
                                                        recipeBookID={recipeBook.id}
                                                        name={recipe.name} 
                                                        recipeID={recipe.id} 
                                                        directions={recipe.directions}
                                                        recipe={recipe}
                                                        updateRecipe={updateRecipe}
                                                        patchRecipe={patchRecipe}
                                                    />
                                                </div>
                                            </div>
                                            )})
                                ) : (<div className="card"><p>Add Some Recipes!</p></div>)}
                        <button type="button" className="btn btn-success" onClick={(e) => setOpen(!open)}>{open ? ("Done") : ("Add a Recipe!") }</button>
                        {open && <div className="">
                                    <div className="card">
                                        <form onSubmit={postNewRecipe}>
                                            <label>Name: </label>
                                            <input id="name" type="text" placeholder="This is an example!" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} className="form-control"></input>
                                            <label>Directions:</label>
                                            <textarea id="directions" type="input" placeholder={exampleText} value={directions} onChange={(e) => setDirections(e.target.value)} className="form-control"></textarea>
                                            <button type="submit" className="btn">Submit</button>
                                        </form>
                                    </div>
                        </div>}
                    </div>
                </div>
    )
}

export default RecipeBook;