import React from 'react';
import { Link } from 'react-router-dom';
import useDataApi from './useDataApi';

const Category = () => {
  const [{ data, isLoading }] = useDataApi('http://localhost:8000/api/categories');

  console.log('Data:', data);
  console.log('Is Loading:', isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Categories</h2>
      {data.map(category => (
        <div key={category.id}>
          <h3>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Category;
