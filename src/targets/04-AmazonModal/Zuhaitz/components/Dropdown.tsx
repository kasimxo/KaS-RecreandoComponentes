import { useState } from "react";
import { Pressable, Text, Touchable, View } from "react-native";

const Dropdown = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <Pressable onPress={() => setExpanded(!expanded)}>
        <Text>Elegir</Text>
        <Text>&#11167;</Text>
      </Pressable>
    </View>
  );
};

export default Dropdown;
