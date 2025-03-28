import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: 500,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerAll: { margin: 20 },
  link: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#3268ad',
  },
  icon: { width: 25, height: 25, marginRight: 10, tintColor: '#6d7878' },
  text: { textDecorationLine: 'none', color: '#3268ad' },
  textHovered: {
    textDecorationLine: 'underline',
    opacity: 1,
    color: '#0c2d52',
  },
});

export const stylesModal = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '65%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  modalPressable: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  modalHeader: {
    height: 57,
    width: '100%',
    backgroundColor: '#f0f2f2',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#d5d9d9',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  modalHeaderText: {
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 25,
    fontSize: 16,
  },
  modalHeaderButton: {
    fontWeight: 'bold',
    height: 53,
    width: 53,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 10,
  },
  iconX: {
    width: 20,
    height: 20,
  },
});

export const stylesModalContent = StyleSheet.create({
  box1: {
    position: 'relative',
    zIndex: 1000,
  },
  modalContent: {
    width: '100%',
    padding: 25,
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  modalContentText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
  },
  select: {
    height: 33,
    width: '100%',
    backgroundColor: '#f0f2f2',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#d5d9d9',
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    position: 'relative',
  },
  iconVContainer: {
    width: 25,
    height: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconV: {
    width: 20,
    height: 20,
    tintColor: '#555555',
  },
  input: {
    width: '100%',
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#404040',
    padding: 10,
  },
  sendButton: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
    width: 65,
    height: 32,
    color: '#000000',
    backgroundColor: '#ffd814',
    borderRadius: 100,
    marginTop: 10,
    marginRight: 10,
    fontSize: 14,
  },
  checkbox: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: '#404040',
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  checkboxOn: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: '#404040',
    borderRadius: 2,
    backgroundColor: '#246fb6',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  iconCheckbox: {
    height: 16,
    width: 16,
    tintColor: 'white',
    paddingRight: 1,
  },
  textCheckbox: {
    marginLeft: 10,
    textAlign: 'center',
  },
});

export const stylesModalSelect = StyleSheet.create({
  selectOptionsContainer: {
    width: '100%',
    position: 'absolute',
    backgroundColor: '#ffffff',
    top: 0,
    left: 0,
    right: 0,
    elevation: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#959595',
    padding: 2,
  },
  selectOptions: {
    elevation: 5,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
  },
  modalHelp: {
    height: 40,
    width: '100%',
    backgroundColor: '#fffff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 2,
    borderColor: '#246fb6',
    borderLeftWidth: 12,
    borderRadius: 10,
    position: 'relative',
    padding: 26,
    marginTop: 15,
    zIndex: 500,
  },
  modalHelpText: {
    color: '#246fb6',
  },
  modalHelpIcon: {
    textAlign: 'center',
    width: 20,
    height: 20,
    color: '#ffffff',
    backgroundColor: '#246fb6',
    borderRadius: 100,
    marginRight: 10,
  },
  modalHelpInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
  },
});