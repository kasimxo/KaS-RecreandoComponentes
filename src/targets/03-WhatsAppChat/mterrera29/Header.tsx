import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

type HeaderProps = {
  user: string;
  lastHour: string;
};

export default function Header({ user, lastHour }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerItemsLeft}>
        <View style={styles.backIcon}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            fill='currentColor'
            className='bi bi-arrow-left-short'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5'
            />
          </svg>
        </View>
        <View style={styles.containerProfile}></View>
        <View>
          <Text style={styles.userName}> {user} </Text>
          <Text style={styles.lastSeen}>last seen today at {lastHour} </Text>
        </View>
      </View>
      <View style={styles.headerItemsRight}>
        <View style={styles.headerIcons}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            fill='currentColor'
            className='bi bi-camera-video-fill'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z'
            />
          </svg>
        </View>
        <View style={styles.headerIcons}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            fill='currentColor'
            className='bi bi-telephone-fill'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z'
            />
          </svg>
        </View>
        <View style={styles.headerIconsDots}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            fill='currentColor'
            className='bi bi-three-dots-vertical'
            viewBox='0 0 16 16'
          >
            <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0' />
          </svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAll: { margin: 20 },
  headerContainer: {
    backgroundColor: '#075e55',
    width: '100%',
    height: 45,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#dfe9e8',
  },
  headerItemsLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerItemsRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  backIcon: {
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
  },
  headerIcons: {
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 10,
  },
  headerIconsDots: {
    width: 20,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 7,
  },
  containerProfile: {
    backgroundColor: '#dfe9e8',
    height: 32,
    width: 32,
    borderRadius: '100%',
    marginRight: 8,
  },
  userName: {
    fontSize: 16,
    color: '#dfe9e8',
    fontWeight: 'bold',
  },
  lastSeen: {
    fontSize: 10,
    color: '#dfe9e8',
  },
});
