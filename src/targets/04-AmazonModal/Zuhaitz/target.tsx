import { useState } from "react";
import { View } from "react-native";

import { LinkComponent, ModalComponent } from "./components";

const AmazonModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{ margin: "auto" }}>
      <ModalComponent showModal={showModal} setShowModal={setShowModal} />

      <LinkComponent
        text="Informar de un problema con este producto."
        onClick={() => setShowModal(true)}
      />
    </View>
  );
};

export default AmazonModal;
