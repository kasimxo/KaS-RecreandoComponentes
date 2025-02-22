import { View } from "react-native";
import Title from "./Title";
import BotonAdd from "./BotonAdd";
import ListaItem from "./ListaItem";
import GenerateData from "../data";
import { useState } from "react";

export default function TrelloColumnComponent() {
  const [data, setData] = useState(GenerateData());

  const handleRemove = (index: number) => {
    const newData = data.cards.filter((_, i) => i !== index);
    setData({ ...data, cards: newData });
  };

  const handleAdd = (newCard: string) => {
    setData({ ...data, cards: [...data.cards, newCard] });
  };

  return (
    <View
      style={{
        padding: 12,
        backgroundColor: "#1f4068",
        borderRadius: 5,
      }}
    >
      <Title title={data.title} />
      <ListaItem items={data.cards} onRemove={handleRemove} />
      <BotonAdd onAdd={handleAdd} />
    </View>
  );
}
