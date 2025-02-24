import { useEffect, useRef } from "react";
import { View, Text, FlatList } from "react-native";
import { Message } from "../types";
import { styles } from "../styles";

const MessageList = ({ messages }: { messages: Message[] }) => {
  const flatListRef = useRef(null as FlatList<Message> | null);

  useEffect(() => {
    flatListRef.current?.scrollToOffset({ offset: 1000 });
  }, [flatListRef]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={(ref) => (flatListRef.current = ref)}
        data={messages}
        renderItem={({ item }) => (
          <Text style={[styles.text]}>{item.content}</Text>
        )}
        keyExtractor={(item, i) => {
          return `${i}`;
        }}
      />
    </View>
  );
};

export default MessageList;
