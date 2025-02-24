import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ReceivedChat from './ReceivedChat';
import SentChat from './SentChat';

type ChatsProps = {
  mesagges: string;
  hour: string;
};
export default function Chats({ mesagges, hour }: ChatsProps) {
  return (
    <ScrollView style={styles.chatsContainer}>
      <ReceivedChat mesagges={mesagges} hour={hour} />
      <ReceivedChat mesagges={mesagges} hour={hour} />
      <ReceivedChat mesagges={mesagges} hour={hour} />
      <ReceivedChat mesagges={mesagges} hour={hour} />
      <ReceivedChat mesagges={mesagges} hour={hour} />
      <ReceivedChat mesagges={mesagges} hour={hour} />
      <ReceivedChat mesagges={mesagges} hour={hour} />
      <ReceivedChat mesagges={mesagges} hour={hour} />
      <ReceivedChat mesagges={mesagges} hour={hour} />
      <ReceivedChat mesagges={mesagges} hour={hour} />
      <ReceivedChat mesagges={mesagges} hour={hour} />
      <SentChat mesagges={mesagges} hour={hour} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  containerAll: { margin: 20 },
  chatsContainer: {
    backgroundColor: '#aaaaaa',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    paddingBottom: 50,
    position: 'relative',
  },
});
