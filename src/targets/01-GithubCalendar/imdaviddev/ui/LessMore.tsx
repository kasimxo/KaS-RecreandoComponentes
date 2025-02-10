import { Text, View } from "react-native";
import { styles } from "../styles";

const colorLevels = [
  "rgb(59, 59, 58)",
  "#9be9a8",
  "#40c463",
  "#40c463",
  "#30a14e",
  "#216e39",
];

export default function LessMore() {
  return (
    <View
      style={{
        flexDirection: "row",
        columnGap: 5,
        justifyContent: "flex-end",
        marginTop: 2,
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
