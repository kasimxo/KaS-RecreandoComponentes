import { View, Text } from "react-native";
import { styles } from "../styles";

const DayList = () => {
  return (
    <View style={styles.textCol}>
      <Text style={styles.text}>Mon</Text>
      <Text style={styles.text}>Wed</Text>
      <Text style={styles.text}>Fri</Text>
    </View>
  );
};

export default DayList;
