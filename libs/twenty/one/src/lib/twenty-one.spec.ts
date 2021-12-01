import { partOne, partTwo } from './twenty-one';
import { testInput, probInput } from './inputs';
describe('twentyOne', () => {
  it('Part One', () => {
    expect(partOne(<number[]>testInput)).toEqual(514579);
    console.log(`PART ONE ANSWER: ${partOne(<number[]>probInput)}`);
  });

  it('Part Two', () => {
    expect(partTwo(<number[]>testInput)).toEqual(241861950);
    console.log(`PART TWO ANSWER: ${partTwo(<number[]>probInput)}`);
  });
});
