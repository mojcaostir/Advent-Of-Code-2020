import {readFileSplitByNewLine} from "../util";

function findTheSum(data: number[], number: number | string): number | string {
  for(let i = 0; i < data.length; i++) {
    let sum = data[i];
    const min = data[i]
    for(let j = i + 1; j < data.length; j++) {
      const max = data[j]
      sum += data[j]
      if(number == sum) {
        return min + max
      }
    }
  }
  return "No encription weakness found"
}

const fileData = readFileSplitByNewLine('/day09/input.txt').map(Number);

const day09part2Result = findTheSum(fileData, 20874512);

console.log('Encryption weakness: ' + day09part2Result);
