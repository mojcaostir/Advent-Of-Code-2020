import {readFileSplitByNewLine} from "../util";

function validPasswordsPart1(data: string[]): number {
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
  }
  return count
}

const data = readFileSplitByNewLine('/day02/input.txt');

const day02part1Result = validPasswordsPart1(data)

console.log('Number of valid passwords according to part 1 policies: '+ day02part1Result)
