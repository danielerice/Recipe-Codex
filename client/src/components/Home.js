import React, { useContext } from "react";
import { RecipeBookContext } from "../contexts/RecipeBookContext";
import RecipeBook from "./RecipeBook"


function Home ({ updateRecipe, patchRecipe, updateUser, updateRecipeBooks }) {

    const {recipeBooks} = useContext(RecipeBookContext);

    return (
        <div>
        <div className="home">
            {recipeBooks.map((recipeBook) => {
                return <RecipeBook
                            isHome={true}
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