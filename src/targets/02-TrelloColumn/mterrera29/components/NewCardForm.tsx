import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import React, { useRef, useEffect } from 'react';

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
          ></TextInput>
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
                <Image
                  style={styles.iconX}
                  source={require('@assets/cancelar.png')}
                />
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
  iconX: {
    width: 25,
    height: 25,
    tintColor: '#b6c1ca',
    marginRight: 2,
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
