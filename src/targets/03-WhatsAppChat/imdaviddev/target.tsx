import { View } from "react-native";
import WhatsAppHeader from "./ui/WhatsAppHeader";
import Chat from "./components/Chat";
import AddMessage from "./components/AddMessage";
import { WhatsAppProvider } from "./context/WhatsAppContext";
import GenerateData from "../data";
import colors from "./colors";

export default function WhatsAppChat() {
  return (
    <WhatsAppProvider initMessages={GenerateData().messages}>
      <View
        style={{
          flex: 1,
          borderRadius: 10,
          minHeight: 500,
          minWidth: 600,
          marginBottom: 50,
        }}
      >
        <WhatsAppHeader />
        <Chat />
        <AddMessage />
      </View>
    </WhatsAppProvider>
  );
}
