import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

type NewCardProps = {
  openForm: boolean;
  handleNewForm: () => void;
};

export default function NewCard({ openForm, handleNewForm }: NewCardProps) {
  return (
    <>
      {!openForm && (
        <View style={styles.addTextContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.addTextButton,
              { backgroundColor: pressed ? '#22272b' : '#121212' },
            ]}
            onPress={handleNewForm}
          >
            <Text style={styles.addText}>
              <Text style={styles.addTextIcon}>+</Text>
              Añade una tarjeta
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.imageButton,
              { backgroundColor: pressed ? '#22272b' : '#121212' },
            ]}
          >
            <Image
              style={styles.icon}
              source={require('../template.png')}
            ></Image>
          </Pressable>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: '#b6c1ca',
  },
  imageButton: {
    borderRadius: 10,
    height: 18,
    width: 18,
    marginRight: 15,
    marginLeft: 15,
  },
  dots: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b6c1ca',
  },
  addText: {
    fontSize: 16,
    color: '#b6c1ca',
  },
  addTextIcon: {
    paddingRight: 10,
    paddingLeft: 15,
    fontSize: 25,
    color: '#b6c1ca',
  },
  addTextContainer: {
    marginBottom: 10,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addTextButton: {
    borderRadius: 10,
    height: 40,
    flexGrow: 1,
  },
});
