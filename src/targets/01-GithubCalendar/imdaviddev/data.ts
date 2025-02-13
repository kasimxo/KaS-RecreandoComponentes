import { Data, DayConstans } from "./interfaces";

export const data: Data[] = generateRandomData(365);

function generateRandomData(days: number): Data[] {
  const randomData: Data[] = [];
  let dayCounter = 1;
  let saltoProbailidad = 3;

  while (dayCounter <= days) {
    const randomSalto = Math.floor(Math.random() * saltoProbailidad) + 1;
    randomData.push({
      cantidadCommit: Math.floor(Math.random() * 100),
      numberDay: dayCounter,
    });
    dayCounter += randomSalto;
  }

  return randomData;
}
