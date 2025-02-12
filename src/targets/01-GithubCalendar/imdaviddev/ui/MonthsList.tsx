import { FlatList, Text } from "react-native";
import { months } from "../constants";
import { View, StyleSheet } from "react-native";

export default function MonthsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={months}
        renderItem={({ item }) => <Text style={styles.text}>{item.label}</Text>}
        keyExtractor={(item) => item.toString()}
        numColumns={12}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  columnWrapper: {
    justifyContent: "space-around",
  },
});
