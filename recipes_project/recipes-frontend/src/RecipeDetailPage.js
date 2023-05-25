import React from 'react';
import { useParams } from 'react-router-dom';
import useDataApi from './useDataApi';
import RecipeDetail from './RecipeDetail';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [{ data, isLoading, error }] = useDataApi(`http://localhost:8000/api/recipes/${id}`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  // Make sure the object properties exist before trying to access them
  const recipeId = data?.id ? data.id : '';
  const recipeName = data?.name ? data.name : '';
  const recipeDescription = data?.description ? data.description : '';

  return (
    <RecipeDetail id={recipeId} name={recipeName} description={recipeDescription} />
  );
};

export default RecipeDetailPage;
