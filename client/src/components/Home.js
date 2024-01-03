import React, { useContext } from "react";
import { RecipeBookContext } from "../contexts/RecipeBookContext";
import RecipeBook from "./RecipeBook"


function Home ({ updateRecipe, patchRecipe, updateUser, updateRecipeBooks }) {

    const {recipeBooks} = useContext(RecipeBookContext);

    return (
        <div className="container-fluid">
            <div>
                {recipeBooks.map((recipeBook) => {
                    return (
                            <div className="row justify-content-center">
                                <RecipeBook
                                isHome={true}
                                recipeBook={recipeBook} 
                                key={recipeBook.id}
                                updateRecipe={updateRecipe}
                                patchRecipe={patchRecipe}
                                updateUser={updateUser}
                                updateRecipeBooks={updateRecipeBooks}
                                />
                            </div>)
                })}
            </div>
    </div>

    )
}

export default Home;