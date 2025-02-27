import { View, Text, Pressable, Image } from "react-native";
import { chatHeaderStyles, styles } from "../styles";

const ChatHeader = ({
  chatName,
  members,
}: {
  chatName: string;
  members: string[];
}) => {
  return (
    <View style={chatHeaderStyles.container}>
      <Pressable style={chatHeaderStyles.backBtn}>
        <Text style={[styles.text, { fontSize: 20 }]}>&#11164;</Text>
      </Pressable>

      <Image style={chatHeaderStyles.groupPhoto} />

      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={1}
          style={[styles.text, chatHeaderStyles.name, { maxWidth: 180 }]}
        >
          {chatName}
        </Text>
        <Text
          numberOfLines={1}
          style={[styles.text, chatHeaderStyles.members, { maxWidth: 180 }]}
        >
          {members.join(", ")}
        </Text>
      </View>

      <Pressable style={chatHeaderStyles.otherBtn}>
        <Text style={[styles.text, { fontSize: 20 }]}>&#9742;</Text>
      </Pressable>

      <Pressable style={chatHeaderStyles.otherBtn}>
        <Text style={[styles.text, { fontSize: 20 }]}>&#10226;</Text>
      </Pressable>
    </View>
  );
};

export default ChatHeader;
