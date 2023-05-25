import React from 'react';

const RecipeDetail = ({ id, name, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default RecipeDetail;