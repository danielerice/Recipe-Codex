import React, { useEffect, useState } from "react";


function NewRecipeBox ({ user }) {

    return (
        <div className="center">
        <div className="newRecipeCard">
            <form>
                <div className="inlineContainer">
                <label for="menu1">Menu 1</label>
                <select id="menu1" name="menu1">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                </select>

                <label for="menu2">Menu 2</label>
                <select id="menu2" name="menu2">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                </select>

                <label for="text">Ingredient</label>
                <input type="text" id="textinput"></input>
                </div>
            </form>
        </div>
        </div>

    )
}

export default NewRecipeBox;