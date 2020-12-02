import fs from 'fs';

const data: string[] =
  fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n');

let count = 0;
for(const pass of data) {
  const splitEntry = pass.split(/[\s,-]+/)
  const min = parseInt(splitEntry[0])
  const max = parseInt(splitEntry[1])
  const char = splitEntry[2].replace(':', '')
  const string = (splitEntry[3])
  const numberOfOccurrences = string.split(char).length-1
  if(min <= numberOfOccurrences && max>= numberOfOccurrences)
  {count++}
  console.log(count)
}
