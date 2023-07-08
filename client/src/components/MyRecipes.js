import React, {} from "react";
import Recipe from "./Recipe"


function MyRecipes ({ user, setUser, updateRecipe, patchRecipe, errors }) {
    const myRecipes = true;

    return (
        <div>
        <div className="center">
            {user.recipes.map((recipe) => {
                return <Recipe
                key={recipe.id}
                myRecipes={myRecipes} 
                user={user}
                name={recipe.name} 
                recipeID={recipe.id} 
                directions={recipe.directions}
                recipe={recipe}
                updateRecipe={updateRecipe}
                patchRecipe={patchRecipe}
                errors={errors}
                />
            })}
        </div>
    </div>

    )
}

export default MyRecipes;