import React, {useState} from "react";


function NewRecipeBook ({ user, recipeBooks, setRecipeBooks, errors, setErrors }) {

        const [name, setName] = useState("")
        const [description, setDescription] = useState("")

        async function postNewRecipeBook (e) {
            e.preventDefault()
            console.log(name, description)
            const formData = {
                "name": name,
                "description": description
                };
            const configObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData),
                };
                
            const response = await fetch(`/recipe_books`, configObj)
            const newBook = await response.json(); // error handling
            console.log(newBook)

            if (response.status === 201) {
                const updatedBooks = [...recipeBooks]
                updatedBooks.push(newBook)
                setRecipeBooks(updatedBooks)
                console.log(recipeBooks)
              } else {
                setErrors(newBook)
                console.log(newBook)
              }

            setName("");
            setDescription("")
        
            }

    
        return (
            <div className="center">
            <div className="newRecipeCard">
                <form onSubmit={postNewRecipeBook}>
                    <label>Name:</label>
                    <input type="text" id="textinput" placeholder="This is an example!" onChange={(e) => setName(e.target.value)} value={name}></input>
                    <label>Description:</label>
                    <textarea id="directions" type="input" placeholder="All my faves!" onChange={(e) => setDescription(e.target.value)}></textarea>
                    <button type="submit" >Submit</button>
                </form>
            </div>
            </div>

    )
}

export default NewRecipeBook;