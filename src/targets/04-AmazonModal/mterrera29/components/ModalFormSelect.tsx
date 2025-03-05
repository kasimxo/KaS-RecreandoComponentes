import { useState } from 'react';
import { Pressable, View, Image, Text } from 'react-native';
import { stylesModalContent, stylesModalSelect } from '../styles';
import { Select } from '../data';

type ModalFormSelectProps = {
  label: string;
  setIsOpenSelect: React.Dispatch<React.SetStateAction<boolean>>;
  selectValue: Select;
  isOpenSelect: boolean;
  handleValues: (data: Select) => void;
  data: Select[];
};

export default function ModalFormSelect({
  label,
  setIsOpenSelect,
  isOpenSelect,
  data,
  handleValues,
  selectValue,
}: ModalFormSelectProps) {
  const [openThisSelect, setOpenThisSelect] = useState<boolean>(false);

  const handleOptions = (data: Select) => {
    handleValues(data);
    setIsOpenSelect(false);
    setOpenThisSelect(false);
  };

  const handleSelect = () => {
    setIsOpenSelect(true);
    setOpenThisSelect(true);
  };
  return (
    <View style={stylesModalContent.box1}>
      <Text style={stylesModalContent.modalContentText}>{label}</Text>
      <Pressable
        style={({ pressed }) => [
          stylesModalContent.select,
          { borderColor: pressed ? '#2162a1' : '#d5d9d9' },
        ]}
        onPress={() => handleSelect()}
      >
        <Text>{selectValue.text}</Text>
        <View style={stylesModalContent.iconVContainer}>
          <Image
            style={stylesModalContent.iconV}
            source={require('@assets/flecha-abajo.png')}
          />
        </View>
        {isOpenSelect && openThisSelect && (
          <View style={stylesModalSelect.selectOptionsContainer}>
            {data.map((data) => (
              <Pressable
                style={({ pressed }) => [
                  stylesModalSelect.selectOptions,
                  {
                    borderColor: pressed ? '#2162a1' : '#ffffff',
                    backgroundColor: pressed ? '#f0f2f2' : '#ffffff',
                  },
                ]}
                key={data.id}
                onPress={() => handleOptions(data)}
              >
                <Text>{data.text} </Text>
              </Pressable>
            ))}
          </View>
        )}
      </Pressable>
    </View>
  );
}
