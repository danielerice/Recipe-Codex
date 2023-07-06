import React from "react";


function Recipe ({ directions, name, ingredients, category, recipeID, user, recipe }) {
    console.log(directions)
    return (
        <div key={recipeID} className="card">
                <h3>{name}</h3>{user.id = recipe.user_id ?  <></> : <button className="delete" >x</button> }
                <p>{directions}</p>
                <p>{category}</p>
                <p>{ingredients}</p>
        </div>
    )
}

export default Recipe;