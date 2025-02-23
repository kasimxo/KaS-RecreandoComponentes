import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    color: "#fff",
    backgroundColor: "#22272b",
    borderColor: "#22272b",
    borderWidth: 2,
    padding: 5,
    height: 50,
    ...(Platform.OS === "web" && { outlineStyle: "none" }),
  },
  inputFocused: {
    borderColor: "#579dff",
  },
  addTask: {
    backgroundColor: "#579dff",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  addTaskText: {},
  cancelPressable: {
    borderRadius: 45,
  },
});
