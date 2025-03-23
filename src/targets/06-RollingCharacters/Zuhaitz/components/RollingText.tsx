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
    const timing = (duration * 1000) / text.length;
    index.current = 0;
    disappear();

    const rollText = setInterval(() => {
      let dum = text.slice(0, index.current);

      for (let i = index.current; i < text.length; i++) {
        dum += chars[Math.floor(Math.random() * chars.length)];
      }

      finalText.current = text.slice(0, index.current);
      setAnimatedText(dum);
    }, timing / 2);

    const addIndex = setInterval(() => {
      if (index.current >= text.length) {
        appear();
        return clearInterval(addIndex);
      }
      index.current += 1;
    }, timing);

    return () => {
      clearInterval(rollText);
      clearInterval(addIndex);
    };
  }, [text, duration]);

  // Animations
  const maxWidth = useState(new Animated.Value(0))[0];

  const appear = () => {
    Animated.timing(maxWidth, {
      toValue: 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const disappear = () => {
    Animated.timing(maxWidth, {
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

      <Animated.View style={{ maxWidth: maxWidth, overflow: "hidden" }}>
        <Image
          source={require("@assets/controlar.png")}
          style={styles.icon}
          tintColor={accentColor}
        />
      </Animated.View>
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
