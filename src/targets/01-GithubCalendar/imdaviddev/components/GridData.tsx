import { View } from "react-native";
import { Data } from "../interfaces";
import CellData from "./CellData";
import validarData from "../functions";
import { styles } from "../styles";
import React from "react";

interface GridDataProps {
  data: Data[];
}

export default function GridData({ data }: GridDataProps) {
  const dataList = validarData(data);

  return (
    <View style={styles.gridData}>
      {dataList.map((item, index) => (
        <CellData key={index} cantidadCommit={item.cantidadCommit} />
      ))}
    </View>
  );
}
