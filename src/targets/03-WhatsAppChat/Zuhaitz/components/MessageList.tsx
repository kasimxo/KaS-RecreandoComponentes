import { useEffect, useRef } from "react";
import { View, FlatList } from "react-native";
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

  const scrollToBottom = () => {
    // flatListRef.current?.scrollToOffset({ offset: 99999999999999 });
    // setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 500);
    setTimeout(
      () => flatListRef.current?.scrollToOffset({ offset: 99999999999999 }),
      500
    );
  };

  useEffect(() => {
    scrollToBottom();
  }, [flatListRef]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ padding: 5 }}
        ref={(ref) => (flatListRef.current = ref)}
        data={messages}
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
