import { View, Text, StyleSheet, Image } from 'react-native';
import { formatearHora, marginUser } from './constants';

type ReceivedChatProps = {
  date: Date;
  user: string;
  content: string;
  color: string;
  isPrevUser: boolean;
  isPrevDay: boolean;
};

export default function ReceivedChat({
  content,
  date,
  user,
  color,
  isPrevUser,
  isPrevDay,
}: ReceivedChatProps) {
  const userColor = color;
  const userYou = user === 'You';

  return (
    <View
      style={
        userYou
          ? [styles.bubleContainerSend, marginUser(isPrevUser, isPrevDay)]
          : [styles.bubleContainer, marginUser(isPrevUser, isPrevDay)]
      }
    >
      {!userYou && (!isPrevUser || !isPrevDay) ? (
        <Text
          style={{
            fontWeight: 'bold',
            color: userColor,
          }}
        >
          {user}
        </Text>
      ) : (
        <></>
      )}
      <Text>{content}</Text>
      <View style={styles.mesaggeInfo}>
        <Text style={styles.hour}>{formatearHora(date)}</Text>
        <View style={styles.checked}>
          <Image
            style={styles.iconX}
            source={require('@assets/controlar.png')}
          />
          <Image
            style={styles.iconX2}
            source={require('@assets/controlar.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bubleContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    maxWidth: '80%',
    minWidth: '20%',
    paddingTop: 1,
    paddingBottom: 5,
    padding: 7,
    paddingRight: 50,
    position: 'relative',
  },
  bubleContainerSend: {
    alignSelf: 'flex-end',
    backgroundColor: '#e2ffc9',
    borderRadius: 5,
    maxWidth: '80%',
    minWidth: '30%',
    paddingRight: 50,
    paddingTop: 1,
    paddingBottom: 5,
    padding: 7,
    position: 'relative',
  },

  mesaggeInfo: {
    position: 'absolute',
    right: 5,
    bottom: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  hour: {
    fontSize: 11,
    color: '#b0b0b0',
  },
  checked: { width: 14, height: 14, color: '#b0b0b0', position: 'relative' },
  iconX: {
    width: 16,
    height: 16,
    tintColor: '#54aeff',
  },
  iconX2: {
    paddingLeft: 0,
    width: 16,
    height: 16,
    tintColor: '#54aeff',
    position: 'absolute',
    right: 1,
    bottom: -2,
  },
});
