import { useEffect, useState } from "react";
import { View } from "react-native";

import GenerateData from "../data";
import RollingText from "./components/RollingText";

const RollinCharacters = () => {
  const [text, setText] = useState(GenerateData());
  const generateNewText = () => setText(GenerateData());
  const duration = 1;

  useEffect(() => {
    const newWordInterval = setInterval(generateNewText, duration * 3000);
    return () => clearInterval(newWordInterval);
  }, []);

  return (
    <View style={{ marginBottom: 20, minWidth: 300, justifyContent: "center" }}>
      <RollingText text={text} duration={duration} />
    </View>
  );
};

export default RollinCharacters;
