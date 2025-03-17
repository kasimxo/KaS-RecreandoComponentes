import { useEffect, useRef, useState } from "react";
import { Text } from "react-native";

type RollingTextProps = {
  text: string;
  duration: number;
};

const chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+=[]{}|;:,.<>?/~";

const RollingText = ({ text, duration }: RollingTextProps) => {
  const index = useRef(0);
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    index.current = 0;

    const rollText = setInterval(() => {
      let dum = text.slice(0, index.current);

      for (let i = index.current; i < text.length; i++) {
        dum += chars[Math.floor(Math.random() * chars.length)];
      }

      setAnimatedText(dum);

      if (index.current >= text.length) return clearInterval(rollText);
      index.current += 1;
    }, (duration * 1000) / text.length);
  }, [text, duration]);

  return (
    <Text style={{ color: "white", fontSize: 30, textAlign: "center" }}>
      {animatedText}
    </Text>
  );
};

export default RollingText;
