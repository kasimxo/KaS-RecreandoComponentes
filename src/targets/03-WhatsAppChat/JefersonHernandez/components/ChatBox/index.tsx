import { ReactNode } from "react";
import { StyleSheet, Text, TextProps, View, ViewStyle } from "react-native";
import { styles } from "./styles";

type ChatBoxProps = {
  children: ReactNode;
  style?: ViewStyle;
};

function ChatName({ children, style, ...rest }: TextProps) {
  return (
    <Text {...rest} style={StyleSheet.flatten([styles.name, style])}>
      {children}
    </Text>
  );
}

function ChatText({ children }: TextProps) {
  return <Text style={styles.text}>{children}</Text>;
}

function ChatDate({ children }: TextProps) {
  return <Text style={styles.date}>{children}</Text>;
}

export function Content({ children, style }: Readonly<ChatBoxProps>) {
  return <View style={[styles.content, style]}>{children}</View>;
}

export function ChatBox({ children, style }: Readonly<ChatBoxProps>) {
  return <View style={[styles.container, style]}>{children}</View>;
}

ChatBox.Name = ChatName;
ChatBox.Text = ChatText;
ChatBox.Content = Content;
ChatBox.Date = ChatDate;

export default ChatBox;
