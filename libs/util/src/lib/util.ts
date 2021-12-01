import * as fs from 'fs';

/***
 * PARSE ARRAY FROM TEXT FILE
 *
 * @param {String} path - path to file relative to root
 * @param {Array<String>} delimeters - MAX LENGTH 2 string to split by
 * @param {Boolean} convertToNum - convert final array to number
 */
export function parseArrayFromText(
  path: string,
  delimiters: string[],
  convertToNum: boolean
): string[] | number[] {
  const file = fs.readFileSync(path).toString();
  let result: any[] = file.split(delimiters[0]);
  delimiters = delimiters.slice(1);
  if (delimiters.length) {
    result = result.map((x) => x.split(delimiters[0]));
    if (convertToNum) {
      const newResult = [];
      result.forEach((res) => {
        newResult.push(res.map((x) => +x));
      });
      result = newResult;
    }
  } else {
    if (convertToNum) {
      result = result.map((x) => +x);
    }
  }
  return result;
}

function splitArray(array: string[], delimiter: string) {
  return array.map((x) => x.split(delimiter));
}
