import React from 'react'
import { Link } from "react-router-dom";
import fruit from '../images/fruit.jpg'
import vegies from '../images/vegies.jpg'
import meat from '../images/meat.jpg'
import seafood from '../images/seafood.jpg'
import pasta from '../images/pasta.jpg'



const Categories = () => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="category-container">
        <div className="category">
          <img src={fruit} alt="fruits" />
          <Link to="/fruits">
            <h4>Fruits</h4>
          </Link>
        </div>

        <div className="category">
          <img src={vegies} alt="" />
          <Link to="/vegetables">
            <h4>Vegetables</h4>
          </Link>
        </div>

        <div className="category">
          <img src={meat} alt="" />
          <Link to="/meat">
            <h4>Meat</h4>
          </Link>
        </div>
        <div className="category">
          <img src={pasta} alt="" />
          <Link to="/pantry">
            <h4>Pantry</h4>
          </Link>
        </div>

        <div className="category">
          <img src={seafood} alt="" />
          <Link to="/seafood">
            <h4>Seafood</h4>
          </Link>
        </div>
      </div>
      <Link to="/personality-selection">
        <button>Previous</button>
      </Link>
    </div>
  );
}

export default Categories
