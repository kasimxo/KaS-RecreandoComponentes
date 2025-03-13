import { View, Text } from 'react-native';
import { styles } from './styles';
import GenerateData from '../data';
import Content from './components/Content';
import { useState, useMemo } from 'react';
import ModalContainer from './components/ModalContainer';

export default function target() {
  const text = useMemo(() => {
    return GenerateData();
  }, []);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <View style={styles.containerAll}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{text.title}</Text>
        </View>
        <Content text={text} setIsOpenModal={setIsOpenModal} />
      </View>
      <ModalContainer
        text={text}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </View>
  );
}
