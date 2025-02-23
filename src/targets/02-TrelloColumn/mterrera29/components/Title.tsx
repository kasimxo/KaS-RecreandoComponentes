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
  TouchableWithoutFeedback,
  Keyboard,
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='20'
              width='20'
              fill='currentColor'
              className='bi bi-check2'
              viewBox='0 0 16 16'
            >
              <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0' />
            </svg>
          </View>
        ) : (
          <View style={styles.icon}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='bi bi-three-dots'
              viewBox='0 0 16 16'
              height='20'
              width='20'
            >
              <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3' />
            </svg>
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
  deleteIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: '#b6c1ca',
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
