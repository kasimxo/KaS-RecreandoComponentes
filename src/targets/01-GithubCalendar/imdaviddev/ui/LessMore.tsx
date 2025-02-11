import { Text, View } from "react-native";
import { styles } from "../styles";

const colorLevels = [
  "rgb(22, 27, 34)",
  "#9be9a8",
  "#40c463",
  "#006d32",
  "#26a641",
  "#39d353",
];

export default function LessMore() {
  return (
    <View
      style={{
        flexDirection: "row",
        columnGap: 5,
        justifyContent: "flex-end",
        marginVertical: 5,
      }}
    >
      <Text style={styles.text}>Less</Text>
      {colorLevels.map((color, index) => (
        <View
          key={index}
          style={{
            backgroundColor: color,
            width: 20,
            height: 20,
            borderRadius: 4,
          }}
        />
      ))}
      <Text style={styles.text}>More</Text>
    </View>
  );
}
