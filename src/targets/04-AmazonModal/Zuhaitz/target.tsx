import { useState } from "react";
import { View, Text, Pressable, Modal, StyleSheet, Image } from "react-native";
import { styles } from "./styles";

const AmazonModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{ margin: "auto" }}>
      <Modal animationType="none" transparent visible={showModal}>
        <View style={me.centeredView}>
          <View style={me.modalView}>
            <Text>Modal text</Text>
            <Text onPress={() => setShowModal(false)}>Amazon Modal</Text>
          </View>
        </View>
      </Modal>

      <View>
        <Text onPress={() => setShowModal(true)} style={styles.link}>
          <Image
            source={require("@assets/mensaje.png")}
            style={styles.icon}
            tintColor={"white"}
          />
          Informar de un problema con este producto
        </Text>
      </View>
    </View>
  );
};

export default AmazonModal;

const me = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000055",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
