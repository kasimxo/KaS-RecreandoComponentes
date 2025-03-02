import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { Message } from './types';

type MessageInputProps = {
  handleNewMessage: (message: Message) => void;
};

export default function MessageInput({ handleNewMessage }: MessageInputProps) {
  const inputRef = useRef<TextInput>(null);
  const [text, setText] = useState<string>('');

  const date = Date.now();

  const handleSubmit = () => {
    if (text.length === 0) return;
    const user = 'You';
    const content = text;
    const msg: Message = {
      date: new Date(date),
      user: user,
      content: content,
    };

    handleNewMessage(msg);
    inputRef.current?.focus();
    setText('');
  };

  return (
    <View style={styles.mesaggeContainer}>
      <View style={styles.mesaggeBar}>
        <View style={styles.emojis}></View>
        <TextInput
          placeholder='Write a mesagge'
          placeholderTextColor='#bbbbbb'
          ref={inputRef}
          blurOnSubmit={false}
          style={{
            alignSelf: 'center',
            height: 30,
            width: '80%',
            borderTopWidth: 0,
            textAlign: 'left',
            borderWidth: 0,
            outlineStyle: 'none',
          }}
          value={text}
          onChangeText={(text) => setText(text)}
          onSubmitEditing={handleSubmit}
          underlineColorAndroid='transparent'
          maxLength={250}
        ></TextInput>
      </View>
      <Pressable onPress={handleSubmit} style={styles.audioBuble}>
        <Text style={styles.sendText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAll: { margin: 20 },
  mesaggeContainer: {
    width: '92%',
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    margin: 5,
    position: 'absolute',
    bottom: 1,
  },
  mesaggeBar: {
    backgroundColor: '#ffffff',
    height: 35,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderRadius: 30,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  audioBuble: {
    backgroundColor: '#075e55',
    height: 35,
    width: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: '100%',
    color: '#ffffff',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  emojis: {
    height: 35,
    width: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#878c8f',
  },
  sendText: {
    fontSize: 20,
    color: '#ffffff',
    alignSelf: 'center',
    paddingBottom: 5,
  },
});
