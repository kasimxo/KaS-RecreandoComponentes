import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { problems } from "../constants";

const Dropdown = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <Pressable onPress={() => setExpanded(!expanded)} style={dropdown.input}>
        <Text style={{ flex: 1 }}>Elegir</Text>
        <Text>&#11167;</Text>
      </Pressable>

      {expanded && (
        <View>
          <FlatList
            data={problems}
            renderItem={({ item }) => (
              <Pressable key={item.id} onPress={() => {}}>
                <Text>{item.text}</Text>
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown;

const dropdown = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#d5d9d9",
    borderRadius: 5,
    backgroundColor: "#f0f2f2",
  },
});
