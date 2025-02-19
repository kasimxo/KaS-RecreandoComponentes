import { useState } from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";
import { styles, cardStyles } from "../styles";

type CardData = {
  id: number;
  text: string;
  onEditCardHandle: (id: number, text: string) => void;
  onDeleteHandle: (id: number) => void;
};

const Card = ({ id, text, onEditCardHandle, onDeleteHandle }: CardData) => {
  const [editing, setEditing] = useState(false);

  return (
    <View style={cardStyles.container}>
      <View style={{ flex: 1 }}>
        {editing ? (
          <TextInput
            value={text}
            onChangeText={(newText) => onEditCardHandle(id, newText)}
            onBlur={() => setEditing(false)}
            autoFocus
            style={[styles.text, styles.text]}
          />
        ) : (
          <Text onPress={() => setEditing(true)} style={styles.text}>
            {text}
          </Text>
        )}
      </View>

      <Pressable onPress={() => onDeleteHandle(id)}>
        <Image
          source={require("../../../../assets/cancelar.png")}
          style={styles.icon}
          tintColor={"white"}
        />
      </Pressable>
    </View>
  );
};

export default Card;
