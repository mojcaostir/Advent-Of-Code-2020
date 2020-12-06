import {readFileSplitByNewLine} from "../util";

function multiplyThreeThatSumTo2020(data: number[]): number | undefined {
  for (let k = 0; k < data.length; k++) {
    const number1 = data[k]
    for (let i = k+1; i < data.length; i++) {
      const number2 = data[i]
      for (let j = i+1; j < data.length; j++) {
        const number3 = data[j]
        if (number1 + number2 + number3  == 2020) {
          return number1 * number2 * number3
        }
      }
    }
  }
}

const data = readFileSplitByNewLine('/day01/input.txt').map(Number);

const day01part2Result = multiplyThreeThatSumTo2020(data);

console.log('Multiplied three expenses that sum up to 2020: ' + day01part2Result);
