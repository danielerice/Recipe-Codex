import React, { useContext } from "react";
import RecipeBook from './RecipeBook'
import {UserContext} from "../contexts/UserContext"

function MyRecipeBooks ({ updateRecipe, patchRecipe, updateUser, updateRecipeBooks }) {

    const {user} = useContext(UserContext);

return (
        <div className="container-fluid">
            {user.my_recipe_books.map((recipeBook) => {

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
)
}

export default MyRecipeBooks;