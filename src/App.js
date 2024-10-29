import Home from "./components/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LanguageSelection from "./components/LanguageSelection";
import PersonalitySelection from "./components/PersonalitySelection";
import Categories from "./components/Categories";
import Fruits from "./components/categories/Fruits";
import Vegetables from "./components/categories/Vegetables";
import Meat from "./components/categories/Meat";
import Seafood from "./components/categories/Seafood";
import Pantry from "./components/categories/Pantry";
import { LanguageProvider } from "./LanguageContext";
import { AssistantProvider } from "./AssistantContext";
import Assistant from "./components/assistants/Assistant";

import Chatbot from "./ChatBot";

function App() {
  return (
    <div className="App ">
      <LanguageProvider>
        <AssistantProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="language-selection"
                element={<LanguageSelection />}
              />
              <Route
                path="personality-selection"
                element={<PersonalitySelection />}
              />
              <Route path="categories" element={<Categories />} />
              <Route path="fruits" element={<Fruits />} />
              <Route path="vegetables" element={<Vegetables />} />
              <Route path="chatBot" element={<Chatbot />} />
              <Route path="meat" element={<Meat />} />
              <Route path="seafood" element={<Seafood />} />
              <Route path="pantry" element={<Pantry />} />
              <Route path="assistant" element={<Assistant />}></Route>
            </Routes>
          </Router>
        </AssistantProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
