import { View, Text, Modal, Image, Pressable } from "react-native";

import { modal, styles } from "../styles";

const ModalComponent = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}) => {
  return (
    <Modal animationType="none" transparent visible={showModal}>
      <View style={modal.container}>
        <View style={modal.box}>
          <View style={modal.topbar}>
            <Text style={{ flex: 1, fontWeight: "bold", fontSize: 16 }}>
              Informar de un problema
            </Text>
            <Pressable
              style={{ padding: 10 }}
              onPress={() => setShowModal(false)}
            >
              <Image
                source={require("@assets/cancelar.png")}
                style={styles.icon}
              />
            </Pressable>
          </View>

          <View>
            <Text>Cuéntanos cuál es el problema.</Text>
            <Text>¿Qué hay de malo en esta página? *</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
