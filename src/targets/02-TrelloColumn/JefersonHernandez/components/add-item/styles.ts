import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  hovered: {
    backgroundColor: "#2c2e2f",
  },
  pressable: {
    backgroundColor: "#22272b",
    padding: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderRadius: 6,
  },
  image: {
    width: 18,
    height: 18,
    transform: [{ rotate: "45deg" }],
  },
  text: {
    color: "#9ba6af",
    fontSize: 16,
  },
});
