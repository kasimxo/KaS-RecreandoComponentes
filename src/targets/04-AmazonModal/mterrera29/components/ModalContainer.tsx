import { useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Pressable,
} from 'react-native';
import { stylesModal, stylesModalContent } from '../styles';
import ModalHeader from './ModalHeader';
import ModalForm from './ModalForm';

type ModalContainerProps = {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalContainer({
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
          <View style={stylesModal.modalContainer}>
            <ModalHeader setIsOpenModal={setIsOpenModal} />
            <View style={stylesModalContent.modalContent}>
              <Text style={stylesModalContent.modalContentText}>
                Cuéntanos acerca del problema.
              </Text>
              <ModalForm
                isOpenSelect={isOpenSelect}
                setIsOpenSelect={setIsOpenSelect}
                setIsOpenModal={setIsOpenModal}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Pressable>
    </Modal>
  );
}
