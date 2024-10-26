import React, { useState } from 'react'
import { Link } from "react-router-dom";

const LanguageSelection = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('')
    
    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value)
    }
  return (
    <div className="language">
      <h2>Select Your Language</h2>
      <div className="radiobtns">
        <div>
          <label>
            <input
              type="radio"
              value="English"
              checked={selectedLanguage === "English"}
              onChange={handleLanguageChange}
            />
            English
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              value="Afrikaans"
              checked={selectedLanguage === "Afrikaans"}
              onChange={handleLanguageChange}
            />
            Afrikaans
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              value="Oshiwambo"
              checked={selectedLanguage === "Oshiwambo"}
              onChange={handleLanguageChange}
            />
            Oshiwambo
          </label>
        </div>
      </div>
      <Link to="/personality-selection">
        <button>Continue</button>
      </Link>
    </div>
  );
}

export default LanguageSelection
