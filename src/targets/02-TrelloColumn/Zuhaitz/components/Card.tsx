import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { styles, cardStyles } from "../styles";

type CardData = {
  id: number;
  text: string;
  onDeleteHandle: (id: number) => void;
};

const Card = ({ id, text, onDeleteHandle }: CardData) => {
  return (
    <View style={cardStyles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Pressable onPress={() => onDeleteHandle(id)}>
        <Image
          source={require("../../../../assets/cancelar.png")}
          style={styles.icon}
          tintColor={"white"}
        />
      </Pressable>
    </View>
  );
};

export default Card;
