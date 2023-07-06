import React, {} from "react";
import Recipe from "./Recipe"


function MyRecipes ({ user }) {


    console.log(user.recipes)
    return (
        <div>
        <div className="center">
            {user.recipes.map((recipe) => {
                return <Recipe 
                user={user}
                name={recipe.name} 
                recipeID={recipe.id} 
                directions={recipe.directions}
                recipe={recipe}
                />
            })}
        </div>
    </div>

    )
}

export default MyRecipes;