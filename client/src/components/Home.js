import React, { useEffect, useState } from "react";
import Recipe from "./Recipe"


function Home ({ user, recipes, setRecipes }) {


    async function getRecipes ( ) {
        const response = await fetch("/recipes")
        const recipes = await response.json()
        setRecipes(recipes)
      }
      useEffect(() => {
        // GET /recipes
        console.log("getRecipes")
        getRecipes();
        console.log(recipes)
    
      }, []);

    return (
        <div>
            <container className="center">
                {recipes.map((recipe) => {
                return <Recipe
                    name={recipe.name}
                    directions={recipe.directions}
                    ingredients={recipe.ingredients}
                    category={recipe.category}
                    poster_id={recipe.poster_id}
                    />
                })}
            </container>
        </div>

    )
}

export default Home;