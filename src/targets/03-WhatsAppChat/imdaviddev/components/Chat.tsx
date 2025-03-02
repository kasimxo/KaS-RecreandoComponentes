import { ScrollView, Text, View } from "react-native";
import { useWhatsApp } from "../context/WhatsAppContext";
import colors, { colors_users } from "../colors";

export default function Chat() {
  const { messages } = useWhatsApp();

  return (
    <ScrollView
      style={{
        flex: 1,
        maxHeight: 500,
        backgroundColor: colors.background,
        padding: 10,
      }}
      contentContainerStyle={{
        paddingBottom: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      {messages.map((message, index) => (
        <View
          key={index}
          style={{
            padding: 10,
            margin: 5,
            borderRadius: 5,
            backgroundColor:
              message.user === "David"
                ? colors.bangladeshGreen
                : colors_users[message.user],
            alignSelf: message.user === "David" ? "flex-end" : "flex-start",
            maxWidth: "100%",
            minWidth: 180,
            gap: 5,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            ~ {message.user}
          </Text>
          <Text style={{ color: "white" }}>{message.content}</Text>
          <Text style={{ fontSize: 10, color: "white" }}>
            {message.date.toLocaleString()}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
