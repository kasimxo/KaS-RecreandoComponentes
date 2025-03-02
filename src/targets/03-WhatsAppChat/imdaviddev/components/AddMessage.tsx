import { TextInput, View } from "react-native";
import Button from "./Boton";
import { useWhatsApp } from "../context/WhatsAppContext";
import { useState } from "react";

export default function AddMessage() {
  const [newMessage, setNewMessage] = useState("");
  const { sendMessage } = useWhatsApp();
  return (
    <View
      style={{
        alignItems: "flex-start",
        flexDirection: "row",
        padding: 10,
        borderColor: "#ECE5DD",
        height: 60,
        justifyContent: "space-between",
        backgroundColor: "white",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <TextInput
        style={{
          height: 40,
          width: "100%",
          borderColor: "gray",
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
          marginRight: 10,
        }}
        placeholder="Type a message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.nativeEvent.text)}
      />
      <Button
        title="Send"
        onPress={() => {
          sendMessage(newMessage);
          setNewMessage("");
        }}
        buttonStyle={{
          backgroundColor: "#25D366",
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
        }}
        textStyle={{
          color: "#FFFFFF",
          fontSize: 16,
        }}
      />
    </View>
  );
}
