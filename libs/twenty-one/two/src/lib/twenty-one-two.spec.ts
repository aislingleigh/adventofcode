import { partOne, partTwo } from './twenty-one-two';
import { testInput, probInput } from './inputs';

describe('2021 DAY TWO', () => {
  it('PART ONE', () => {
    expect(partOne(testInput)).toEqual('');
    console.log(`PART ONE ANSWER: ${partOne(probInput)}`);
  });

  it('PART TWO', () => {
    expect(partTwo(testInput)).toEqual('');
    console.log(`PART TWO ANSWER: ${partTwo(probInput)}`);
  });
});
