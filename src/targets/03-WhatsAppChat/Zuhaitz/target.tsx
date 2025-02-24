import { useEffect, useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";

import GenerateData from "../data";
import { ChatLog } from "./types";
import { ChatHeader, MessageList } from "./components";

import { chatStyles, styles } from "./styles";

const WhatsAppChat = () => {
  const chat: ChatLog = GenerateData();
  const [messages, setMessages] = useState(chat.messages);
  const [members, setMembers] = useState([] as string[]);

  useEffect(() => {
    console.log(messages);

    setMembers([...new Set(messages.map((message) => message.user))]);
  }, [messages]);

  return (
    <View style={chatStyles.container}>
      <ChatHeader chatName="Chat de grupo" members={members} />
      <View style={chatStyles.chatZone}>
        <MessageList messages={messages} />
      </View>
    </View>
  );
};

export default WhatsAppChat;
