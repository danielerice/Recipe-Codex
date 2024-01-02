import React, {useContext} from "react";
import Recipe from "./Recipe"
import {UserContext} from "../contexts/UserContext"


function MyRecipes ({ updateRecipe, patchRecipe }) {
    const myRecipes = true;
    const {user} = useContext(UserContext);

    return (
        <div>
        <div className="card">
            {user.recipes.map((recipe) => {
                return <Recipe
                key={recipe.id}
                myRecipes={myRecipes} 
                name={recipe.name} 
                recipeID={recipe.id} 
                directions={recipe.directions}
                recipe={recipe}
                updateRecipe={updateRecipe}
                patchRecipe={patchRecipe}
                />
            })}
        </div>
    </div>

    )
}

export default MyRecipes;