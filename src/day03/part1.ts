import {readFileSplitByNewLine} from "../util";

function treeEncounterCounter(data: string[]) : number {
  const step = {sx: 3, sy: 1};
  let trees = 0;
  let x = 0;
  for (let y = 0; y < data.length - 1; y++) {
    const pos = {x: (step.sx + x) % 31, y: step.sy + y}
    const char = data[pos.y].charAt(pos.x)
    if (char == '#') {
      trees++
    }
    x = pos.x
  }
  return trees
}

const data = readFileSplitByNewLine('/day03/input.txt');

const day03part1Result = treeEncounterCounter(data);

console.log('Number of tree encounters: ' + day03part1Result)
