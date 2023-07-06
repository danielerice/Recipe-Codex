import React, {} from "react";
import RecipeBook from "./RecipeBook"


function Home ({ user, updateRecipe, recipeBooks, setRecipeBooks, errors, setErrors, recipes, setRecipes }) {
      //console.log("in home:", recipeBooks)

    return (
        <div>
        <div className="home">
            {recipeBooks.map((recipeBook) => {
                return <RecipeBook
                user={user}
                recipeBook={recipeBook} 
                key={recipeBook.id}
                name={recipeBook.name} 
                recipeBookID={recipeBook.id} 
                description={recipeBook.description}
                errors={errors}
                setErrors={setErrors}
                recipes={recipes}
                updateRecipe={updateRecipe}
                />
            })}
        </div>
    </div>

    )
}

export default Home;