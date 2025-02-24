import { View, Text, StyleSheet, ScrollView } from 'react-native';

type SentChat = {
  mesagges: string;
  hour: string;
};

export default function SentChat({ mesagges, hour }: SentChat) {
  return (
    <View style={styles.bubleContainer}>
      <Text>{mesagges}</Text>
      <View style={styles.mesaggeInfo}>
        <Text style={styles.hour}>{hour}</Text>
        <Text style={styles.checked}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            fill='currentColor'
            className='bi bi-check2-all'
            viewBox='0 0 16 16'
          >
            <path d='M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0' />
            <path d='m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708' />
          </svg>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bubleContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#e2ffc9',
    borderRadius: 5,
    maxWidth: '80%',
    minWidth: '60%',
    padding: 7,
    paddingRight: 50,
    position: 'relative',
    marginBottom: 5,
  },
  mesaggeInfo: {
    position: 'absolute',
    right: 7,
    bottom: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  hour: {
    fontSize: 11,
    color: '#b0b0b0',
    marginRight: 2,
  },
  checked: { width: 14, height: 14, color: '#b0b0b0' },
});
