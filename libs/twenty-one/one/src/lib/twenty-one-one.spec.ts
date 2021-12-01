import { partOne, partTwo } from './twenty-one-one';
import { testInput, probInput } from './inputs';

describe('2021 Day One', () => {
  it('PART ONE', () => {
    expect(partOne(<number[]>testInput)).toEqual(7);
    // console.log();
    console.log(`PART ONE ANSWER: ${partOne(<number[]>probInput)}`);
  });

  it('PART TWO', () => {
    expect(partTwo(<number[]>testInput)).toEqual(5);
    console.log(`PART TWO ANSWER: ${partTwo(<number[]>probInput)}`);
  });
});
