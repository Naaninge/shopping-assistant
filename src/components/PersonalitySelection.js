import React from 'react'
import { Link } from "react-router-dom";
import friendly from '../images/friendly.png'
import trendy from '../images/trendy.png'
import practical from '../images/practical.png'

const PersonalitySelection = () => {
  return (
    <div className="personalities">
      
      <h2>Choose Your Shopping Assistant Personality</h2>
      <p>Select a personality that best fits your shopping style and needs</p>

      <div>
        <section>
          <img src={practical} alt="" />
          <div>
            <Link to='/practical-guide'>
              {" "}
              <h3>Practical Price Assistant</h3>
            </Link>

            <p>focused on find the best deals</p>
          </div>
        </section>

        <section>
          {/* image */}
          <img src={friendly} alt="" />
          <div>
            <Link to="/friendly-guide">
            <h3>Friendly Assistant</h3>
            </Link>
            <p>Always ready to offer helpful advice and suggestions</p>
          </div>
        </section>
        <section>
          {/* image */}
          <img src={trendy} alt="" />
          <div>
            <Link to='/trendy-guide'>
            <h3>Trendy Assistant</h3>
            </Link>
            <p>keeps you updated with the latest trends and styles</p>
          </div>
        </section>
      </div>

    </div>
  );
}

export default PersonalitySelection
