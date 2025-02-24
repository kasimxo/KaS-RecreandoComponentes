import React, { createContext, useState, useContext, ReactNode } from "react";
import { Message } from "../types";

interface WhatsAppContextProps {
  messages: Message[];
  sendMessage: (text: string) => void;
}

const WhatsAppContext = createContext<WhatsAppContextProps | undefined>(
  undefined
);

export const WhatsAppProvider: React.FC<{
  children: ReactNode;
  initMessages?: any[];
}> = ({ children, initMessages = [] }) => {
  const [messages, setMessages] = useState<Message[]>(initMessages);

  const sendMessage = (text: string) => {
    const newMessage: Message = {
      date: new Date(),
      user: "David",
      content: text,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <WhatsAppContext.Provider value={{ messages, sendMessage }}>
      {children}
    </WhatsAppContext.Provider>
  );
};

export const useWhatsApp = (): WhatsAppContextProps => {
  const context = useContext(WhatsAppContext);
  if (!context) {
    throw new Error("useWhatsApp debe ser usado con un WhatsAppProvider");
  }
  return context;
};
