import fs from 'fs';

const data: string[] =
  fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n');

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

console.log(trees)
