import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import { stylesModal } from '../styles';
import { useState } from 'react';
import { TextCard } from '../types';

type ModalContainerProps = {
  text: TextCard;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalContainer({
  text,
  isOpenModal,
  setIsOpenModal,
}: ModalContainerProps) {
  const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false);

  const handleOutsideModal = () => {
    setIsOpenModal(false);
  };
  const handleOutsideSelect = () => {
    setIsOpenSelect(false);
  };

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={isOpenModal}
      onRequestClose={() => setIsOpenModal(false)}
    >
      <Pressable
        style={stylesModal.modalBackground}
        onPress={handleOutsideModal}
      >
        <TouchableWithoutFeedback onPress={handleOutsideSelect}>
          <View style={stylesModal.modalContent}>
            <View style={stylesModal.modalHeader}>
              <Text style={stylesModal.modalTitle}> {text.title} </Text>
              <Pressable
                style={stylesModal.modalHeaderButton}
                onPress={() => setIsOpenModal(false)}
              >
                <Image
                  style={stylesModal.iconX}
                  source={require('@assets/cancelar.png')}
                  tintColor={'#ededed'}
                />
              </Pressable>
            </View>
            <ScrollView
              style={stylesModal.modalScroll}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={true}
            >
              <Text style={stylesModal.modalText}>{text.content}</Text>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </Pressable>
    </Modal>
  );
}
