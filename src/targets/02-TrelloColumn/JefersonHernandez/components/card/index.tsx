import { Pressable, Text, TextProps, View, ViewProps } from "react-native";
import { CancelIcon } from "../cancel-icon";
import { styles } from "./styles";

type ItemProps = TextProps & {
  onRemove: () => void;
};

function Title({ children }: TextProps) {
  return <Text style={styles.title}>{children}</Text>;
}

function Item({ children, onRemove }: ItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{children}</Text>
      <Pressable
        onPress={onRemove}
        style={({ pressed }) => [
          styles.cancelPressable,
          {
            backgroundColor: pressed ? "#333" : "#22272b",
          },
        ]}
      >
        <CancelIcon />
      </Pressable>
    </View>
  );
}

function Card({ children, ...rest }: ViewProps) {
  return (
    <View style={styles.card} {...rest}>
      {children}
    </View>
  );
}

Card.Title = Title;
Card.Item = Item;

export default Card;
