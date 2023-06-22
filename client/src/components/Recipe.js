import React, { useEffect, useState } from "react";


function Recipe ({ directions, name, ingredients, category, poster_id }) {
    console.log(directions)
    return (
        <div className="card">
                <p>{name}</p>
                <p>{directions}</p>
                <p>{category}</p>
                <p>{ingredients}</p>
        </div>
    )
}

export default Recipe;