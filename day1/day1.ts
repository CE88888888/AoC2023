import { getExampleInput, getPuzzleInput } from "../helper/inputs";

const example: string[] = getExampleInput(__dirname);
const input: string[] = getPuzzleInput(__dirname);

console.log(`Part 1 example: ${solve1(example)}`);
console.log(`Part 1 solution: ${solve1(input)}`);
console.log(`Part 2 example: ${solve2(example)}`);
console.log(`Part 2 solution: ${solve2(input)}`);

function solve1(lines: string[], sum = 0) {
  lines.forEach((line) => (sum = sum + decodeBasic(line)));
  return sum;
}

function solve2(lines: string[], sum = 0) {
  lines.forEach((line) => (sum = sum + decodeAdvanced(line)));
  return sum;
}

function decodeBasic(line: string) {
  let arr = [...line].filter((char) => !isNaN(+char));
  return +(arr.at(0) + arr.at(-1));
}

function decodeAdvanced(line: string) {
  const stringNumbers = [
    ["1", "one"],
    ["2", "two"],
    ["3", "three"],
    ["4", "four"],
    ["5", "five"],
    ["6", "six"],
    ["7", "seven"],
    ["8", "eight"],
    ["9", "nine"],
  ];
  stringNumbers.forEach((sn) => (line = transform(line, [sn[0], sn[1]])));
  return decodeBasic(line);
}

function transform(line: string, [sn, stringnum]) {
  let arr = [...stringnum];
  arr.splice(2, 0, sn);
  return line.replaceAll(stringnum, arr.join());
}
