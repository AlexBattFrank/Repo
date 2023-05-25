import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useDataApi from './useDataApi';
import RecipePreview from './RecipePreview';

const CategoryDetail = () => {
  const { id } = useParams();
  const [{ data: recipes, isLoading, error }, doFetch] = useDataApi(``, []);

  useEffect(() => {
    doFetch(`http://localhost:8000/api/recipes?category=${id}`);
  }, [doFetch, id]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : Array.isArray(recipes) ? (
        recipes.map((recipe) => {
          console.log(`Rendering recipe with id ${recipe.id}`);
          return <RecipePreview key={recipe.id} recipe={recipe} />
        })
      ) : (
        <div>Recipes is not an array</div>
      )}
    </div>
  );
};

export default CategoryDetail;
