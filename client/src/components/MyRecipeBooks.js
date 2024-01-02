import React, { useContext } from "react";
import RecipeBook from './RecipeBook'
import {UserContext} from "../contexts/UserContext"

function MyRecipeBooks ({ updateRecipe, patchRecipe, updateUser, updateRecipeBooks }) {

    const {user} = useContext(UserContext);

return (
    <div>
        <div className="card">
            {user.my_recipe_books.map((recipeBook) => {

                return <RecipeBook
                            recipeBook={recipeBook}
                            key={recipeBook.id}
                            isHome={false}
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