import { useState } from "react";
import { View, Text, TextInput } from "react-native";

import TaskCreator from "./components/CardCreator";
import Card from "./components/Card";

import GenerateData from "../data";
import { TrelloColumnData } from "./types";
import { styles, columnStyles } from "./styles";

const TrelloColumn = () => {
  const data: TrelloColumnData = GenerateData();
  const [title, setTitle] = useState(data.title);
  const [cards, setCards] = useState(data.cards);
  const [editing, setEditing] = useState(false);

  const deleteCardHandle = (id: number) => {
    let tasks = cards;
    tasks.splice(id, 1);
    setCards([...tasks]);
  };

  const createCardHandle = (text: string) => {
    let tasks = cards;
    tasks.push(text);
    setCards([...tasks]);
  };

  const editCardHandle = (id: number, text: string) => {
    let tasks = cards;
    cards[id] = text;
    setCards([...tasks]);
  };

  return (
    <View style={columnStyles.container}>
      {editing ? (
        <TextInput
          value={title}
          onChangeText={setTitle}
          onBlur={() => setEditing(false)}
          autoFocus
          style={[columnStyles.title, styles.text]}
        />
      ) : (
        <Text
          onPress={() => setEditing(true)}
          style={[columnStyles.title, styles.text]}
        >
          {title}
        </Text>
      )}
      {cards.map((task, i) => (
        <Card
          id={i}
          text={task}
          onEditCardHandle={editCardHandle}
          onDeleteHandle={deleteCardHandle}
          key={i}
        />
      ))}
      <TaskCreator createCardHandle={createCardHandle} />
    </View>
  );
};

export default TrelloColumn;
