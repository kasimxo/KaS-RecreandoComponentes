import { useEffect, useState } from "react";
import { View, TextInput, Pressable, Platform, Text } from "react-native";
import { messageCreatorStyles } from "../styles";

const MessageCreator = ({
  onCreateMessage,
}: {
  onCreateMessage: (text: string) => void;
}) => {
  const [text, setText] = useState("");
  const [editing, setEditing] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (text.length === 0) setHeight(0);
    setEditing(text.length > 0);
  }, [text]);

  const createMessage = () => {
    if (!editing) return;

    onCreateMessage(text);

    setEditing(false);
    setText("");
  };

  return (
    <View style={messageCreatorStyles.container}>
      <View style={messageCreatorStyles.textContainer}>
        <Text style={messageCreatorStyles.symbol}>&#128512;</Text>
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
        {editing ? (
          <Text style={messageCreatorStyles.symbol}>&#11166;</Text>
        ) : (
          <Text style={messageCreatorStyles.symbol}>&#127908;</Text>
        )}
      </Pressable>
    </View>
  );
};

export default MessageCreator;
