import React, { useEffect, useState } from "react";


function RecipeBook ({ user, recipeBookID, description, name }) {

    
    return (
        <div>
            <div className="center">
                <div key={recipeBookID} className="card">
                    <p key={name}>{name}</p>
                    <p key={recipeBookID+1}>{description}</p>
                </div>
            </div>
        </div>

    )
}

export default RecipeBook;