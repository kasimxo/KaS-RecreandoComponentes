import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    maxWidth: "100%",
    margin: "auto",
  },
  title: {
    marginBottom: 8,
    fontSize: 16,
    color: "white",
  },
  box: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    paddingTop: 12,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "#9198a1",
  },
  textCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 14,
    textTransform: "capitalize",
    color: "white",
  },
  secondaryText: {
    fontSize: 14,
    color: "#9198a1",
  },
});

export const calendar = StyleSheet.create({
  container: {
    paddingBottom: 8,
  },
  monthsText: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginHorizontal: 8,
    marginBottom: 4,
    paddingLeft: 34,
  },
  month: {
    width: 79,
  },
  daysContainer: {
    display: "flex",
    flexDirection: "row",
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
    width: 16,
    height: 16,
    borderRadius: 2,
  },
});

export const footerStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
    paddingHorizontal: 8,
  },
  colorGuide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    color: "#9198a1",
  },
});
