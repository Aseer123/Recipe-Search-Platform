import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList'; // Import RecipeList component

function App() {
  // Sample recipe data
  const [recipes, setRecipes] = useState([
    {
      title: 'Spaghetti Bolognese',
      cuisine: 'Italian',
      ingredients: ['Spaghetti', 'Tomatoes', 'Ground Beef', 'Garlic'],
      prep_time: 30,
      instructions: 'Cook spaghetti and prepare sauce...',
      image_url: 'https://example.com/spaghetti.jpg'
    },
    {
      title: 'Chicken Curry',
      cuisine: 'Indian',
      ingredients: ['Chicken', 'Curry Powder', 'Garlic', 'Onions'],
      prep_time: 40,
      instructions: 'Cook chicken and make curry sauce...',
      image_url: 'https://example.com/curry.jpg'
    },
    {
      title: 'Tacos',
      cuisine: 'Mexican',
      ingredients: ['Tortilla', 'Ground Beef', 'Cheese', 'Lettuce'],
      prep_time: 20,
      instructions: 'Prepare beef and assemble tacos...',
      image_url: 'https://example.com/tacos.jpg'
    },
  ]);

  return (
    <div>
      <h1>EpiRecipes</h1>
      <RecipeList recipes={recipes} /> {/* Pass the array of recipes to RecipeList */}
    </div>
  );
}

export default App;