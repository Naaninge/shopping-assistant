import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ConversationHeader,
  Avatar,
  VoiceCallButton,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import axios from "axios";



function Chatbot({ language, personality, initialMessage }) {
  const [messages, setMessages] = useState([
    {
      message: `${initialMessage}`,
      sender: "ChatGPT",
    },
  ]);

  const [typing, setTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];

    // update our message state
    setMessages(newMessages);

    // set typing indicator
    setTyping(true);
    // process message to chatGPT  (send it over and see response)

    await processMessageToChatGPT(newMessages);
  };

 

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => ({
      sender: messageObject.sender,
      message: messageObject.message,
    }));

    try {
      const response = await axios.post(
        "https://shopping-assistant-server.onrender.com/api/chat",
        {
          messages: apiMessages,
          language,
          personality,
        }
      );

      setMessages([
        ...chatMessages,
        { message: response.data.message, sender: "ChatGPT" },
      ]);
      setTyping(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
     

  return (
    <div style={{ position: "relative", height: "60vh", width: "95vw" }}>
      <MainContainer
      >
        <ChatContainer>
          <ConversationHeader className="conversation-header">
            <Avatar
              name="Emily"
              src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
            ></Avatar>
            <ConversationHeader.Content
              info="Active 10 mins ago"
              userName="Emily"
            />
            <ConversationHeader.Actions>
              <VoiceCallButton />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={
              typing ? (
                <TypingIndicator content=" typing"></TypingIndicator>
              ) : null
            }
          >
            {messages.map((message, i) => {
              return (
                <Message key={i} model={message} className="message"></Message>
              );
            })}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onSend={handleSend}
            className="message-input"
          ></MessageInput>
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default Chatbot;
