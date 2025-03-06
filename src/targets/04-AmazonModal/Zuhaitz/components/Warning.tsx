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
          onClick={() =>
            Linking.openURL(
              "https://www.amazon.es/hz/contact-us/foresight/hubgateway?ref_=tell_amazon"
            )
          }
        />
      </View>
    </View>
  );
};

export default Warning;
