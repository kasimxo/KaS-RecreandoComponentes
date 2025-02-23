import { useState } from "react";
import { TextInput, View } from "react-native";
import Button from "./Boton";
import IconoDelete from "./IconoDelete";

export default function BotonAdd({
  onAdd,
}: {
  onAdd: (newCard: string) => void;
}) {
  const [show, setShow] = useState(false);
  const [newCard, setNewCard] = useState("");

  const handleToggleDrownDropAdd = () => {
    setShow(!show);
  };

  const onChangeNewCard = (e: any) => {
    setNewCard(e.target.value);
  };

  const handleAdd = () => {
    setShow(false);
    setNewCard("");
    if (newCard.trim() === "") return;
    onAdd(newCard);
  };

  return (
    <>
      {!show && (
        <Button
          title="+ Añade una tarjeta"
          onPress={handleToggleDrownDropAdd}
          buttonStyle={{ backgroundColor: "#12233f" }}
        />
      )}
      {show && (
        <>
          <TextInput
            style={{
              backgroundColor: "#12233f",
              color: "white",
              padding: 8,
              borderRadius: 8,
              marginBottom: 10,
            }}
            placeholder="Escribe el titulo de la tarjeta"
            onChange={onChangeNewCard}
            maxLength={30}
          />
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#12233f",
                height: 40,
                width: 40,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconoDelete onPress={handleToggleDrownDropAdd} />
            </View>
            <Button
              title="Añadir Tarjeta"
              onPress={handleAdd}
              buttonStyle={{
                backgroundColor: "#12233f",
                borderRadius: 10,
                flex: 1,
              }}
            />
          </View>
        </>
      )}
    </>
  );
}
