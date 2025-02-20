import { View, Text } from "react-native";

import GenerateData from "../data";

import { DayList, Footer, MonthList } from "./components";
import { colors } from "./constants";
import { calendar, styles } from "./styles";

export default function GithubCalendar() {
  const activity: number[][] = GenerateData();
  const list: number[] = activity.map((week) =>
    week.reduce((a, v) => (a = a + v))
  );
  const contr = list.reduce((a, v) => (a = a + v));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {contr.toLocaleString("en-US")} contributions in the last year
      </Text>

      <View style={styles.box}>
        <View style={calendar.container}>
          <MonthList />

          <View style={calendar.daysContainer}>
            <DayList />

            {activity.map((week, id) => (
              <View key={`${id}`} style={calendar.week}>
                {week.map((day, id) => (
                  <View
                    key={`${id}`}
                    style={[calendar.day, { backgroundColor: colors[day] }]}
                  />
                ))}
              </View>
            ))}
          </View>
        </View>

        <Footer />
      </View>
    </View>
  );
}
