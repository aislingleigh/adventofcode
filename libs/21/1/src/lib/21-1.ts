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

export function partTwo(input) {
  let runningTotal = 0;
  let currentSelection = input.slice(0, 2);
  let previousSum;

  input.slice(2).forEach((x) => {
    if (currentSelection.length === 3)
      currentSelection = currentSelection.slice(1);

    currentSelection.push(x);

    const sum = currentSelection.reduce((a, b) => a + b);

    if (sum > previousSum) runningTotal++;

    previousSum = sum;
  });

  return runningTotal;
}
