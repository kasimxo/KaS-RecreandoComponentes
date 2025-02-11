import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0d1117",
    flex: 1,
    borderRadius: 5,
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 20,
    color: "#c9d1d9",
    fontFamily: "Arial",
    marginBottom: 10,
  },
  containerCalendar: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 5,
    overflow: "hidden",
    maxWidth: "100%",
  },
  cellData: {
    width: 20,
    height: 20,
    padding: 10,
    borderRadius: 4,
    margin: 4,
  },
  gridData: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: 5,
    maxHeight: 220,
    maxWidth: 220,
  },
  gridDataColumn: {
    display: "flex",
    flexDirection: "column",
  },
  daysList: {
    alignSelf: "flex-start",
  },
  monthsList: {
    alignSelf: "flex-start",
  },
  text: {
    color: "#c9d1d9",
    fontWeight: "500",
  },
});
