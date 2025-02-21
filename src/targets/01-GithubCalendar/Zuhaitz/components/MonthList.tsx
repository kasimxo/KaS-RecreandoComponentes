import { View, Text } from "react-native";
import { months } from "../constants";
import { calendar, styles } from "../styles";

const MonthList = () => {
  return (
    <View style={calendar.monthsText}>
      {months.map((month) => (
        <View key={month}>
          <Text style={[styles.text, calendar.month]}>{month}</Text>
        </View>
      ))}
      <Text style={[styles.text, calendar.month]}>{months[0]}</Text>
    </View>
  );
};

export default MonthList;
