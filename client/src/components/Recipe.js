import React, {useState} from "react";


function Recipe ({ directions, name, recipeID, user, recipe, updateRecipe, recipeBookID, myRecipes, patchRecipe, errors}) {
    console.log("in recipe errors:", errors)
    const [form, setForm] = useState(false);
    const [recipeName, setRecipeName] = useState(name);
    const [recipeDirections, setRecipeDirections] = useState(directions);

    function deleteRecipe (e) {
        fetch(`/recipes/${recipeID}`, { method: "DELETE" })
        updateRecipe(recipeID, recipe.recipe_book_id)
    }

    function patchForm (e) {
        setForm(!form)
        console.log(form)
    }

    function sendRecipe (e) {
        e.preventDefault()
        //patch recipe
        const formData = {
            "name": recipeName,
            "directions": recipeDirections
            };

        patchRecipe(formData, recipeID, recipe.recipe_book_id)
    }
    if (form) {
        return (
                <div className="patchRecipeCard">
                    { errors ? <div className="errorMessage"><p>{errors.errors}</p></div> : <p></p>}
                    <button id="done" onClick={(e) => patchForm()}>done</button>
                    <form onSubmit={sendRecipe}>
                        <label>Name: </label>
                        <input id="name" type="text" placeholder="This is an example!" value={recipeName} onChange={(e) => setRecipeName(e.target.value)}></input>
                        <label>Directions:</label>
                        <textarea id="directions" type="input" value={recipeDirections} onChange={(e) => setRecipeDirections(e.target.value)}></textarea>
                        <button type="submit" >Submit</button>
                    </form>
                </div>
            )
    }
    if (!form) {

        return (<div key={recipeID} className="card">
                    { errors ? <div className="errorMessage"><p>{errors.errors}</p></div> : <p></p>}
                    <h3>{name}</h3>
                    {user.id === recipe.user_id ?  <button className="delete" onClick={(e) => deleteRecipe(e)}>x</button> : <></> }
                    {myRecipes ?  <button className="update" onClick={(e) => patchForm()}>edit</button> : <></> }
                    <p>{directions}</p>
                </div>)}
}

export default Recipe;