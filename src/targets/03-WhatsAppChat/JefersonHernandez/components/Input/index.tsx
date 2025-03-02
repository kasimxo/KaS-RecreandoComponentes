import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { generateId } from "../../helpers/generateId";
import { Message } from "../../types";
import { AddIcon } from "../AddIcon";
import { styles } from "./styles";

type InputProps = {
  onAdd: (message: Message) => void;
};

export function Input({ onAdd }: Readonly<InputProps>) {
  const [text, setText] = useState("");

  function handleAddTask(text: string) {
    if (text.trim()) {
      onAdd({
        _id: generateId(),
        date: new Date(),
        content: text,
        user: "Tu",
      });
    }
    setText("");
  }

  const addTask = () => {
    handleAddTask(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        maxLength={250}
        onChangeText={setText}
        placeholder="Write a message"
        placeholderTextColor="#ccc"
        onSubmitEditing={(e) => {
          handleAddTask(e.nativeEvent.text);
        }}
      />
      <Pressable
        onPress={addTask}
        style={({ pressed }) => [
          styles.cancelPressable,
          {
            backgroundColor: pressed ? "#075e55ca" : "#075e55",
          },
        ]}
      >
        <AddIcon tintColor="white" />
      </Pressable>
    </View>
  );
}
