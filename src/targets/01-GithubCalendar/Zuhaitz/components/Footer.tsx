import { View, Text, Linking } from "react-native";
import { calendar, footerStyles, styles } from "../styles";
import { colors } from "../constants";

const Footer = () => {
  return (
    <View style={footerStyles.container}>
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

      <View style={footerStyles.colorGuide}>
        <Text style={styles.secondaryText}>Less</Text>
        <View style={[calendar.day, { backgroundColor: colors[0] }]} />
        <View style={[calendar.day, { backgroundColor: colors[2] }]} />
        <View style={[calendar.day, { backgroundColor: colors[3] }]} />
        <View style={[calendar.day, { backgroundColor: colors[4] }]} />
        <View style={[calendar.day, { backgroundColor: colors[5] }]} />
        <Text style={styles.secondaryText}>More</Text>
      </View>
    </View>
  );
};

export default Footer;
