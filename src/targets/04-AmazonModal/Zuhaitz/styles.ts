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
    overflow: "hidden",
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
    borderBottomWidth: 2,
    borderBottomColor: "#d5d9d9",
    backgroundColor: "#f0f2f2",
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
