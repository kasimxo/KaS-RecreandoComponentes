import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { generateTaskId } from "../../helpers";
import { Task } from "../../types";
import { CancelIcon } from "../cancel-icon";
import { styles } from "./styles";

type TaskFormProps = {
  onAdd: (task: Task) => void;
  onCancel: () => void;
};

export function TaskForm({ onAdd, onCancel }: Readonly<TaskFormProps>) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const addTask = () => {
    if (text.trim()) {
      onAdd({ id: generateTaskId().toString(), title: text });
    }
  };

  const discardTask = () => {
    onCancel();
  };

  return (
    <>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        value={text}
        multiline
        maxLength={250}
        onChangeText={setText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Introduce un título o pega un enlace"
        placeholderTextColor="#ccc"
      />
      <View style={styles.buttons}>
        <Pressable onPress={addTask} style={styles.addTask}>
          <Text style={styles.addTaskText}>Añadir tarjeta</Text>
        </Pressable>
        <Pressable
          onPress={discardTask}
          style={({ pressed }) => [
            styles.cancelPressable,
            {
              backgroundColor: pressed ? "#333" : "#101204",
            },
          ]}
        >
          <CancelIcon />
        </Pressable>
      </View>
    </>
  );
}
