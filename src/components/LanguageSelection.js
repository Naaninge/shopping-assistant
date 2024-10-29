import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { LanguageContext } from '../LanguageContext';

const LanguageSelection = () => {

    const {selectedLanguage, setSelectedLanguage }= useContext(LanguageContext)
    
    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value)
        console.log(selectedLanguage)
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
              id="radioBtns"
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
              id="radioBtns"
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
              id="radioBtns"
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
