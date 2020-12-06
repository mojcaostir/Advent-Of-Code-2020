import {readFileSplitByNewLine} from "../util";

const data = readFileSplitByNewLine('/day01/input.txt').map(Number);

for (const number of data) {
  for (let i = 0; i < data.length; i++) {
    if (number + data[i] == 2020) {
      const res: number = number * data[i]
      console.log(res)
    }
  }
}
