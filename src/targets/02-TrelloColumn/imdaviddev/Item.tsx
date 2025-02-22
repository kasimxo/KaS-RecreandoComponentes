import { Text } from "react-native";

export default function Item({ text }: { text: string }) {
  return <Text style={{ color: "white", fontWeight: "bold" }}>{text}</Text>;
}
