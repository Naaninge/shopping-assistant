import React from 'react'
import { Link } from "react-router-dom";
import fruit from '../images/fruit.jpg'
import vegies from '../images/vegies.jpg'
import milk from '../images/milk.jpg'
import meat from '../images/meat.jpg'
import seafood from '../images/seafood.jpg'
import pasta from '../images/pasta.jpg'



const Categories = () => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="category-container">

          <div className="category">
        <Link to="/fruits">
            <img src={fruit} alt="fruits" />
            <h4>Fruits</h4>
        </Link>
          </div>
        
          <div className="category">
          <Link to="/vegetables">
            <img src={vegies} alt="" />
          <h4>Vegetables</h4>
           </Link>
          </div>
       
        
        <div className="category">
          <img src={meat} alt="" />
          <h4>Meat</h4>
        </div>
        <div className="category">
          <img src={pasta} alt="" />
          <h4>Pantry</h4>
        </div>
        <div className="category">
          <img src={milk} alt="" />
          <h4>Dairy</h4>
        </div>
        <div className="category">
          <img src={seafood} alt="" />
          <h4>Seafood</h4>
        </div>
      </div>
      
    </div>
  );
}

export default Categories
