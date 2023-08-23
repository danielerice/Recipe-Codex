import React, {useContext} from "react";
import Recipe from "./Recipe"
import {UserContext} from "../contexts/UserContext"


function MyRecipes ({ updateRecipe, patchRecipe, errors }) {
    const myRecipes = true;
    const {user} = useContext(UserContext);

    return (
        <div>
        <div className="center">
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
                errors={errors}
                />
            })}
        </div>
    </div>

    )
}

export default MyRecipes;