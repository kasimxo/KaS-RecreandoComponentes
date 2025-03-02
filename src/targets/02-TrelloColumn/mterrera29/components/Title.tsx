import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import GenerateData from '../../data';
import React, { useState, useRef, useEffect } from 'react';

export default function Title() {
  const [editTitle, setEditTitle] = useState<boolean>(false);
  const [columnTitle, setColumnTitle] = useState<string>(GenerateData().title);
  const textInputRef = useRef<TextInput | null>(null);

  const handleEditName = () => {
    setEditTitle((prevState) => !prevState);
  };

  useEffect(() => {
    if (editTitle) {
      textInputRef.current?.focus();
    }
  }, [editTitle]);
  return (
    <View style={styles.titleContainer}>
      {!editTitle && <Text style={styles.columnTitle}>{columnTitle} </Text>}

      {editTitle && (
        <TextInput
          placeholder='Introduce un título o pega un enlace'
          placeholderTextColor='#7b92a6'
          textAlignVertical='top'
          multiline
          style={styles.input}
          value={columnTitle}
          onChangeText={(text) => setColumnTitle(text)}
          ref={textInputRef}
          maxLength={250}
        ></TextInput>
      )}
      <Pressable
        style={({ pressed }) => [
          styles.dotsButton,
          { backgroundColor: pressed ? '#22272b' : '#121212' },
        ]}
        onPress={handleEditName}
      >
        {editTitle ? (
          <View style={styles.icon}>
            <Image
              style={styles.iconX}
              source={require('@assets/controlar.png')}
            />
          </View>
        ) : (
          <View style={styles.icon}>
            <Image
              style={styles.iconDots}
              source={require('@assets/linea.png')}
            />
          </View>
        )}
      </Pressable>
    </View>
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
  iconX: {
    width: 25,
    height: 25,
    tintColor: '#b6c1ca',
  },
  iconDots: {
    width: 20,
    height: 20,
    tintColor: '#b6c1ca',
  },
  titleContainer: {
    marginBottom: 10,
    paddingLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  columnTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b6c1ca',
    paddingLeft: 10,
  },
  dotsButton: {
    borderRadius: 10,
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  input: {
    fontSize: 16,
    backgroundColor: '#22272b',
    width: '100%',
    height: 40,
    borderRadius: 10,
    padding: 8,
    paddingLeft: 15,
    marginRight: 10,
    color: '#b6c1ca',
    textAlignVertical: 'top',
    textAlign: 'left',
    overflow: 'hidden',
  },
  addFormX: {
    borderRadius: 5,
    height: 35,
    width: 35,
  },
});
