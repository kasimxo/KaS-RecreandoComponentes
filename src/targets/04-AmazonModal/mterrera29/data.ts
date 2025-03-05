export type Select = {
  id: number;
  text: string;
};

export const dataSelect: Select[] = [
  { id: 1, text: 'Hay un problema con mi pedido' },
  {
    id: 2,
    text: 'Falta parte de la informacion del producto, es incorrecta o se podría mejorar',
  },
  { id: 3, text: 'Hay partes de esta página que no coinciden' },
];

export const dataLabels: string[] = [
  '¿Qué tiene de malo esta página? *',
  '¿Qué información falta o necesita mejorar? *',
];

export const dataSelectMissingInfo: { id: number; text: string }[] = [
  { id: 1, text: 'Imagenes' },
  { id: 2, text: 'Tamaño/dimensiones' },
  { id: 3, text: 'Información del lanzamiento' },
  { id: 4, text: 'Modelo/edición' },
  { id: 5, text: 'Marca' },
  { id: 6, text: 'Otro' },
];

export const dataNoMatch: { id: number; text: string }[] = [
  { id: 1, text: 'Opiniones' },
  { id: 2, text: 'Imágenes' },
  { id: 3, text: 'Título' },
  { id: 4, text: 'Lista de características' },
  { id: 5, text: 'Marca' },
  { id: 6, text: 'Otro' },
];
