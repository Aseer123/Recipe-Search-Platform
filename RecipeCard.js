import React from 'react';
import './RecipeCard.css'; // Styles for the card

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <img src={recipe.image_url} alt={recipe.title} style={{ width: '100px', height: '100px' }} />
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <p><strong>Preparation Time:</strong> {recipe.prep_time} minutes</p>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeCard;