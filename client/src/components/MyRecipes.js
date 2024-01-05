import React, {useContext} from "react";
import Recipe from "./Recipe"
import {UserContext} from "../contexts/UserContext"


function MyRecipes ({ updateRecipe, patchRecipe }) {
    const myRecipes = true;
    const {user} = useContext(UserContext);

    function createRecipeGrid() {
        const grid = []
        for (let i=0; i < user.recipes.length; i++) {
            grid.push(
                <div key={i} className="row justify-content-center">
                    <div className="col-5 gy-3">{user.recipes[i] ? <Recipe key={user.recipes[i].name} recipeBookID={user.id} name={user.recipes[i].name} recipeID={user.recipes[i].id} directions={user.recipes[i].directions} recipe={user.recipes[i]} updateRecipe={updateRecipe} patchRecipe={patchRecipe} myRecipes={true}/>: <></>}</div>
                    <div className="col-5 gy-3">{user.recipes[i+1] ? <Recipe key={user.recipes[i+1].name} recipeBookID={user.id} name={user.recipes[i+1].name} recipeID={user.recipes[i+1].id} directions={user.recipes[i+1].directions} recipe={user.recipes[i+1]} updateRecipe={updateRecipe} patchRecipe={patchRecipe} myRecipes={true}/> : <></>}</div>
                </div>)
                i++
        }
        return grid.map((row) => {
            return row
        })
    }

    return (
        <div className="container-fluid">
            {createRecipeGrid()}
        </div>

    )
}

export default MyRecipes;