import { INoticias } from './fakeRest';

/**
 * Function that gets a string, split it and map each word turning
 * the first letter into caps, and join the string again
 * @param { string } title
 * @returns string
 */

const titleFirstLettersToUpperCase = (title: string) => {
  return title
    .split(' ')
    .map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(' ');
};

/**
 * Function that gets minutes elapsed between two dates
 * @param  { Date object } now
 * @param  { Date object } date
 * @returns a number of minutes elapsed
 */

const calculateMinutes = (now: Date, date: Date) => {
  return Math.floor((now.getTime() - date.getTime()) / 60000);
};

/**
 * Function that normalizes the news recieved, putting the first letters in caps,
 * getting the minutes elapsed and adding a shorten description
 * @param {object} n
 * @returns an object with normalized news
 */

export const NormalizedNews = (n: INoticias) => {
  const titulo = titleFirstLettersToUpperCase(n.titulo);
  const ahora = new Date();
  const minutosTranscurridos = calculateMinutes(ahora, n.fecha);

  return {
    id: n.id,
    titulo,
    descripcion: n.descripcion,
    fecha: `Hace ${minutosTranscurridos} minutos`,
    esPremium: n.esPremium,
    imagen: n.imagen,
    descripcionCorta: n.descripcion.substring(0, 100),
  };
};
