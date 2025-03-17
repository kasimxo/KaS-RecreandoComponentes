import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import RollingText from "./components/RollingText";
import GenerateData from "../data";

const RollinCharacters = () => {
  const [text, setText] = useState(GenerateData());

  const generateNewText = () => setText(GenerateData());

  return (
    <View style={{ marginBottom: 20 }}>
      <RollingText text={text} duration={1} />
      <Pressable onPress={generateNewText} style={{ backgroundColor: "green" }}>
        <Text style={{ color: "white", fontSize: 30, textAlign: "center" }}>
          ME
        </Text>
      </Pressable>
    </View>
  );
};

export default RollinCharacters;
