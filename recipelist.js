// src/components/RecipeList.js
import React from 'react';
import RecipeCard from './RecipeCard.js'; // Import the RecipeCard component
import './RecipeList.css'; // Styles for flexbox

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;