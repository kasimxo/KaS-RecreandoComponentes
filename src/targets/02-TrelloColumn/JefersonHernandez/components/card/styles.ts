import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#101204",
    padding: 10,
    borderRadius: 6,
    width: 300,
    gap: 10,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#22272b",
    borderRadius: 6,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelPressable: {
    borderRadius: 45,
    alignSelf: "flex-start",
  },
  itemText: {
    color: "white",
  },
});
