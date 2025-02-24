import { StyleSheet } from "react-native";

const chatStyles = StyleSheet.create({
  container: {
    minWidth: 300,
    width: "100%",
  },
});

const chatHeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: "#075e55",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 5,
    paddingHorizontal: 8,
  },
  groupPhoto: {
    width: 32,
    height: 32,
    borderRadius: "100%",
    backgroundColor: "white",
  },
  backBtn: {
    alignItems: "center",
  },
  otherBtn: {
    marginRight: 5,
  },
  name: {
    fontSize: 16,
  },
  members: {
    fontSize: 12,
  },
});

const styles = StyleSheet.create({ text: { color: "white" } });

export { chatStyles, chatHeaderStyles, styles };
