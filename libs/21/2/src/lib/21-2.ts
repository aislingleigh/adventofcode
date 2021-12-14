export function partOne(input: string[][]) {
  const position = { horizonatal: 0, depth: 0 };

  const x = input.map((line) =>
    line.map((s) => {
      const split = s.split(' ');
      return {
        horizontal: split[0],
        depth: +split[1],
      };
    })
  );

  const directions = x[0];
  console.log(directions);
}

export function partTwo(input: string[][]) {}
