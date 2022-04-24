import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { product } from '../data'
export const ProducDetail = () => {
    const params = useParams();
    const [data, setData] = useState({});

     useEffect(() => {
         const urlId = +params.id;
         setData(product.filter((data) => data.id === urlId));
          if (+params.id < 1 || +params.id > product.length) {
            throw new Error("Product id Not Found!");
          }
     }, []);
      
  return (
      <div>
        <p>Product Name : {data[0]?.name}</p>
        <p>Product Color : {data[0]?.color}</p>
        <p>Product Year : {data[0]?.year}</p>
        <Link to="/product-list">Back</Link>
      </div>
  );
}
