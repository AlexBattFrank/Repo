import React from 'react';
import { Link } from 'react-router-dom';

const RecipePreview = ({ recipe }) => {
  return (
    <div>
      <h3>
        <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
      </h3>
    </div>
  );
};

export default RecipePreview;
