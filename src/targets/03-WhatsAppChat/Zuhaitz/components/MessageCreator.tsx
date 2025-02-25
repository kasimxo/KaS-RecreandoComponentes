import { useEffect, useState } from "react";
import { View, TextInput, Pressable, Platform, Text } from "react-native";
import { messageCreatorStyles } from "../styles";

const MessageCreator = () => {
  const [text, setText] = useState("");
  const [editing, setEditing] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (text.length === 0) setHeight(0);
    setEditing(text.length > 0);
  }, [text]);

  const createMessage = () => {
    setText("");
  };

  return (
    <View style={messageCreatorStyles.container}>
      <View style={messageCreatorStyles.textContainer}>
        <Text style={messageCreatorStyles.emoji}>&#128512;</Text>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Introduce un mensaje"
          multiline
          numberOfLines={1}
          onContentSizeChange={(e) =>
            setHeight(e.nativeEvent.contentSize.height)
          }
          placeholderTextColor={"gray"}
          style={[
            messageCreatorStyles.textInput,
            Platform.OS === "web" && ({ outlineStyle: "none" } as any),
            height !== 0 && { height: height },
          ]}
        />
      </View>
      <Pressable
        onPress={createMessage}
        style={messageCreatorStyles.sendButton}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            textAlign: "center",
          }}
        >
          &#11166;
        </Text>
      </Pressable>
    </View>
  );
};

export default MessageCreator;
