import React from 'react'
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <p>Page NotFound</p>
      <Link to='/'>back to home</Link>
    </div>
  );
}
