import React from 'react'
import { Link } from 'react-router-dom';
import foodData from "../../foodList";

const Vegetables = () => {

   const vegieList = foodData.filter((item) => {
     return item.category === "Vegetables";
   });
  return (
    <div className="food">
      <header>
        <h2>Vegetables</h2>
      </header>
      <div>
        {vegieList.map((item, i) => {
          return (
            <div className="food-item" key={i}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>

      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Vegetables
