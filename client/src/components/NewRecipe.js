import React, { useState } from "react";


function NewRecipe ({ user }) {

    const [name, setName] = useState("")
    const [directions, setDirections] = useState("")

    const exampleText = "Ingredients: \n2.5oz Gin\n.25oz Brine\n1 Olive\nDirections:\nPut all the ingredients in a cocktail mixer and stir until the extrior has condensated"
    
   
    async function postNewRecipe (e) {
        //post to /recipes
        e.preventDefault()
        //console.log(name, directions)
        const formData = {
            "name": name,
            "directions": directions,
            "user_id": user.id,
            //"recipe_book_id": recipe_book_id
            };
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(formData),
            };
            
        const response = await fetch(`/recipes`, configObj);
        const newRecipe = await response.json(); // error handling
        //console.log(newRecipe)
        setName("");
        setDirections("")
    }

    return (
        <div className="center">
        <div className="newRecipeCard">
            <form onSubmit={postNewRecipe}>
                <label>Name: </label>
                <input id="name" type="text" placeholder="This is an example!" onChange={(e) => setName(e.target.value)}></input>
                <label>Directions:</label>
                <textarea id="directions" type="input" placeholder={exampleText} onChange={(e) => setDirections(e.target.value)}></textarea>
                <button type="submit" >Submit</button>
            </form>
        </div>
        </div>

    )
}

export default NewRecipe;