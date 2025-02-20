import { View, Text } from "react-native";
import { months } from "../constants";
import { calendar, styles } from "../styles";

const MonthList = () => {
  return (
    <View style={calendar.monthsText}>
      {months.map((month) => (
        <Text key={month} style={[styles.text, { width: 55 }]}>
          {month}
        </Text>
      ))}
      <Text style={[styles.text, { width: 55 }]}>{months[0]}</Text>
    </View>
  );
};

export default MonthList;
