import { useEffect, useRef } from "react";
import { View, FlatList, Platform } from "react-native";
import { Message as MessageType } from "../types";
import Message from "./Message";

const MessageList = ({
  messages,
  colors,
}: {
  messages: MessageType[];
  colors: { [key: string]: string };
}) => {
  const flatListRef = useRef(null as FlatList<MessageType> | null);

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ padding: 5 }}
        ref={(ref) => (flatListRef.current = ref)}
        data={messages}
        // showsVerticalScrollIndicator={Platform.OS === "web" ? false : true}
        renderItem={({ item }) => (
          <Message message={item} color={colors[item.user]} />
        )}
        keyExtractor={(_, i) => {
          return `${i}`;
        }}
      />
    </View>
  );
};

export default MessageList;
