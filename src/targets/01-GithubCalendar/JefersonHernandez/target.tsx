import { StyleSheet, Text, View } from "react-native";
import GenerateDate from "../data";
import useMemoizedWidth from "./hooks/useMemoizedWidth";

const data = GenerateDate();

const colors = [
  "#161b22",
  "#0e4429",
  "#006d32",
  "#24923b",
  "#26a641",
  "#39d353",
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DAYS = ["Mon", "Wed", "Fri"];

function CalendarColumn(props: { days: number[] }) {
  const daySize = useMemoizedWidth();

  return (
    <View style={styles.column}>
      {props.days.map((day, index) => (
        <View
          key={`${index}-${day}`}
          style={[
            styles.day,
            {
              backgroundColor: colors[day],
              width: daySize,
              height: daySize,
            },
          ]}
        />
      ))}
    </View>
  );
}

function CalendarRow(props: { data: number[][] }) {
  return (
    <View style={styles.row}>
      {props.data.map((columnData, index) => (
        <CalendarColumn key={index} days={columnData} />
      ))}
    </View>
  );
}

function CalendarSection(props: { data: number[][] }) {
  return (
    <View style={styles.calendarSection}>
      <Days />
      <View style={styles.calendarGrid}>
        <Months />
        <CalendarRow data={props.data} />
      </View>
    </View>
  );
}

function Days() {
  return (
    <View style={styles.days}>
      {DAYS.map((day) => (
        <Text key={day} style={styles.dayText}>
          {day}
        </Text>
      ))}
    </View>
  );
}

function Months() {
  return (
    <View style={styles.months}>
      {MONTHS.map((month) => (
        <Text key={month} style={styles.dayText}>
          {month}
        </Text>
      ))}
    </View>
  );
}

function Legend() {
  const daySize = useMemoizedWidth();

  return (
    <View style={styles.legend}>
      <Text style={styles.text}>Learn how we count contributions</Text>
      <View style={styles.lessMore}>
        <Text style={styles.text}>Less</Text>
        {colors.map((color) => (
          <View
            key={color}
            style={[
              styles.day,
              { backgroundColor: color, width: daySize, height: daySize },
            ]}
          />
        ))}
        <Text style={styles.text}>More</Text>
      </View>
    </View>
  );
}

export default function GithubCalendar() {
  return (
    <View style={styles.container}>
      <CalendarSection data={data} />
      <Legend />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    gap: 10,
    borderWidth: 1,
    borderColor: "#f5f5f5",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  row: {
    flexDirection: "row",
    gap: 4,
  },
  column: {
    gap: 4,
  },
  calendarGrid: {
    gap: 10,
  },
  day: {
    borderRadius: 2,
    gap: 10,
  },
  text: {
    color: "#9198a1",
  },
  lessMore: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  legend: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-between",
  },
  days: {
    justifyContent: "space-evenly",
  },
  dayText: {
    color: "#fff",
    fontWeight: "normal",
  },
  months: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-evenly",
  },
  calendarSection: {
    flexDirection: "row",
    gap: 10,
  },
});
