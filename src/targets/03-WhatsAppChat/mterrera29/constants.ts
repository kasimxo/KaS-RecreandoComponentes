export const whatsappColors = [
  '#ffad46',
  '#ff6d1b',
  '#f06292',
  '#ba68c8',
  '#4fc3f7',
  '#64b5f6',
  '#4db6ac',
  '#81c784',
  '#ffd54f',
];

export const meses = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

export const formatearHora = (fecha: Date) => {
  const horas = fecha.getHours().toString().padStart(2, '0');
  const minutos = fecha.getMinutes().toString().padStart(2, '0');
  return `${horas}:${minutos}`;
};

export const marginUser = (isPrevUser: boolean, isPrevDay: boolean) => ({
  marginTop: !isPrevUser || !isPrevDay ? 6 : 2,
});

export const getShuffledColors = () =>
  [...whatsappColors].sort(() => Math.random() - 0.5);

export const formatDay = (fecha: Date) => {
  const dias = fecha.getDate().toString().padStart(2, '0');
  const mes = meses[fecha.getMonth()];
  const año = fecha.getFullYear();

  return `${mes} ${dias}, ${año}`;
};
