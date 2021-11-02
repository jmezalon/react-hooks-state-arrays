import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All")

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    const newFoodArr = [...foods, newFood]
    setFoods(newFoodArr)
  }

  function handleLiClick(id) {
    // const newFoodArr = foods.filter(food => food.id !== id)
    // setFoods(newFoodArr)
    const updatedFood = foods.map(food => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1
        }
      } else {
        return food
      }
    })
    setFoods(updatedFood)
  }

  function handleChange(e) {
    setFilterBy(e.target.value)
  }

  const foodDisplay = foods.filter(food => {
    if(filterBy === "All") {
      return true
    } else {
      return food.cuisine === filterBy
    }
  })

  const foodList = foodDisplay.map(food => {
    return <li key={food.id} onClick={() => handleLiClick(food.id)}>{food.name} | Cuisine: {food.cuisine} | Heat level: {food.heatLevel}</li>
  })

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
