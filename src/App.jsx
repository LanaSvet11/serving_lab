import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Axios GET request to fetch meal data from the server
    axios
      .get("http://localhost:3000/meals")
      .then((response) => {
        setMeals(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Meal List</h1>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>
            <h2>{meal.name}</h2>
            <p>Type: {meal.type}</p>
            <p>Ingredients: {meal.ingredients.join(", ")}</p>
            <p>Instructions: {meal.instructions}</p>
            <p>Vegetarian: {meal.vegetarian ? "Yes" : "No"}</p>
            <img
              src={meal.picture}
              alt={meal.name}
              style={{ maxWidth: "300px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
