import {readFileSplitByNewLine} from "../util";

const fileData = readFileSplitByNewLine('/day10/test1.txt').map(Number);

const adapters = fileData.sort((a, b) => a - b);

console.log(fileData)
