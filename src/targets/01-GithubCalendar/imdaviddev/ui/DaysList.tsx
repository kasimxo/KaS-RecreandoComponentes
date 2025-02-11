import { FlatList, Text, View } from "react-native";
import { days } from "../constants";
import { styles } from "../styles";

export default function DaysList() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        maxWidth: 25,
        alignItems: "flex-end",
        paddingBottom: 5,
      }}
    >
      <FlatList
        style={styles.daysList}
        data={days}
        renderItem={({ item }) => (
          <Text style={{ color: "white", textAlign: "right" }}>
            {item.label}
          </Text>
        )}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-around",
        }}
      />
    </View>
  );
}
