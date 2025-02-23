import { View, Text, ScrollView } from "react-native";
import GenerateData from "../data";
import { Calendar, Footer } from "./components";
import { styles } from "./styles";

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
        <ScrollView horizontal>
          <Calendar activity={activity} />
        </ScrollView>

        <Footer />
      </View>
    </View>
  );
}