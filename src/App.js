import Home from "./components/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LanguageSelection from "./components/LanguageSelection";
import PersonalitySelection from "./components/PersonalitySelection";
import Categories from "./components/Categories";
import PracticalGuide from "./components/assistants/PracticalGuide";
import FriendlyGuide from "./components/assistants/FriendlyGuide";
import TrendyGuide from "./components/assistants/TrendyGuide";
import Fruits from "./components/categories/Fruits";
import Vegetables from "./components/categories/Vegetables";
import Chatbot from "./ChatBot";

function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route
            path="language-selection"
            Component={LanguageSelection}
          ></Route>
          <Route
            path="personality-selection"
            Component={PersonalitySelection}
          ></Route>
          <Route path="categories" Component={Categories}></Route>
          <Route path="practical-guide" Component={PracticalGuide}></Route>
          <Route path="friendly-guide" Component={FriendlyGuide}></Route>
          <Route path="trendy-guide" Component={TrendyGuide}></Route>
          <Route path="fruits" Component={Fruits}></Route>
          <Route path="vegetables" Component={Vegetables}></Route>
          <Route path="chatBot" Component={Chatbot}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
