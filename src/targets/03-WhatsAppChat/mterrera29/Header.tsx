import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

type HeaderProps = {
  users: string[];
};

export default function Header({ users }: HeaderProps) {
  const usersArrayStrings = users.map((user) => `${user}, `);
  const usersInGroup = usersArrayStrings.join('') + 'You';

  const CheckUsersInGroup = (usersString: string) => {
    if (usersString.length > 45) {
      return usersString.substring(0, 45) + ' ...';
    } else {
      return usersString;
    }
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerItemsLeft}>
        <View style={styles.containerProfile}></View>
        <View>
          <Text style={styles.userName}>Grupo de Amigos</Text>
          <Text style={styles.lastSeen}>{CheckUsersInGroup(usersInGroup)}</Text>
        </View>
      </View>
      <View style={styles.headerItemsRight}>
        <View style={styles.headerIconsDots}>
          <Image style={styles.iconX} source={require('@assets/linea.png')} />
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
    marginLeft: 5,
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
  iconX: {
    width: 16,
    height: 16,
    tintColor: '#dfe9e8',
    transform: [{ rotate: '90deg' }],
  },
});
