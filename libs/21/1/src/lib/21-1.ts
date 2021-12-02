export function partOne(input) {
  let runningTotal = 0;
  for (let i = 0; i < input.length; i++) {
    const currentNum = input[i];
    if (input[i] < input[i + 1]) {
      runningTotal++;
    }
  }
  console.log(runningTotal);
  return runningTotal;
}

export function partTwo(input) {}
