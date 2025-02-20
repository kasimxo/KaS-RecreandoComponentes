import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    marginBottom: 8,
    fontSize: 16,
    color: "white",
  },
  textCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 12,
    textTransform: "capitalize",
    color: "white",
  },
  secondaryText: {
    fontSize: 12,
    color: "#9198a1",
  },
});

export const calendar = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    paddingTop: 12,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "#9198a1",
  },
  monthsText: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginHorizontal: 8,
    marginBottom: 4,
    paddingLeft: 30,
  },
  daysContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginHorizontal: 8,
  },
  week: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  day: {
    width: 10,
    height: 10,
    borderRadius: 2,
  },
});

export const footerStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  colorGuide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    color: "#9198a1",
  },
});
