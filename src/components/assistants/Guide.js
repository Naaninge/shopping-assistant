import React from 'react'
import { Link } from 'react-router-dom';
import Chatbot from "../../ChatBot";

const Guide = ({title,firstBtnTitle,secondBtnTitle,language,personality,initialMessage}) => {
  return (
    <div className="guides">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div >
        <Chatbot  language={language} personality={personality} initialMessage={initialMessage}></Chatbot>
      </div>
      <div className="options">
        <button>{firstBtnTitle}</button>
        <button>{secondBtnTitle}</button>
        <Link to="/categories">
          <button>Food Categories</button>
        </Link>
      </div>
    </div>
  );
}

export default Guide
