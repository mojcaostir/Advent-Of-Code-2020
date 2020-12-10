import {readFileSplitByNewLine} from "../util";

function findTheNumber(data: number[]): number | string {
  outer:
  for (let checkNumber = 25; checkNumber < data.length; checkNumber++) {
    let preamble = 25;
    for(let i = checkNumber - preamble; i < data.length; i++) {
      for(let j = i + 1; j < Math.min(i + checkNumber, checkNumber); j++) {
        if(data[checkNumber] == (data[i] + data[j])) {
          continue outer
        }
      }
    }
    return data[checkNumber]
  }
  return "Everyone has sum"
}

const fileData = readFileSplitByNewLine('/day09/input.txt').map(Number);

const day09part1Result = findTheNumber(fileData);

console.log('First number not being sum of any two 25-previously: ' + day09part1Result);
