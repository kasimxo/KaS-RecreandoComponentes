import { Text, View } from "react-native";
import colors from "../colors";

export default function WhatsAppHeader() {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: colors.bangladeshGreen,
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <Text
        style={{
          color: colors.whiteChocolate,
          fontWeight: "bold",
          fontSize: 20,
          marginLeft: 20,
        }}
      >
        -- El grupo de los pibardos
      </Text>
    </View>
  );
}
