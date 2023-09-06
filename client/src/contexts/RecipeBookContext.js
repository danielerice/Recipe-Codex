import {useEffect, useState, createContext} from "react";



const RecipeBookContext = createContext();

function RecipeBookProvider({ children }) {

    const [recipeBooks, setRecipeBooks] = useState(null);

    useEffect(() => {
        fetch('/recipe_books')
        .then((r) => {
            if (r.ok) {
                r.json().then((books) => setRecipeBooks(books))
              }
        })
    }, [])


    return <RecipeBookContext.Provider value={{recipeBooks, setRecipeBooks}}>{children}</RecipeBookContext.Provider>
}

export {RecipeBookContext, RecipeBookProvider};