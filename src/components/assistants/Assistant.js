import React, { useContext } from "react";
import { AssistantContext } from "../../AssistantContext";
import { Link } from "react-router-dom";
import Chatbot from "../../ChatBot";
import translations from "../../translations";
import { LanguageContext } from "../../LanguageContext";

const Assistant = () => {
  const { selectedAssistant } = useContext(AssistantContext);
   const { selectedLanguage } = useContext(LanguageContext);
  const currentTranslations = translations[selectedAssistant][selectedLanguage];
  console.log(selectedLanguage)
  
  
 
  return (
    <div>
      <div className="container">
        <div className="guides">
          <div className="title">
            <h2>{currentTranslations.title}</h2>
          </div>
          <div>
            <Chatbot
              language={selectedLanguage}
              personality={currentTranslations.title}
              initialMessage={currentTranslations.welcomeMessage}
            />
          </div>

          <div className="options">
            <button>{currentTranslations.buttonOne}</button>
            <button>{currentTranslations.buttonTwo}</button>

            <Link to="/categories">
              <button>{currentTranslations.foodCategories}</button>
            </Link>
          </div>
        </div>

        <Link to="/personality-selection">
          <button className="prev">{currentTranslations.previous}</button>
        </Link>
      </div>
    </div>
  );
};

export default Assistant;
