import React from "react";


function Recipe ({ directions, name, recipeID, user, recipe, updateRecipe, recipeBookID, myRecipes}) {
    //console.log("in recipe:", user, recipe)

    function deleteRecipe (e) {
        fetch(`/recipes/${recipeID}`, { method: "DELETE" })
        updateRecipe("delete", recipeID, recipe.user_id)
    }

    function patchRecipe (e) {

    }

    return (
        <div key={recipeID} className="card">
                <h3>{name}</h3>{user.id === recipe.user_id ?  <button className="delete" onClick={(e) => deleteRecipe(e)}>x</button> : <></> }
                {myRecipes ?  <button className="update" onClick={(e) => patchRecipe(e)}>edit</button> : <></> }
                <p>{directions}</p>
        </div>
    )
}

export default Recipe;