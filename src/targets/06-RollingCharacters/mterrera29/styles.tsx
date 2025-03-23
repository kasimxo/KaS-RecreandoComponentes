import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
    width: 100,
  },
  text: { fontSize: 20 },
  textFinal: { color: 'white', fontSize: 20 },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b6c1ca',
    padding: 10,
    width: 400,
    height: 100,
  },
  buttonText: { fontSize: 20, color: 'white' },
  button: {
    borderRadius: 10,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
});
