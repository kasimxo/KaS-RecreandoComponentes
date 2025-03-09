import { View, Text, TextInput, Platform } from "react-native";
import { commentBox } from "../styles";

type TextBoxParams = {
  text: string;
  setText: (value: string) => void;
};

const TextBox = ({ text, setText }: TextBoxParams) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
        Comentarios (opcional)
      </Text>
      <TextInput
        value={text}
        onChangeText={setText}
        multiline
        numberOfLines={3}
        style={[
          commentBox.input,
          Platform.OS === "web" &&
            ({
              outlineColor: "#246fb6",
              outlineOffset: 5,
            } as any),
        ]}
      />
    </View>
  );
};

export default TextBox;
