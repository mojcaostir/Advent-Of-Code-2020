import {readFileSplitByNewLine} from "../util";

function Day10Part2(inputArray: any[]) {
  //How many different ways can you arrange the adapters to get from zero jolts to 169?
  var arrangements = 1;
  inputArray.sort(function(a,b) {return a - b});
  inputArray.push(inputArray[inputArray.length - 1] + 3);
  console.log(inputArray);
  var tribonacci = [0,1,2,4,7,13,24]; //INDEX corresponds to how many arrangements for that many integers
  for (let i = 7; i < 80; i++) {
    var newElem = tribonacci[i-1] + tribonacci[i-2] + tribonacci[i-3];
    tribonacci.push(newElem);
  }
  var oneJoltDifferences = 0;
  for (let i = 0; i < inputArray.length; i++) {
    var diff = ( i == 0 ? (inputArray[i] - 0) : (inputArray[i] - inputArray[i-1]) );
    if (diff == 1) {
      oneJoltDifferences++;
    } else {
      if(oneJoltDifferences > 0) {
        arrangements*=tribonacci[oneJoltDifferences];
        oneJoltDifferences = 0;
      }
    }
  }
  return(arrangements);
}

const fileData = readFileSplitByNewLine('/day10/input.txt').map(Number);

const day10part2Result = Day10Part2(fileData);

console.log(day10part2Result)
