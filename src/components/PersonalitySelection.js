import React, { useContext } from "react";
import { Link } from "react-router-dom";
import friendly from "../images/friendly.png";
import trendy from "../images/trendy.png";
import practical from "../images/practical.png";
import translations from "../translations";
import { LanguageContext } from "../LanguageContext";
import { AssistantContext } from "../AssistantContext";

import { useNavigate } from "react-router-dom";

const PersonalitySelection = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const { setSelectedAssistant } = useContext(AssistantContext)
  
   const navigate = useNavigate()

  const handleClick = (personality) => {
    navigate('/assistant')
    setSelectedAssistant(personality)
  }

   const translation =
     translations.assistantSelectionPage[selectedLanguage]||
    translations.assistantSelectionPage.English;
  return (
    <div className="personalities">
      <h2>{translation.title}</h2>
      <p>{translations.description}</p>
      <div>
        <button className="assistant-section" onClick={()=>handleClick("PriceAdvisor")}>
          <img src={practical} alt={translation.practical.title} />
          <div>
            <h3>{translation.practical.title}</h3>

            <p>{translation.practical.description}</p>
          </div>
        </button>

        <button className="assistant-section" onClick={ ()=>handleClick("FriendlyAdvisor")}>
          <img src={friendly} alt={translation.friendly.title} />
          <div>
            <h3>{translation.friendly.title}</h3>

            <p>{translation.friendly.description}</p>
          </div>
        </button>

        <button className="assistant-section" onClick={()=>handleClick("TrendyAdvisor")}>
          <img src={trendy} alt={translation.trendy.title} />
          <div>
            <h3>{translation.trendy.title}</h3>

            <p>{translation.trendy.description}</p>
          </div>
        </button>
      </div>

      <Link to="/language-selection">
        <button>{translation.previous}</button>
      </Link>
    </div>
  );
};

export default PersonalitySelection;
