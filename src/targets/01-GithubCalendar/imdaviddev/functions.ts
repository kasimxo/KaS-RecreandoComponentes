import { activityColors, CANTIDAD_ELEMENTOS, colors } from "./constants";
import { Data } from "./interfaces";

export default function validarData(data: Data[]): Data[] {
  const dataValidada = [];
  for (let i = 0; i < CANTIDAD_ELEMENTOS; i++) {
    const dataDia = data.find((data) => data.numberDay === i);
    if (dataDia) {
      dataValidada.push(dataDia);
    } else {
      dataValidada.push({
        numberDay: i + 1,
        cantidadCommit: 0,
        day: "",
        month: "",
      });
    }
  }
  return dataValidada;
}

export function getColorCell(cantidadCommit: number): string {
  switch (true) {
    case cantidadCommit < 5:
      return activityColors.low;
    case cantidadCommit < 15:
      return activityColors.moderate;
    case cantidadCommit < 30:
      return activityColors.regular;
    case cantidadCommit < 50:
      return activityColors.high;
    case cantidadCommit < 75:
      return activityColors.veryHigh;
    case cantidadCommit >= 75:
      return activityColors.extreme;
    default:
      return colors.gray;
  }
}
