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

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

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
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }

      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content: `Respond to the user in ${language} as a ${personality} shopping assistant.`,
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage,
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      }).then((data) => {
        setMessages([
          ...chatMessages,
          { message: data.choices[0].message.content, sender: "ChatGPT" },
        ]);
        setTyping(false);
      });
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
