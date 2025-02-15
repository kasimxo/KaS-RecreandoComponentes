import { View, Text, StyleSheet, ScrollView, Linking } from "react-native";
import React from "react";

import GenerateData from "../data";

const colors = [
  "#161b22",
  "#0e4429",
  "#0e4429",
  "#006d32",
  "#26a641",
  "#39d353",
];

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

export default function GithubCalendar() {
  const activity: number[][] = GenerateData();
  const list: number[] = activity.map((week) =>
    week.reduce((a, v) => (a = a + v))
  );
  const contr = list.reduce((a, v) => (a = a + v));

  return (
    <View style={{ margin: "auto" }}>
      <Text style={styles.title}>
        {contr.toLocaleString("en-US")} contributions in the last year
      </Text>
      <ScrollView style={styles.calendar}>
        <View style={styles.monthsText}>
          {months.map((month) => (
            <Text key={month} style={[styles.text, { width: 55 }]}>
              {month}
            </Text>
          ))}
          <Text style={[styles.text, { width: 55 }]}>{months[0]}</Text>
        </View>

        <View style={[styles.calendarContainer]}>
          <View style={styles.textCol}>
            <Text style={styles.text}>Mon</Text>
            <Text style={styles.text}>Wed</Text>
            <Text style={styles.text}>Fri</Text>
          </View>
          {activity.map((week, id) => (
            <View key={`${id}`} style={styles.week}>
              {week.map((day, id) => (
                <View
                  key={`${id}`}
                  style={[styles.day, { backgroundColor: colors[day] }]}
                />
              ))}
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <Text
            onPress={() =>
              Linking.openURL(
                "https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile"
              )
            }
            style={styles.secondaryText}
          >
            Learn how we count contributions
          </Text>

          <View style={styles.footerColors}>
            <Text style={styles.secondaryText}>Less</Text>
            <View style={[styles.day, { backgroundColor: colors[0] }]} />
            <View style={[styles.day, { backgroundColor: colors[2] }]} />
            <View style={[styles.day, { backgroundColor: colors[3] }]} />
            <View style={[styles.day, { backgroundColor: colors[4] }]} />
            <View style={[styles.day, { backgroundColor: colors[5] }]} />
            <Text style={styles.secondaryText}>More</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 8,
    fontSize: 16,
    color: "white",
  },
  calendar: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    paddingTop: 12,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "#9198a1",
  },
  calendarContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginHorizontal: 8,
  },
  monthsText: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginHorizontal: 8,
    marginBottom: 4,
    paddingLeft: 30,
  },
  textCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 12,
    textTransform: "capitalize",
    color: "white",
  },
  secondaryText: {
    fontSize: 12,
    color: "#9198a1",
  },
  week: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  day: {
    width: 10,
    height: 10,
    borderRadius: 2,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  footerColors: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    color: "#9198a1",
  },
});
