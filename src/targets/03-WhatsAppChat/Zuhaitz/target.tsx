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
    setMembers(["Yo", ...new Set(messages.map((message) => message.user))]);
  }, [messages]);

  useEffect(() => {
    let temp = {} as { [key: string]: string };
    members.map((member, i) => (temp[member] = colors[i]));
    setColorUser(temp);
  }, [members]);

  const onCreateMessage = (text: string) => {
    const temp = messages;

    temp.push({
      date: new Date(Date.now() - 7 * 24 * 3600 * 1000),
      user: "",
      content: text.trim(),
    });
    console.log(temp);

    setMessages([...temp]);
  };

  return (
    <View style={chatStyles.container}>
      <ChatHeader chatName="Chat de grupo" members={members} />
      <View style={chatStyles.chatZone}>
        <MessageList messages={messages} colors={colorUser} />
        <MessageCreator onCreateMessage={onCreateMessage} />
      </View>
    </View>
  );
};

export default WhatsAppChat;
