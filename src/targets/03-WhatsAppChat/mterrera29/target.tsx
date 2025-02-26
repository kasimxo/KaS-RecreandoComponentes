import React, { useRef, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import GenerateData from '../data';
import Chats from './Chats';
import MessageInput from './MessageInput';
import { Message } from './types';

export default function WhatsAppChat() {
  const scrollViewRef = useRef<ScrollView>(null);
  const [messages, setMessages] = useState(GenerateData().messages);
  const getDate = GenerateData().messages[0].date;
  const users: string[] = [];

  const handleNewMessage = (message: Message) => {
    setMessages((prevState) => [...prevState, message]);
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  messages.map((messages) => {
    const isUser = users.includes(messages.user);
    if (isUser) {
      return;
    } else if (messages.user === 'You') {
      return;
    } else {
      users.push(messages.user);
    }
  });

  const formatearHora = (fecha: Date) => {
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    return `${horas}:${minutos}`;
  };

  const hour = formatearHora(getDate);

  return (
    <View style={styles.container}>
      <Header users={users} />
      <Chats messages={messages} scrollViewRef={scrollViewRef} users={users} />
      <MessageInput handleNewMessage={handleNewMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerAll: { margin: 20 },
  container: {
    backgroundColor: '#aaaaaa',
    width: 280,
    height: 490,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
});
