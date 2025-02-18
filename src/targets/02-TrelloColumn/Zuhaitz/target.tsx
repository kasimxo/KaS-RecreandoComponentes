import { View, Text } from "react-native";
import { useState } from "react";

import GenerateData from "../data";
import { TrelloColumnData } from "./types";
import { styles, columnStyles } from "./styles";

import TaskCreator from "./components/CardCreator";
import Card from "./components/Card";

const TrelloColumn = () => {
  const data: TrelloColumnData = GenerateData();
  const [title, setTitle] = useState(data.title);
  const [cards, setCards] = useState(data.cards);

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

  return (
    <View style={columnStyles.container}>
      <Text style={[columnStyles.title, styles.text]}>{title}</Text>
      {cards.map((task, i) => (
        <Card id={i} text={task} onDeleteHandle={deleteCardHandle} key={i} />
      ))}
      <TaskCreator createCardHandle={createCardHandle} />
    </View>
  );
};

export default TrelloColumn;
