import React, { useState } from "react";


function NewRecipe ({ user }) {

    const [name, setName] = useState("")
    const [directions, setDirections] = useState("")

    const exampleText = "Ingredients: \n2.5oz Gin\n.25oz Brine\n1 Olive\nDirections:\nPut all the ingredients in a cocktail mixer and stir until the extrior has condensated"
    
   
    function postNewRecipe (e) {
        //post to /recipes
        e.preventDefault()

        const formData = {
            "name": name,
            "directions": directions,
            "user_id": user.id
            };
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(formData),
            };
            
        fetch(`/recipes`, configObj);
        setName("");
        setDirections("")
    }

    return (
        <div className="col">
            <form onSubmit={postNewRecipe} className="form-control">
                <label>Name: </label>
                <input id="name" type="text" placeholder="This is an example!" onChange={(e) => setName(e.target.value)}></input>
                <label>Directions:</label>
                <textarea id="directions" type="input" placeholder={exampleText} onChange={(e) => setDirections(e.target.value)}></textarea>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}

export default NewRecipe;