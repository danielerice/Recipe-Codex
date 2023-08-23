import React, { useEffect, useState, useContext } from "react";
import RecipeBook from './RecipeBook'
import {UserContext} from "../contexts/UserContext"

function MyRecipeBooks ({ recipeBooks, updateRecipe, patchRecipe, updateUser, updateRecipeBooks }) {

    const {user} = useContext(UserContext);

return (
    <div>
        <div className="home">
            {user.recipe_books.map((recipeBook) => {

                return <RecipeBook
                            recipeBook={recipeBook}
                            key={recipeBook.id}
                            userID={user.id}
                            patchRecipe={patchRecipe}
                            updateUser={updateUser}
                            updateRecipeBooks={updateRecipeBooks}
                        />
            })}
        </div>
    </div>
)
}

export default MyRecipeBooks;