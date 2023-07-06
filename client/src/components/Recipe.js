import React from "react";


function Recipe ({ directions, name, recipeID, user, recipe, updateRecipe, recipeBookID}) {
    //console.log("in recipe:", user, recipe)

    function deleteRecipe (e) {
        fetch(`/recipes/${recipeID}`, { method: "DELETE" })
        updateRecipe("delete", recipeID, recipe.user_id)
        // const newRecipes = user.recipes.filter((recipe) => recipe.id !== recipeID)
        // const updatedUser = user
        // updatedUser.recipes = newRecipes
        // setUser(updatedUser)
    }

    return (
        <div key={recipeID} className="card">
                <h3>{name}</h3>{user.id === recipe.user_id ?  <button className="delete" onClick={(e) => deleteRecipe(e)}>x</button> : <></> }
                <p>{directions}</p>
        </div>
    )
}

export default Recipe;