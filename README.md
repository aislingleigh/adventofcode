# AOC

Uses nx.dev mono repo

## DAYS STRUCTURE

- \_.ts -- Contains the function called for Parts One and Two
- \_.spec.ts -- Contains the test for the two parts. Console logs the result from the problem input (Use it if your tests pass)
- inputs.ts -- Specifies how to parse the input
- test-input.txt -- Contains small test data set
- prob-input.txt -- Contains problem data set

## TO RUN A DAY'S SOLUTION

`nx test {year}-{day}`

Years

- twenty-one

Days

- one
- two
- ....

## TO WATCH TESTS WHILE WORKING SOLUTION

`nx test {year}-{day} --watch`

## UTILS

Some helper functions are located in the utils lib
[util](./libs/util/README.md)
