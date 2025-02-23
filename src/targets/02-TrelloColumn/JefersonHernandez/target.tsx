import { useState } from "react";
import { FlatList } from "react-native";
import GenerateData from "../data";
import { AddItem } from "./components/add-item";
import Card from "./components/card";
import { TaskForm } from "./components/task-form";
import { generateTaskId } from "./helpers";
import { styles } from "./styles";
import { Task } from "./types";

const data = GenerateData();

const initialTasks: Task[] = data.cards.map((card) => ({
  id: generateTaskId().toString(),
  title: card,
}));

export default function TrelloColumn() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showInput, setShowInput] = useState(false);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
    setShowInput(false);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleShowInput = () => {
    setShowInput(!showInput);
  };

  return (
    <Card>
      <Card.Title>{data.title}</Card.Title>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Card.Item key={item.id} onRemove={() => deleteTask(item.id)}>
            {item.title}
          </Card.Item>
        )}
        contentContainerStyle={styles.cardContent}
        keyExtractor={(item) => item.id}
      />
      {showInput ? (
        <TaskForm onAdd={addTask} onCancel={toggleShowInput} />
      ) : (
        <AddItem onPress={toggleShowInput} />
      )}
    </Card>
  );
}
