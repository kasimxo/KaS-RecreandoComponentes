import { View, Text } from "react-native";
import { Message as MessageType } from "../types";
import { messageStyles } from "../styles";

type MessageData = {
  message: MessageType;
  color: string;
};

const Message = ({ message, color }: MessageData) => {
  const { user, content, date } = message;
  return (
    <View
      style={[
        { alignItems: "baseline", margin: 5 },
        !message.user && { alignItems: "flex-end" },
      ]}
    >
      <View style={messageStyles.container}>
        <Text style={[{ fontWeight: "bold", fontSize: 14, color: color }]}>
          {user}
        </Text>

        <View style={messageStyles.textHourContainer}>
          <Text style={messageStyles.content}>{content}</Text>
          <Text style={messageStyles.date}>
            {date.getHours()}:{date.getMinutes().toString().padStart(2, "0")}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Message;
