import React from "react";
import Guide from "./Guide";
import { Link } from "react-router-dom";

const FriendlyGuide = () => {
  return (
    <div>
      <Guide
        title=" Hey! I’m your Friendly Advisor!"
        firstBtnTitle="Ask Help"
        secondBtnTitle="Local Picks"
        language="Oshiwambo"
        personality="friendly advisor"
        initialMessage="Ongiini"
      ></Guide>
    </div>
  );
};

export default FriendlyGuide;
