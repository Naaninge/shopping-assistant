import React from 'react'
import { Link } from 'react-router-dom';

const Vegetables = () => {
  return (
    <div className='food-title'>
      <header>
      <h2>Vegetables</h2>
      </header>

      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Vegetables
