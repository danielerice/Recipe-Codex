import React, {useState} from "react";


function NewRecipeBook ({ recipeBooks, setRecipeBooks, errors, setErrors }) {

        const [name, setName] = useState("")
        const [description, setDescription] = useState("")

        async function postNewRecipeBook (e) {
            e.preventDefault()

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
            const newBook = await response.json();

            //response error handling
            if (response.status === 201) {
                const updatedBooks = [...recipeBooks]
                updatedBooks.push(newBook)
                setRecipeBooks(updatedBooks)
                setErrors(null)
              } else {
                alert(newBook.errors)
              }

            setName("");
            setDescription("")
        
            }

    
        return (
            <div className="center">
            <div className="newRecipeCard">
            { errors ? <div className="errorMessage"><p>{errors.errors}</p></div> : <p></p>}
                <form onSubmit={postNewRecipeBook}>
                    <label>Name:</label>
                    <input type="text" id="textinput" placeholder="This is an example!" onChange={(e) => setName(e.target.value)} value={name}></input>
                    <label>Description:</label>
                    <textarea id="directions" type="input" placeholder="All my faves!" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                    <button type="submit" >Submit</button>
                </form>
            </div>
            </div>

    )
}

export default NewRecipeBook;