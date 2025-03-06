import { StyleSheet } from "react-native";

export const modal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000055",
  },
  box: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    // overflow: "hidden",
    maxWidth: "60%",
    minWidth: 300,
    width: "100%",
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  topbar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingLeft: 24,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#d5d9d9",
    backgroundColor: "#f0f2f2",
  },
  content: {
    padding: 18,
    paddingHorizontal: 24,
  },
  sendBtn: {
    padding: 6,
    paddingHorizontal: 18,
    borderRadius: 100,
    backgroundColor: "#ffd814",
  },
});

export const dropdown = StyleSheet.create({
  container: { position: "relative", zIndex: 1 },
  input: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#d5d9d9",
    borderRadius: 5,
    backgroundColor: "#f0f2f2",
  },
  list: {
    position: "absolute",
    width: "100%",
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: "#d5d9d9",
    borderRadius: 5,
    backgroundColor: "white",
  },
  listObject: {
    padding: 4,
    paddingHorizontal: 10,
  },
});

export const commentBox = StyleSheet.create({
  input: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#d5d9d9",
  },
});

export const styles = StyleSheet.create({
  link: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
