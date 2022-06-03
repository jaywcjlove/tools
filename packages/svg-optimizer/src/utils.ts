/**
 * Use an array dictionary of units to be accessed based on the exponent.
 * Use `Number.prototype.toPrecision()` to truncate the number to a certain number of digits.
 * Return the prettified string by building it up, taking into account the supplied options and whether it is negative or not.
 * Omit the second argument, `precision`, to use a default precision of `3` digits.
 * Omit the third argument, `addSpace`, to add space between the number and unit by default.
 */
export const prettyBytes = (num: number, precision = 3, addSpace = true) => {
  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];
  const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);
  const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision));
  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
};

export function fileReader(file: File, type: 'base64' | 'text'): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    if (type === 'base64') reader.readAsDataURL(file);
    if (type === 'text') reader.readAsText(file);
    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      } else {
        resolve('');
      }
    };
    reader.onerror = (err) => {
      reject(err);
    };
  });
}

export function round(num: number, places: number) {
  const mult = 10 ** places;
  return Math.floor(Math.round(num * mult)) / mult;
}
