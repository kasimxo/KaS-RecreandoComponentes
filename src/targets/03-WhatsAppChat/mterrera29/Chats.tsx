import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ReceivedChat from './ReceivedChat';
import { Message } from './types';
import { getShuffledColors, formatDay } from './constants';
import { useMemo } from 'react';

type ChatsProps = {
  messages: Message[];
  scrollViewRef: React.RefObject<ScrollView>;
  users: string[];
};

export default function Chats({ messages, scrollViewRef, users }: ChatsProps) {
  const dateNow = Date.now();
  const randomColorsArray = useMemo(() => getShuffledColors(), []);
  const prevUsers: string[] = [];
  const prevDay: string[] = [];

  return (
    <ScrollView
      style={styles.chatsContainer}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      ref={scrollViewRef}
    >
      {messages.map((message) => {
        const userIndex = users.findIndex((user) => user === message.user);
        const color = randomColorsArray[userIndex];
        const user = message.user;
        const day =
          formatDay(message.date) === formatDay(new Date(dateNow))
            ? 'Today'
            : formatDay(message.date);
        const isPrevUser = prevUsers.includes(user);
        prevUsers.push(user);
        const isPrevDay = prevDay.includes(day);
        prevDay.push(day);
        return (
          <>
            {!isPrevDay && (
              <View style={styles.dateInfo}>
                <Text style={styles.dateTextInfo}>{day}</Text>
              </View>
            )}
            <ReceivedChat
              content={message.content}
              date={message.date}
              user={message.user}
              color={color}
              isPrevUser={isPrevUser}
              isPrevDay={isPrevDay}
            />
          </>
        );
      })}
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
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 45,
    position: 'relative',
  },
  dateInfo: {
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginTop: 6,
    padding: 3,
  },
  dateTextInfo: {
    fontSize: 11,
    color: '#5a5b5c',
  },
});
