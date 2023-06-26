import React, { useEffect, useState } from "react";
import RecipeBook from "./RecipeBook"


function MyRecipeBooks ({ user, recipeBooks, setRecipeBooks }) {


    console.log(recipeBooks)
    return (
        <div>
        <div className="center">
            {recipeBooks.map((recipeBook) => {
                return <RecipeBook 
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