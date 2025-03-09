import { View, Text, Linking } from "react-native";
import { warning } from "../styles";
import LinkComponent from "./LinkComponent";

const Warning = () => {
  return (
    <View style={warning.container}>
      <View style={warning.textContainer}>
        <View style={warning.infoIcon}>
          <Text style={{ color: "white", fontWeight: "bold" }}>i</Text>
        </View>

        <Text>No introduzcas información personal.</Text>

        <LinkComponent
          text="Si necesitas ayuda con un pedido, haz clic aquí."
          fontSize={14}
          onClick={() => {}}
        />
      </View>
    </View>
  );
};

export default Warning;
