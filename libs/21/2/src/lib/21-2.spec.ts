import { partOne, partTwo } from './21-2';
import { testInput, probInput } from './inputs';

describe('212', () => {
  it.only('PART ONE', () => {
    expect(partOne(<string[][]>testInput)).toEqual(150);
    console.log(`PART ONE ANSWER: ${partOne(<string[][]>probInput)}`);
  });

  //it.only('PART TWO', () => {
  //    expect(partTwo(testInput)).toEqual('');
  //    console.log(`PART TWO ANSWER: ${partTwo(probInput)}`);
  //});
});
