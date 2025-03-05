import React from 'react';
import { Pressable, Text } from 'react-native';
import { stylesModalContent } from '../styles';

export default function ModalFormButton() {
  return (
    <Pressable style={stylesModalContent.sendButton}>
      <Text>Enviar</Text>
    </Pressable>
  );
}
