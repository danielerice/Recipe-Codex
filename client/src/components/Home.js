import React, {} from "react";
import RecipeBook from "./RecipeBook"


function Home ({ user, updateRecipe, recipeBooks, setRecipeBooks, errors, setErrors, recipes, setRecipes, patchRecipe, updateUser, updateRecipeBooks }) {

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
                patchRecipe={patchRecipe}
                updateUser={updateUser}
                updateRecipeBooks={updateRecipeBooks}
                />
            })}
        </div>
    </div>

    )
}

export default Home;