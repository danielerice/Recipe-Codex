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
                <div className="card">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <div className="btn-group">
                            {user.id === recipe.user_id ?  <button onClick={(e) => deleteRecipe(e)} className="btn">x</button> : <></> }
                            {myRecipes ?  <button className="btn" onClick={(e) => patchForm()}>edit</button> : <></> }
                        </div>
                    </div>
                    <div className="card-body">
                    <form onSubmit={sendRecipe}>
                        <label>Name: </label>
                        <input  className="form-control" id="name" type="text" placeholder="This is an example!" value={recipeName} onChange={(e) => setRecipeName(e.target.value)}></input>
                        <label>Directions:</label>
                        <textarea  className="form-control" id="directions" type="input" value={recipeDirections} onChange={(e) => setRecipeDirections(e.target.value)}></textarea>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                    </div>
                </div>
            )
    }
    if (!form) {

        return (<div key={recipe.id} className="card">
                    
                    <h3 className="card-header">
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <div className="btn-group">
                                {user.id === recipe.user_id ?  <button onClick={(e) => deleteRecipe(e)} className="btn">x</button> : <></> }
                                {myRecipes ?  <button className="btn" onClick={(e) => patchForm()}>edit</button> : <></> }
                            </div>
                        </div>
                        {name}
                    </h3>
                    
                    <div className="card-body">
                    <h4>Directions: </h4>
                    <p>{directions}</p>
                    </div>
                </div>)}
}

export default Recipe;