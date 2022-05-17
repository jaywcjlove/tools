export const toCamelCase = (str: string = '') => {
  const s =
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      ?.map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('') || '';
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

export const toSnakeCase = (str: string = '') =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join('_');

export const toKebabCase = (str: string = '') =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join('-');

export const toTitleCase = (str: string = '') =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');

export const toPascalCase = (str: string = '') =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join('');

export const swapCase = (str: string = '') =>
  [...str].map((c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase())).join('');

export const toPathCase = (str: string = '') => str.replace(/\s/g, '/');

export const toUpperCase = (str: string = '') => str.toLocaleUpperCase();
export const toLowerCase = (str: string = '') => str.toLocaleLowerCase();
export const toDotCase = (str: string = '') => str.replace(/(-|_|\s|\+|\/)+/g, '.');
