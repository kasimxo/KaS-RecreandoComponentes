import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import GenerateData from '../data';
import { relative } from 'path';
import Title from './components/Title';
import Cards from './components/Cards';
import NewCard from './components/NewCard';
import NewCardForm from './components/NewCardForm';

type TrelloColumn = {
  title: string;
  cards: string[];
};

export default function TrelloColumn() {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<boolean>(false);
  const columTitle: string = GenerateData().title;
  const [cards, setCards] = useState<string[]>([...GenerateData().cards]);
  const [cardContent, setCardContent] = useState<string>('');
  const textInputRef = useRef<TextInput | null>(null);

  console.log(cards);

  useEffect(() => {
    if (openForm) {
      textInputRef.current?.focus();
    }
  }, [openForm]);

  const handleNewForm = () => {
    setOpenForm((prevState) => !prevState);
  };

  const handleSubmitCard = () => {
    if (cardContent.length === 0) {
      setOpenForm((prevState) => !prevState);
      setCardContent('');
    } else {
      setCards([...cards, cardContent]);
      setOpenForm((prevState) => !prevState);
      setCardContent('');
    }
  };

  const handleDeleteCard = (index: number): void => {
    const filterCards = cards.filter((_, i) => i !== index);
    setCards(filterCards);
  };

  const handleEditName = () => {
    setEditTitle((prevState) => !prevState);
  };

  return (
    <View style={styles.containerAll}>
      <View style={styles.container}>
        <Title />
        <Cards cards={cards} handleDeleteCard={handleDeleteCard} />
        <NewCard openForm={openForm} handleNewForm={handleNewForm} />
        <NewCardForm
          openForm={openForm}
          handleNewForm={handleNewForm}
          cardContent={cardContent}
          setCardContent={setCardContent}
          handleSubmitCard={handleSubmitCard}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAll: { margin: 20 },
  container: {
    borderWidth: 1,
    borderColor: '#9198a1',
    borderRadius: 10,
    padding: 10,
    width: 350,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
});
