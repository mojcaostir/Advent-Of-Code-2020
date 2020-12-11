import {readFileSplitByNewLine} from "../util";

function joltDifferences(data: number[]) {
  const adapters = data.sort((a, b) => a - b);
  let jolt1 = 1;
  let jolt3 = 1;
  for (let i = 0; i < adapters.length; i++) {
    if (adapters[i + 1] === adapters [i] + 1) {
      jolt1++
    } else if (adapters[i + 1] === adapters [i] + 3) {
      jolt3++
    }
  }
  return {jolt1, jolt3}
}

const fileData = readFileSplitByNewLine('/day10/input.txt').map(Number);

const jolts = joltDifferences(fileData);

const day10part1Result = jolts.jolt1 * jolts.jolt3;

console.log('The number of 1-jolt differences multiplied by the number of 3-jolt differences: ' + day10part1Result);
