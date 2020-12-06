import {readFileSplitByNewLine} from "../util";

function treeEncounterCounterPart2(stepX: number, stepY: number) {
  let trees = 0;
  let x = 0;
  for (let y = 0; y < data.length-1; y = y + stepY) {
    const pos = {x: (stepX + x) % 31, y: stepY + y}
    if (data[pos.y]== undefined) {
      return trees
    }
    const char = data[pos.y].charAt(pos.x)
    if (char == '#') {
      trees++
    }
    x = pos.x
  }
  return trees
}

const data = readFileSplitByNewLine('/day03/input.txt');

const slope1Number = treeEncounterCounterPart2(1,1);
const slope2Number = treeEncounterCounterPart2(3,1);
const slope3Number = treeEncounterCounterPart2(5,1);
const slope4Number = treeEncounterCounterPart2(7,1);
const slope5Number = treeEncounterCounterPart2(1,2);

const day03part2Result = slope1Number * slope2Number * slope3Number * slope4Number * slope5Number

console.log('Multiplied tree encounters: ' + day03part2Result)
