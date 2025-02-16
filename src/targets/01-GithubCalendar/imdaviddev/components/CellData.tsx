import React from "react";
import { View } from "react-native";
import { styles } from "../styles";
import { getColorCell } from "../functions";

interface CellDataProps {
  cantidadCommit: number;
}

export default function CellData({ cantidadCommit }: CellDataProps) {
  const colorCell = { backgroundColor: getColorCell(cantidadCommit) };
  return <View style={[styles.cellData, colorCell]} />;
}
