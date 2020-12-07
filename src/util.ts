import fs from "fs";

export function readFileSplitByNewLine(file: string) : string[]{
  return fs.readFileSync(__dirname + file, 'utf-8').trim().split('\n');
}

export function readFileSplitByEmptyLine(file: string) : string[]{
  return fs.readFileSync(__dirname + file, 'utf-8').trim().split(/\n\n/);
}
