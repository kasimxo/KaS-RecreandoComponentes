import React from 'react';
import { Pressable, Text } from 'react-native';
import { stylesModalContent } from '../styles';

type ModalFormButtonProps = {
  setIsOpenModal: (value: React.SetStateAction<boolean>) => void;
  isDisabled: boolean;
};

export default function ModalFormButton({
  setIsOpenModal,
  isDisabled,
}: ModalFormButtonProps) {
  return (
    <Pressable
      disabled={isDisabled}
      style={[
        stylesModalContent.sendButton,
        isDisabled ? { opacity: 0.5 } : { opacity: 1 },
      ]}
      onPress={() => setIsOpenModal(false)}
    >
      <Text>Enviar</Text>
    </Pressable>
  );
}