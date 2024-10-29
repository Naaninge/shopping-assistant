import React from "react";
import { Link } from "react-router-dom";
import robot from '../images/robot.png'


const Home = () => {
  return (
    <div className="home ">
      {/*image  */}
      <div className="image">
        <img src={robot} alt="shopping robot" />
      </div>
      <h2>
        Hi there! I'm your sustainable food guide. Let's find some delicious and
        planet-friendly options
      </h2>
      <p>
        Discover sustainable food choices with our AI assistant.Make a
        difference with every purchase.
      </p>
      <div className="button">
        <Link to="/language-selection">
          <button >Get Started!</button>
        </Link>

        <p>Ready to shop sustainably? Let's begin</p>
      </div>
    </div>
  );
};

export default Home;
