import React, {useState, useContext} from "react";
import {UserContext} from "../contexts/UserContext"

function Recipe ({ directions, name, recipe, updateRecipe, myRecipes, patchRecipe}) {
    
    const {user, setUser} = useContext(UserContext);
    const [form, setForm] = useState(false);
    const [recipeName, setRecipeName] = useState(name);
    const [recipeDirections, setRecipeDirections] = useState(directions);

    function deleteRecipe (e) {
        fetch(`/recipes/${recipe.id}`, { method: "DELETE" })
        updateRecipe(recipe.id, recipe.recipe_book_id)

        let isUniq = true;
        
        user.recipes.map((userRecipe) => {
            if (recipe.recipe_book_id === userRecipe.recipe_book_id && recipe.id !== userRecipe.id) {
               return isUniq = false;
            } else {return userRecipe}
        })
        if(isUniq){
            let updatedRecipeBooks = user.my_recipe_books.filter((recipeBook) => recipeBook.id !== recipe.recipe_book_id)
            let updatedUser = user
            updatedUser.my_recipe_books = updatedRecipeBooks
            setUser(updatedUser)
        }
    }

    function patchForm (e) {
        setForm(!form)
    }

    function sendRecipe (e) {
        e.preventDefault()
        //patch recipe
        const formData = {
            "name": recipeName,
            "directions": recipeDirections
            };

        patchRecipe(formData, recipe.id, recipe.recipe_book_id)
    }
    if (form) {
        return (
                <div className="patchRecipeCard">
                    <button id="done" onClick={(e) => patchForm()}className="btn">done</button>
                    <form onSubmit={sendRecipe} className="form-control">
                        <label>Name: </label>
                        <input id="name" type="text" placeholder="This is an example!" value={recipeName} onChange={(e) => setRecipeName(e.target.value)}></input>
                        <label>Directions:</label>
                        <textarea id="directions" type="input" value={recipeDirections} onChange={(e) => setRecipeDirections(e.target.value)}></textarea>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            )
    }
    if (!form) {

        return (<div key={recipe.id} className="card">
                    <h3>{name}</h3>
                    {user.id === recipe.user_id ?  <button onClick={(e) => deleteRecipe(e)} className="btn">x</button> : <></> }
                    {myRecipes ?  <button className="btn" onClick={(e) => patchForm()}>edit</button> : <></> }
                    <p>{directions}</p>
                </div>)}
}

export default Recipe;