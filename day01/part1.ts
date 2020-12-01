import fs from 'fs';

const data: number[] =
  fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n').map(Number);

for (const number of data) {
  for (let i = 0; i < data.length; i++) {
    if (number + data[i] == 2020) {
      const res: number = number * data[i]
      console.log(res)
    }
  }
}
