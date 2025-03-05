import React from 'react';
import { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import { styles, stylesModalSelect } from '../styles';

type ModalFormHelpProps = {
  isOpenSelect: boolean;
  advisor: boolean;
};

export default function ModalFormHelp({
  isOpenSelect,
  advisor,
}: ModalFormHelpProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <View style={[stylesModalSelect.modalHelp]}>
      <View style={stylesModalSelect.modalHelpInfo}>
        <Text style={stylesModalSelect.modalHelpIcon}>i</Text>
        {advisor && <Text>No ingresar información personal. </Text>}
        <Pressable
          onPressIn={() => setIsHovered(true)}
          onPressOut={() => setIsHovered(false)}
        >
          <Text
            style={[
              stylesModalSelect.modalHelpText,
              isHovered && styles.textHovered,
            ]}
          >
            Si necesitas ayuda con un pedido haz click aquí
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
