import { TextInput, Text } from 'react-native';
import { stylesModalContent } from '../styles';

export default function ModalFormInput() {
  return (
    <>
      <Text style={stylesModalContent.modalContentText}>
        {'Comentarios (opcional)'}
      </Text>
      <TextInput
        textAlignVertical='top'
        multiline
        style={stylesModalContent.input}
        maxLength={250}
      ></TextInput>
    </>
  );
}
