import React from 'react'
import { Link } from 'react-router-dom';
import { product } from '../data'

export const ProductList = () => {

  return (
    <div>
      <ul>
        {product.map((data) => {
          return (
            <li key={data.id}>
              {data.name} |{" "}
              <Link to={`/product-detail/${data.id}`}>Detail</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
