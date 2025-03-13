import {
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutChangeEvent,
} from "react-native";

import GenerateData from "../data";
import { useState } from "react";

const DEFAULT_LINES = 10;

const ReadMore = () => {
  const { title, content } = GenerateData();
  const [showMore, setShowMore] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const [lines, setLines] = useState(DEFAULT_LINES);

  const expand = () => {
    setExpanded(true);
    setLines(1000);
  };

  const shrink = () => {
    setExpanded(false);
    setLines(DEFAULT_LINES);
  };

  const onTextLayout = (e: LayoutChangeEvent) => {
    setShowMore(e.nativeEvent.layout.height > 200 && lines !== 0);
  };

  return (
    <View style={{ margin: "auto", marginBottom: 20 }}>
      <View style={[styles.card]}>
        <Text style={styles.title}>{title}</Text>
        <Text
          numberOfLines={lines}
          // onTextLayout={onTextLayout}
          onLayout={onTextLayout}
          style={styles.content}
        >
          {content}
        </Text>

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
    flex: 1,
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
