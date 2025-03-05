import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { stylesModal } from '../styles';

type ModalHeaderProps = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalHeader({ setIsOpenModal }: ModalHeaderProps) {
  return (
    <View style={stylesModal.modalHeader}>
      <Text style={stylesModal.modalHeaderText}>Reportar un Problema</Text>
      <Pressable
        style={({ pressed }) => [
          stylesModal.modalHeaderButton,
          { borderColor: pressed ? '#2162a1' : '#f0f2f2' },
        ]}
        onPress={() => setIsOpenModal(false)}
      >
        <Image
          style={stylesModal.iconX}
          source={require('@assets/cancelar.png')}
        />
      </Pressable>
    </View>
  );
}
