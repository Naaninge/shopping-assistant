import React from 'react'
import { Link } from "react-router-dom";
import foodData from "../../foodList";

const Food = ({category}) => {

    const fruitsList = foodData.filter((item) => {
        return item.category === `${ category }`;
    })
        
  return (
    <div className="food">
      <h2>{ category}</h2>
      <div>
        {fruitsList.map((item, i) => {
          return (
            <div className="food-item" key={i}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>N${item.price}</p>
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

export default Food
