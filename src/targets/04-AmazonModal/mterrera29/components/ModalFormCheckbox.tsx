import React, { useState } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { stylesModalContent } from '../styles';
import ModalFormInput from './ModalFormInput';
import ModalFormButton from './ModalFormButton';
import { dataNoMatch } from '../data';
import ModalFormHelp from './ModalFormHelp';

type ModalFormCheckboxProps = {
  isOpenSelect: boolean;
};

export default function ModalFormCheckbox({
  isOpenSelect,
}: ModalFormCheckboxProps) {
  const [isCheck, setIsCheck] = useState<{ id: number; check: boolean }[]>([
    {
      id: 0,
      check: false,
    },
  ]);

  const checkedBox = (id: number) => {
    setIsCheck((prevState) => {
      const exist = prevState.some((item) => item.id == id);

      console.log(exist);

      if (exist) {
        return prevState.map((item) =>
          item.id === id ? { ...item, check: !item.check } : item
        );
      } else {
        return [...prevState, { id: id, check: true }];
      }
    });
  };
  console.log(isCheck);
  return (
    <View style={{ position: 'relative', zIndex: 900 }}>
      <Text style={stylesModalContent.modalContentText}>
        ¿Que partes no coinciden?
      </Text>
      <View>
        {dataNoMatch.map((data) => (
          <View
            key={data.id}
            style={{ display: 'flex', flexDirection: 'row', padding: 5 }}
          >
            <Pressable
              style={
                isCheck.find((item) => item.id === data.id)?.check ?? false
                  ? stylesModalContent.checkboxOn
                  : stylesModalContent.checkbox
              }
              onPress={() => checkedBox(data.id)}
            >
              <Image
                style={stylesModalContent.iconCheckbox}
                source={require('@assets/controlar.png')}
              />
            </Pressable>
            <Text style={stylesModalContent.textCheckbox}>{data.text}</Text>
          </View>
        ))}
      </View>
      <ModalFormInput />
      <ModalFormHelp isOpenSelect={isOpenSelect} advisor={true} />
      <ModalFormButton />
    </View>
  );
}
