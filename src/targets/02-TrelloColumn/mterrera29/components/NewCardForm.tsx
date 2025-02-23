import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

type NewCardFormProps = {
  openForm: boolean;
  cardContent: string;
  setCardContent: React.Dispatch<React.SetStateAction<string>>;
  handleNewForm: () => void;
  handleSubmitCard: () => void;
};

export default function NewCardForm({
  openForm,
  cardContent,
  setCardContent,
  handleNewForm,
  handleSubmitCard,
}: NewCardFormProps) {
  const textInputRef = useRef<TextInput | null>(null);

  useEffect(() => {
    if (openForm) {
      textInputRef.current?.focus();
    }
  }, [openForm]);

  return (
    <>
      {openForm && (
        <View style={styles.addFormContainer}>
          <TextInput
            placeholder='Introduce un título o pega un enlace'
            placeholderTextColor='#7b92a6'
            textAlignVertical='top'
            multiline
            style={styles.input}
            value={cardContent}
            onChangeText={(text) => setCardContent(text)}
            ref={textInputRef}
            maxLength={250}
          >
            {' '}
            <Pressable
              style={({ pressed }) => [
                styles.addFormX,
                { backgroundColor: pressed ? '#22272b' : '#121212' },
              ]}
              onPress={handleNewForm}
            >
              <View style={styles.icon}>
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
          </TextInput>
          <View style={styles.addForm}>
            <Pressable
              style={({ pressed }) => [
                styles.addFormButton,
                { backgroundColor: pressed ? '#cce0ff' : '#579dff' },
              ]}
              onPress={handleSubmitCard}
            >
              <Text style={styles.addFormText}>Añadir tarjeta</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.addFormX,
                { backgroundColor: pressed ? '#22272b' : '#121212' },
              ]}
              onPress={handleNewForm}
            >
              <View style={styles.icon}>
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
  deleteIcon: {
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
  addFormContainer: {
    marginBottom: 10,
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  addForm: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  addFormButton: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#101204',
    marginRight: 5,
  },
  addFormX: {
    borderRadius: 5,
    height: 35,
    width: 35,
  },
  addFormText: {
    fontSize: 16,
    color: '#101204',
  },
  input: {
    fontSize: 16,
    backgroundColor: '#22272b',
    width: '100%',
    minHeight: 60,
    marginBottom: 10,
    borderRadius: 10,
    padding: 8,
    paddingLeft: 15,
    color: '#b6c1ca',
    textAlignVertical: 'top',
    textAlign: 'left',
  },
});
