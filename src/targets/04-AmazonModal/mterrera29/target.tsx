import React, { useState } from 'react';
import {
  Pressable,
  View,
  Image,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import { styles } from './styles';
import ModalContainer from './components/ModalContainer';

export default function target() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <View style={styles.containerAll}>
      <View style={styles.container}>
        <Pressable
          onPressIn={() => setIsHovered(true)}
          onPressOut={() => setIsHovered(false)}
          style={styles.link}
        >
          <View>
            <Image
              style={styles.icon}
              source={require('@assets/mensaje.png')}
            />
          </View>
          <Text
            style={[styles.text, isHovered && styles.textHovered]}
            onPress={() => setIsOpenModal(true)}
          >
            Informar de un problema con este producto
          </Text>
        </Pressable>
      </View>
      <ModalContainer
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </View>
  );
}
