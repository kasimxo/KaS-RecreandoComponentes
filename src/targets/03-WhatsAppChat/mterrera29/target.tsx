import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import GenerateData from '../data';
import Chats from './Chats';
import MessageInput from './MessageInput';

export default function WhatsAppChat() {
  const user = GenerateData().messages[0].user;
  const messages = GenerateData().messages[0].content;
  const getDate = GenerateData().messages[0].date;
  const formatearHora = (fecha: Date) => {
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    return `${horas}:${minutos}`;
  };
  const hour = formatearHora(getDate);
  const date = {
    year: getDate.getFullYear(),
    day: getDate.getDay(),
    month: getDate.getMonth(),
    hour: getDate.getHours(),
    minutes: getDate.getUTCMinutes(),
  };
  console.log(formatearHora(getDate));
  return (
    <View style={styles.container}>
      <Header user={user} lastHour={hour} />
      <Chats mesagges={messages} hour={hour} />
      <MessageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  containerAll: { margin: 20 },
  container: {
    backgroundColor: '#aaaaaa',
    width: 300,
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
});
