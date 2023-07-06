import React, {} from "react";
import RecipeBook from "./RecipeBook"


function MyRecipeBooks ({ user }) {


    //console.log(user.recipe_books)
    return (
        <div>
        <div className="center">
            {user.recipe_books.map((recipeBook) => {
                return <RecipeBook
                user={user} 
                name={recipeBook.name} 
                recipeBookID={recipeBook.id} 
                description={recipeBook.description}
                />
            })}
        </div>
    </div>

    )
}

export default MyRecipeBooks;