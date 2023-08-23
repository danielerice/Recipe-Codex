import React, {} from "react";
import RecipeBook from "./RecipeBook"


function Home ({ updateRecipe, recipeBooks, setRecipeBooks, patchRecipe, updateUser, updateRecipeBooks }) {

    return (
        <div>
        <div className="home">
            {recipeBooks.map((recipeBook) => {
                return <RecipeBook
                            recipeBook={recipeBook} 
                            key={recipeBook.id}
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