import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    width: 300,
    alignSelf: "center",
  },
  chatContainer: {
    gap: 10,
  },
  flatlistContent: {
    gap: 10,
    backgroundColor: "#aaaaaa",
    flexGrow: 1,
  },
  flatList: {
    height: 400,
  },
  menu: {
    transform: [{ rotate: "90deg" }],
    alignSelf: "flex-end",
  },
  chatContent: {
    backgroundColor: "#e2ffc9",
  },
  chat: {
    alignSelf: "flex-end",
  },
  dateAndReadContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
  },
  rightReadedIcon: {
    marginLeft: -20,
  },
  readedContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});
