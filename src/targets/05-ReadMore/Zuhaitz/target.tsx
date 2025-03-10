import {
  View,
  Text,
  StyleSheet,
  Pressable,
  NativeSyntheticEvent,
  TextLayoutEventData,
} from "react-native";

import GenerateData from "../data";
import { useState } from "react";

const ReadMore = () => {
  const { title, content } = GenerateData();
  const [showMore, setShowMore] = useState(false);
  const [lines, setLines] = useState(10);

  // const trimmedText =
  //   content.length > 400 ? content.slice(0, 400) + "..." : content;

  const onTextLayout = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    console.log("me");
    console.log(lines, e.nativeEvent.lines.length > lines && lines !== 0);

    setShowMore(e.nativeEvent.lines.length > lines && lines !== 0);
  };

  return (
    <View style={{ margin: "auto", marginBottom: 20 }}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text
          numberOfLines={lines}
          onTextLayout={onTextLayout}
          style={styles.content}
        >
          {content}
        </Text>

        {showMore && (
          <Pressable style={styles.readMore} onPress={() => setLines(1000)}>
            <Text style={styles.readMoreText}>Read More</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default ReadMore;

const styles = StyleSheet.create({
  card: {
    maxWidth: 320,
    padding: 10,
    gap: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },

  content: {
    fontSize: 16,
    color: "white",
  },

  readMore: {
    backgroundColor: "green",
  },

  readMoreText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
});
