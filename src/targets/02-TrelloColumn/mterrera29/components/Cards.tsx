import React from 'react';
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

type CardsProps = {
  cards: string[];
  handleDeleteCard: (index: number) => void;
};

export default function Cards({ cards, handleDeleteCard }: CardsProps) {
  return (
    <>
      {cards.map((card, index) => (
        <View style={styles.cardContainer} key={index}>
          <Text style={styles.cardText}>{card} </Text>
          <Pressable
            style={styles.containerX}
            onPress={() => handleDeleteCard(index)}
          >
            <View style={styles.deleteIcon}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                fill='currentColor'
                className='bi bi-x'
                viewBox='0 0 16 16'
              >
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708' />
              </svg>
            </View>
          </Pressable>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  containerX: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: '#b6c1ca',
  },
  deleteIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: '#b6c1ca',
  },
  cardContainer: {
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
    width: '100%',
    minHeight: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#22272b',
  },
  cardText: {
    fontSize: 16,
    color: '#b6c1ca',
    flexWrap: 'wrap',
    paddingLeft: 10,
    paddingRight: 30,
    width: '100%',
    flex: 1,
  },
  deleteCard: {
    borderRadius: 5,
    height: 35,
    width: 35,
  },
});
