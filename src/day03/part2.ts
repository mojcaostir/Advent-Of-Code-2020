import {readFileSplitByNewLine} from "../util";

const data = readFileSplitByNewLine('/day03/input.txt');

function slope(stepX: number, stepY: number) {
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

const a = slope(1,1);
const b = slope(3,1);
const c = slope(5,1);
const d = slope(7,1);
const e = slope(1,2);

console.log(a*b*c*d*e)
