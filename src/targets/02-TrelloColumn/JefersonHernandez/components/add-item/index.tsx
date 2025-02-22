import { useState } from "react";
import { Pressable, Text } from "react-native";
import { CancelIcon } from "../cancel-icon";
import { styles } from "./styles";

type AddItemProps = {
  onPress: () => void;
};

export function AddItem({ onPress }: Readonly<AddItemProps>) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={[styles.pressable, isHovered && styles.hovered]}
    >
      <CancelIcon style={styles.image} />
      <Text style={styles.text}>Añade una tarjeta</Text>
    </Pressable>
  );
}
