import { useEffect, useState } from "react";
import service from "./service";
import { styles } from "./styles";
import { Text, View } from "react-native";
import { Data } from "./interfaces";
import GridData from "./components/GridData";
import MonthsList from "./ui/MonthsList";
import DaysList from "./ui/DaysList";
import { colors } from "./constants";
import LessMore from "./ui/LessMore";

export default function GithubCalendar() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    service.getData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerCalendar}>
        <MonthsList />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <DaysList />
          <GridData data={data} />
        </View>
      </View>
      <LessMore />
    </View>
  );
}
