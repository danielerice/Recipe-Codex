import React, {useState, useContext} from "react";
import { RecipeBookContext } from "../contexts/RecipeBookContext";
//import {UserContext} from "../contexts/UserContext"


function NewRecipeBook () {

        const {recipeBooks, setRecipeBooks} = useContext(RecipeBookContext);
        //const {user, setUser} = useContext(UserContext);
        const [name, setName] = useState("")
        const [description, setDescription] = useState("")

        async function postNewRecipeBook (e) {
            //e.preventDefault()

            const formData = {
                "name": name,
                "description": description
                };
            const configObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData),
                };
                
            const response = await fetch(`/recipe_books`, configObj);
            const newBook = await response.json();

            //response error handling
            if (response.status === 201) {
                const updatedBooks = [...recipeBooks]
                updatedBooks.push(newBook)
                setRecipeBooks(updatedBooks)
                setName("");
                setDescription("")
              } else {
                alert(newBook.errors)
              }
            }

    
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-6 gy-5">
                        <div class="mb-3">
                            <label for="textinput" class="form-label">Name</label>
                            <input class="form-control" type="text" id="textinput" placeholder="This is an example!" onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label for="directions" class="form-label">Directions</label>
                            <textarea class="form-control" id="directions" type="input" placeholder="All my faves!" onChange={(e) => setDescription(e.target.value)} rows="3"></textarea>
                        </div>
                        <button className="btn btn-primary" type="submit" onClick={(e) => postNewRecipeBook()} >Submit</button>
                    </div>
                </div>
            </div>

    )
}

export default NewRecipeBook;