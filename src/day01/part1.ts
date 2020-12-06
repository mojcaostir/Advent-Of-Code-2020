import {readFileSplitByNewLine} from "../util";

function multiplyTwoThatSumTo2020(data: number[]): number | undefined {
  for (const number of data) {
    for (let i = 0; i < data.length; i++) {
      if (number + data[i] == 2020) {
        return number * data[i]
      }
    }
  }
}

const data = readFileSplitByNewLine('/day01/input.txt').map(Number);

const day01part1Result = multiplyTwoThatSumTo2020(data);

console.log('Multiplied two expenses that sum up to 2020: ' + day01part1Result);
