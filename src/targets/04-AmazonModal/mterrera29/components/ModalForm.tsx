import { useState } from 'react';
import {
  Pressable,
  View,
  Image,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import { styles, stylesModalContent, stylesModalSelect } from '../styles';
import ModalFormSelect from './ModalFormSelect';
import { dataLabels, dataSelectMissingInfo, dataSelect, Select } from '../data';
import ModalFormHelp from './ModalFormHelp';
import ModalFormInput from './ModalFormInput';
import ModalFormButton from './ModalFormButton';
import ModalFormCheckbox from './ModalFormCheckbox';

type ModalFormProps = {
  isOpenSelect: boolean;
  setIsOpenSelect: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalForm({
  isOpenSelect,
  setIsOpenSelect,
}: ModalFormProps) {
  const [selectValue, setSelectValue] = useState({
    id: 0,
    text: 'Seleccionar',
  });
  const [selectValueMissingInfo, setSelectValueMissingInfo] = useState({
    id: 0,
    text: 'Seleccionar',
  });

  const handleValues = (data: Select) => {
    setSelectValue(data);
    setIsOpenSelect(false);
  };

  const handleValuesMissingInfo = (data: Select) => {
    setSelectValueMissingInfo(data);
    setIsOpenSelect(false);
  };

  return (
    <View
      style={{ display: 'flex', flex: 1, position: 'relative', width: '100%' }}
    >
      <ModalFormSelect
        label={dataLabels[0]}
        setIsOpenSelect={setIsOpenSelect}
        selectValue={selectValue}
        isOpenSelect={isOpenSelect}
        handleValues={handleValues}
        data={dataSelect}
      />
      {selectValue.id === 0 && <ModalFormButton />}
      {selectValue.id === 1 && (
        <ModalFormHelp isOpenSelect={isOpenSelect} advisor={false} />
      )}
      {selectValue.id === 2 && (
        <View style={{ position: 'relative', zIndex: 900 }}>
          <ModalFormSelect
            label={dataLabels[1]}
            setIsOpenSelect={setIsOpenSelect}
            selectValue={selectValueMissingInfo}
            isOpenSelect={isOpenSelect}
            handleValues={handleValuesMissingInfo}
            data={dataSelectMissingInfo}
          />
          {selectValueMissingInfo.id !== 0 && <ModalFormInput />}
          <ModalFormHelp isOpenSelect={isOpenSelect} advisor={true} />
          <ModalFormButton />
        </View>
      )}
      {selectValue.id === 3 && (
        <ModalFormCheckbox isOpenSelect={isOpenSelect} />
      )}
    </View>
  );
}
