import React, { useEffect } from "react";
import Recipe from "./Recipe"


function Home ({ user, recipes, setRecipes }) {
      
      useEffect(() => {
        // GET /recipes
        fetch("/recipes")
        .then((response) => response.json())
        .then((recipes) => setRecipes(recipes))
    
      }, []);

    return (
        <div>
            <div className="center">
                {recipes.map((recipe) => {
                return <Recipe
                    name={recipe.name}
                    directions={recipe.directions}
                    ingredients={recipe.ingredients}
                    category={recipe.category}
                    poster_id={recipe.poster_id}
                    recipeID={recipe.id}
                    />
                })}
            </div>
        </div>

    )
}

export default Home;