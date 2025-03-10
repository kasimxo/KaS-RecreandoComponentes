import { View } from "react-native";

import MonthList from "./MonthList";
import DayList from "./DayList";
import DayCell from "./DayCell";
import { calendar } from "../styles";

const Calendar = ({ activity }: { activity: number[][] }) => {
  return (
    <View style={calendar.container}>
      <MonthList />

      <View style={calendar.daysContainer}>
        <DayList />

        {activity.map((week, id) => (
          <View key={`${id}`} style={calendar.week}>
            {week.map((day, id) => (
              <DayCell key={`${id}`} id={id} commitsDay={day} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Calendar;
