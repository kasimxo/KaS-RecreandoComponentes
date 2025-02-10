export enum DayConstans {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

export enum MonthConstants {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

export type Day = keyof typeof DayConstans;
export type Month = keyof typeof MonthConstants;

export interface Label {
  label: string;
}

export interface Data {
  cantidadCommit: number;
  // day: Day | string | number;
  // month: Month | string | number;
  numberDay: number;
}

export interface ServiceData {
  getData: () => Promise<Data[]>;
}
