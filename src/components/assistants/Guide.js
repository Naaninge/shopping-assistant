import React from 'react'
import { Link } from 'react-router-dom';

const Guide = ({title,firstBtnTitle,secondBtnTitle}) => {
  return (
    <div className="guides">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="chat-container">
        <div className="chat-input">
          <input
            type="text"
            name="prompt"
            id="prompt"
            placeholder="Type your message... "
            className="input-field"
          />
          <button class="send-button">Send</button>
        </div>
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
