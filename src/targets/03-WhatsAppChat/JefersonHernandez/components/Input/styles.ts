import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#aaaaaa",
    padding: 10,
  },
  input: {
    borderRadius: 30,
    backgroundColor: "white",
    padding: 10,
    height: 45,
    paddingRight: 50,
    ...(Platform.OS === "web" && { outlineStyle: "none" }),
  },
  addTask: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
  },
  addTaskText: {},
  cancelPressable: {
    borderRadius: 45,
    position: "absolute",
    bottom: 0,
    top: 0,
    right: 16,
    padding: 5,
    alignSelf: "center",
    transform: [{ rotate: "45deg" }],
  },
});
