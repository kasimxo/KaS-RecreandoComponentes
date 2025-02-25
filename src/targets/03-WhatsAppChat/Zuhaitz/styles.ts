import { StyleSheet } from "react-native";

const chatStyles = StyleSheet.create({
  container: {
    minWidth: 300,
    width: "100%",
    minHeight: 300,
    height: "100%",
    marginBottom: 20,
  },
  chatZone: {
    maxHeight: 500,
    height: "100%",
    backgroundColor: "#aaaaaa",
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

const messageStyles = StyleSheet.create({
  container: {
    maxWidth: "90%",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
  },
  textHourContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    alignItems: "flex-end",
  },
  content: {
    fontSize: 16,
  },
  date: {
    // flex: 1,
    textAlign: "right",
    fontSize: 14,
    color: "#a1a1a1",
  },
});

const messageCreatorStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 5,
    gap: 5,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    // alignItems: "center",
    gap: 5,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "white",
    height: "100%",
  },
  textInput: {
    flex: 1,
    height: "100%",
    fontSize: 20,
  },
  symbol: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  sendButton: {
    width: 43,
    height: 43,
    justifyContent: "center",
    borderRadius: "100%",
    backgroundColor: "#075e55",
  },
});

const styles = StyleSheet.create({ text: { color: "white" } });

export {
  chatStyles,
  chatHeaderStyles,
  messageStyles,
  messageCreatorStyles,
  styles,
};
