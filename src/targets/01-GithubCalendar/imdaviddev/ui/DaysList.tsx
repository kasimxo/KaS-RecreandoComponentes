import { FlatList, Text, View } from "react-native";
import { days } from "../constants";
import { styles } from "../styles";

export default function DaysList() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        maxWidth: 30,
        alignItems: "center",
      }}
    >
      <FlatList
        style={styles.daysList}
        data={days}
        renderItem={({ item }) => (
          <Text style={{ color: "white", textAlign: "center" }}>
            {item.label}
          </Text>
        )}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-around",
          paddingBottom: 5,
        }}
      />
    </View>
  );
}
