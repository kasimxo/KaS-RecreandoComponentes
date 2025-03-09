import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import { problems } from "../constants";
import { dropdown } from "../styles";

type DropdownParams = {
  selected: string;
  selectedHandle: (value: string) => void;
};

const Dropdown = ({ selected, selectedHandle }: DropdownParams) => {
  const [expanded, setExpanded] = useState(false);
  const [hovering, setHovering] = useState(-1);

  const handleSelected = (option: string) => {
    selectedHandle(option);
    setExpanded(false);
  };

  return (
    <View style={dropdown.container}>
      <Pressable onPress={() => setExpanded(!expanded)} style={dropdown.input}>
        <Text style={{ flex: 1 }}>{selected ? selected : "Elegir"}</Text>
        <Text>&#11167;</Text>
      </Pressable>

      {expanded && (
        <View style={dropdown.list}>
          <FlatList
            data={problems}
            renderItem={({ item }) => (
              <Pressable
                key={item.id}
                onPress={() => handleSelected(item.text)}
                onHoverIn={() => setHovering(item.id)}
                onHoverOut={() => setHovering(-1)}
                style={[
                  dropdown.listObject,
                  hovering === item.id && { backgroundColor: "#d5d9d9" },
                ]}
              >
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
