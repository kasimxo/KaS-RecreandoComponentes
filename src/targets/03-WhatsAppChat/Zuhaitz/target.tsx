import { useEffect, useState } from "react";
import { View, Text } from "react-native";

import GenerateData from "../data";
import { ChatLog } from "./types";
import { ChatHeader } from "./components";

import { chatStyles } from "./styles";

const WhatsAppChat = () => {
  const chat: ChatLog = GenerateData();
  const [messages, setMessages] = useState(chat.messages);
  const [members, setMembers] = useState([] as string[]);

  useEffect(() => {
    setMembers([...new Set(messages.map((message) => message.user))]);
  }, [messages]);

  return (
    <View style={chatStyles.container}>
      <ChatHeader chatName="Chat de grupo" members={members} />
    </View>
  );
};

export default WhatsAppChat;
