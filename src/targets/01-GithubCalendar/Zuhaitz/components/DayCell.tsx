import { View } from "react-native";
import { calendar } from "../styles";
import { colors } from "../constants";

type DayCell = {
  id: number;
  commitsDay: number;
};

const DayCell = ({ id, commitsDay }: DayCell) => {
  return (
    <View style={[calendar.day, { backgroundColor: colors[commitsDay] }]} />
  );
};

export default DayCell;
