import React, { createContext, useState } from "react";

export const AssistantContext = createContext();

export const AssistantProvider = ({ children }) => {
  const [selectedAssistant, setSelectedAssistant] = useState("PriceAdvisor");

  return (
    <AssistantContext.Provider
      value={{ selectedAssistant, setSelectedAssistant }}
    >
      {children}
    </AssistantContext.Provider>
  );
};
