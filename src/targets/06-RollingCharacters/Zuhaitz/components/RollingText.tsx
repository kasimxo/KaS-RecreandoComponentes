import { useEffect, useRef, useState } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

type RollingTextProps = {
  text: string;
  duration: number;
  accentColor?: string;
};

const chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+=[]{}|;:,.<>?/~";

const RollingText = ({
  text,
  duration,
  accentColor = "#7f5cff",
}: RollingTextProps) => {
  const index = useRef(0);
  const finalText = useRef("");
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    index.current = 0;
    disappear();

    const rollText = setInterval(() => {
      let dum = text.slice(0, index.current);

      for (let i = index.current; i < text.length; i++) {
        dum += chars[Math.floor(Math.random() * chars.length)];
      }

      setAnimatedText(dum);
      finalText.current = text.slice(0, index.current);

      if (index.current >= text.length) {
        appear();
        return clearInterval(rollText);
      }
      index.current += 1;
    }, (duration * 1000) / text.length);

    return () => clearInterval(rollText);
  }, [text, duration]);

  // Animations
  const opacity = useState(new Animated.Value(0))[0];

  const appear = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const disappear = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Soy </Text>

      <Text style={styles.text}>
        <Text style={{ color: "gray" }}>{animatedText}</Text>
        <Text style={[styles.main, { color: accentColor }]}>
          {finalText.current}
        </Text>
      </Text>

      <Animated.Image
        source={require("@assets/controlar.png")}
        style={[styles.icon, { opacity: opacity }]}
        tintColor={accentColor}
      />
    </View>
  );
};

export default RollingText;

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  text: {
    color: "white",
    fontSize: 30,
  },
  main: {
    position: "absolute",
    left: 0,
    width: "100%",
  },
  icon: {
    width: 40,
    height: 40,
  },
});
