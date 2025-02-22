import { TouchableOpacity, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: 20,
    height: 20,
  },
  item: {
    width: 20,
    height: 2,
    backgroundColor: "white",
    position: "absolute",
  },
  firstItem: {
    transform: [{ rotate: "45deg" }],
  },
  lastItem: {
    transform: [{ rotate: "-45deg" }],
  },
});

export default function IconoDelete({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.list} onPress={onPress}>
      <View style={[styles.item, styles.firstItem]} />
      <View style={[styles.item, styles.lastItem]} />
    </TouchableOpacity>
  );
}
