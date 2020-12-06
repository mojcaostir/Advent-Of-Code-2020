import fs from "fs";

export function readFileSplitByEmptyLines(file: string) : string[]{
  return fs.readFileSync(__dirname + file, 'utf-8').trim().split(/\n\n/);
}
