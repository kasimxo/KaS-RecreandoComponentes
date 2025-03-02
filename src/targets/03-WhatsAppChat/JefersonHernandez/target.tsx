import { useMemo, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import GenerateData from "../data";
import { ChatBox } from "./components/ChatBox";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { MenuIcon } from "./components/Menu-Icon";
import { ReadedIcon } from "./components/ReadedIcon";
import { formatDate } from "./helpers/date";
import { generateId } from "./helpers/generateId";
import { sanitizeChatLog } from "./helpers/sanitizeChatLog";
import { styles } from "./styles";
import { ChatLog, Message } from "./types";

export const whatsappColors = [
  "#ffad46",
  "#ff6d1b",
  "#f06292",
  "#ba68c8",
  "#4fc3f7",
  "#64b5f6",
  "#4db6ac",
  "#81c784",
  "#ffd54f",
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * whatsappColors.length);
  return whatsappColors[randomIndex];
};

const data = sanitizeChatLog(
  GenerateData().messages.map((message) => ({ _id: generateId(), ...message }))
);

const userColors = (() => {
  const colors: Record<string, string> = {};

  data.forEach((element) => {
    element.messages.map((item) => {
      if (colors[item.user] === undefined) {
        colors[item.user] = getRandomColor();
      }
    });
  });

  return colors;
})();

export default function WhatsAppChat() {
  const flatlist = useRef<FlatList<ChatLog>>(null);
  const [chats, setChats] = useState<Message[]>([]);

  function handleAddChat(message: Message) {
    setChats((prev) => [...prev, message]);
    setTimeout(() => {
      flatlist.current?.scrollToEnd({ animated: true });
    }, 100);
  }

  const memoizedData = useMemo(() => {
    return [...data, ...sanitizeChatLog(chats)];
  }, [chats]);

  return (
    <View style={styles.container}>
      <Header>
        <MenuIcon tintColor="white" style={styles.menu} />
      </Header>
      <View style={styles.chatContainer}>
        <FlatList
          ref={flatlist}
          data={memoizedData}
          renderItem={({ item }) => (
            <ChatBox style={item.messages[0].user === "Tu" ? styles.chat : {}}>
              {item.messages.map((item, index) => (
                <ChatBox.Content
                  key={item._id.toString()}
                  style={item.user === "Tu" ? styles.chatContent : {}}
                >
                  {index === 0 && (
                    <ChatBox.Name
                      style={{
                        color: userColors[item.user],
                      }}
                    >
                      {item.user}
                    </ChatBox.Name>
                  )}
                  <ChatBox.Text>{item.content}</ChatBox.Text>
                  <View style={styles.dateAndReadContainer}>
                    <ChatBox.Date>{formatDate(item.date)}</ChatBox.Date>
                    <View style={styles.readedContainer}>
                      <ReadedIcon tintColor="#36b0c7" />
                      <ReadedIcon
                        tintColor="#36b0c7"
                        style={styles.rightReadedIcon}
                      />
                    </View>
                  </View>
                </ChatBox.Content>
              ))}
            </ChatBox>
          )}
          contentContainerStyle={styles.flatlistContent}
          style={styles.flatList}
          keyExtractor={(item) => item.messages[0]._id.toString()}
        />
      </View>
      <Input onAdd={handleAddChat} />
    </View>
  );
}
