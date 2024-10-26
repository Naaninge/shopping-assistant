import React from 'react'
import { Link } from 'react-router-dom';

const Fruits = () => {
  return (
    <div className='food-title'>
      <h2>Fruits</h2>

      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Fruits
