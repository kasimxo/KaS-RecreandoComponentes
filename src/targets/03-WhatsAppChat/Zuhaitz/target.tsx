import { useEffect, useState } from "react";
import { View } from "react-native";

import GenerateData from "../data";
import { ChatLog } from "./types";
import { ChatHeader, MessageCreator, MessageList } from "./components";

import { chatStyles } from "./styles";
import { colors } from "./constants";

const WhatsAppChat = () => {
  const chat: ChatLog = GenerateData();
  const [messages, setMessages] = useState(chat.messages);
  const [members, setMembers] = useState([] as string[]);
  const [colorUser, setColorUser] = useState({} as { [key: string]: string });

  useEffect(() => {
    console.log(messages);
    setMembers([...new Set(messages.map((message) => message.user))]);
  }, [messages]);

  useEffect(() => {
    let temp = {} as { [key: string]: string };
    members.map((member, i) => (temp[member] = colors[i]));
    setColorUser(temp);
  }, [members]);

  return (
    <View style={chatStyles.container}>
      <ChatHeader chatName="Chat de grupo" members={members} />
      <View style={chatStyles.chatZone}>
        <MessageList messages={messages} colors={colorUser} />
        <MessageCreator />
      </View>
    </View>
  );
};

export default WhatsAppChat;
