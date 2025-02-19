import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  Platform,
  Button,
} from "react-native";
import { creatorStyles, styles } from "../styles";

const TaskCreator = ({
  createCardHandle,
}: {
  createCardHandle: (text: string) => void;
}) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState("");
  const [hovering, setHovering] = useState(false);

  const stopEditing = () => {
    setText("");
    setEditing(false);
  };

  const createCard = () => {
    if (text !== "") createCardHandle(text);
    stopEditing();
  };

  return (
    <View style={creatorStyles.container}>
      {editing ? (
        <View>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Introduce un texto"
            placeholderTextColor={"#849aa8"}
            onBlur={createCard}
            autoFocus
            multiline
            style={[
              creatorStyles.input,
              Platform.OS === "web" && ({ outlineStyle: "none" } as any),
            ]}
          />

          <View style={creatorStyles.buttons}>
            <Pressable onPress={createCard} style={creatorStyles.createBtn}>
              <Text style={{ fontSize: 16 }}>Añadir tarjeta</Text>
            </Pressable>

            <Pressable onPress={stopEditing}>
              <Image
                source={require("../../../../assets/cancelar.png")}
                style={styles.icon}
                tintColor={"white"}
              />
            </Pressable>
          </View>
        </View>
      ) : (
        <Pressable
          onPress={() => setEditing(true)}
          onHoverIn={() => setHovering(true)}
          onHoverOut={() => setHovering(false)}
          style={[creatorStyles.addBtn, hovering && creatorStyles.addBtnHover]}
        >
          <Text style={styles.text}>+ Añade una tarjeta</Text>
        </Pressable>
      )}
    </View>
  );
};

export default TaskCreator;
