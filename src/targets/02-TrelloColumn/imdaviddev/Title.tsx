import { Text } from "react-native";

export default function Title({ title }: { title?: string }) {
  return (
    <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
      {title ? title : "Sin titulo"}
    </Text>
  );
}
