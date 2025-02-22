import { FlatList, View } from "react-native";
import Item from "./Item";
import Button from "./Boton";
import IconoDelete from "./IconoDelete";

export default function ListaItem({
  items,
  onRemove,
}: {
  items: string[];
  onRemove: (index: number) => void;
}) {
  return (
    <View
      style={{
        borderRadius: 5,
        minHeight: 200,
        marginTop: 10,
        marginBottom: 8,
      }}
    >
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#12233f",
              padding: 10,
              borderRadius: 15,
              marginBottom: 5,
              paddingLeft: 15,
            }}
          >
            <Item text={item} />
            <IconoDelete onPress={() => onRemove(index)} />
          </View>
        )}
      />
    </View>
  );
}
