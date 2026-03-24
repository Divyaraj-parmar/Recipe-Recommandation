import { useState } from "react"
import Recipe from "./Recipe"
import IngredientList from "./IngredientList";
import {generateRecipe} from '../utils/chef.ai'

export default function Main() {

    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("");

    async function showRecipe(){
        const receivedRecipe = await generateRecipe(ingredients);
        setRecipe(receivedRecipe);
    }   


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0
                &&
                <IngredientList ingredients={ingredients} showRecipe={showRecipe}/>
            }
            {recipe &&
                <Recipe recipe={recipe}/>}
        </main>
    )
}