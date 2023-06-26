import React, { useEffect, useState } from "react";


function Recipe ({ directions, name, ingredients, category, poster_id, recipeID }) {
    console.log(directions)
    return (
        <div key={recipeID} className="card">
                <p>{name}</p>
                <p>{directions}</p>
                <p>{category}</p>
                <p>{ingredients}</p>
        </div>
    )
}

export default Recipe;