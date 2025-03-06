import { useState } from "react";
import { View, Text, Modal, Image, Pressable, Alert } from "react-native";

import Dropdown from "./Dropdown";
import { modal, styles } from "../styles";
import TextBox from "./TextBox";

const ModalComponent = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}) => {
  const [selected, setSelected] = useState("");
  const [comment, setComment] = useState("");

  const closeModal = () => {
    setSelected("");
    setComment("");
    setShowModal(false);
  };

  return (
    <Modal
      animationType="none"
      transparent
      visible={showModal}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setShowModal(!showModal);
      }}
    >
      <View style={modal.container}>
        <View style={modal.box}>
          <View style={modal.topbar}>
            <Text style={{ flex: 1, fontWeight: "bold", fontSize: 16 }}>
              Informar de un problema
            </Text>
            <Pressable style={{ padding: 10 }} onPress={closeModal}>
              <Image
                source={require("@assets/cancelar.png")}
                style={styles.icon}
              />
            </Pressable>
          </View>

          <View style={modal.content}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Cuéntanos cuál es el problema.
            </Text>
            <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
              ¿Qué hay de malo en esta página? *
            </Text>

            <Dropdown selected={selected} selectedHandle={setSelected} />

            {selected && <TextBox text={comment} setText={setComment} />}

            <View style={{ alignItems: "flex-end", marginTop: 18 }}>
              <Pressable onPress={closeModal} style={modal.sendBtn}>
                <Text>Enviar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
