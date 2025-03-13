import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  LayoutChangeEvent,
  Easing,
} from "react-native";

import GenerateData from "../data";
import { useEffect, useState } from "react";

const DEFAULT_LINES = 10;
const LINE_HEIGHT = 20;
const CONTENT_SIZE = DEFAULT_LINES * LINE_HEIGHT;

const ReadMore = () => {
  const [data, setData] = useState(GenerateData());
  const [showMore, setShowMore] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Animations
  const valueAnimated = useState(new Animated.Value(CONTENT_SIZE))[0];

  const expand = () => {
    Animated.timing(valueAnimated, {
      toValue: 1000,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setExpanded(true);
  };

  const shrink = () => {
    Animated.timing(valueAnimated, {
      toValue: CONTENT_SIZE,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setExpanded(false);
  };

  // On text render, check if need to show the button
  const onTextLayout = (e: LayoutChangeEvent) => {
    setShowMore(e.nativeEvent.layout.height >= CONTENT_SIZE);
  };

  return (
    <View style={{ margin: "auto", marginBottom: 20 }}>
      <View style={styles.card}>
        <Text style={styles.title}>{data.title}</Text>
        <Animated.Text
          onLayout={onTextLayout}
          style={[
            styles.content,
            { maxHeight: valueAnimated, lineHeight: LINE_HEIGHT },
          ]}
        >
          {data.content}
        </Animated.Text>

        {showMore && (
          <Pressable
            onPress={expanded ? shrink : expand}
            style={styles.readMore}
          >
            <Text style={styles.readMoreText}>
              {expanded ? "Read Less" : "Read More"}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default ReadMore;

const styles = StyleSheet.create({
  card: {
    maxWidth: 500,
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
    overflow: "hidden",
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
