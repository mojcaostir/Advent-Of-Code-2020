import {readFileSplitByNewLine} from "../util";

type Instruction = [string, number]

function splitInstructions(data: string[]): Instruction[] {
  const instructions = [];
  for (let instrIndex = 0; instrIndex < data.length; instrIndex ++) {
    // @ts-ignore
    let array: Instruction = []
    const instruction = data[instrIndex].split(" ");
    const operation = instruction[0];
    const argument = parseInt(instruction[1], 10);
    // @ts-ignore
    array.push(operation, argument);
    instructions.push(array)
  }
  return instructions
}

export function accumulatorMachine(instructions: Instruction[]): number {
  let accumulator = 0;
  let visitedInstructions: number[] = [];
  let step = 0;
  for (let instrIndex = 0; instrIndex < instructions.length; instrIndex += step) {

    const operation = instructions[instrIndex][0];
    const argument = instructions[instrIndex][1];

    if(visitedInstructions.includes(instrIndex)) {
      return accumulator
    }
    if (operation === "nop") {
      step = 1;
    } else if (operation === "acc") {
        accumulator += argument;
        step = 1;
    } else if (operation === "jmp") {
        step = argument;
    }
    visitedInstructions.push(instrIndex);
  }
  return accumulator
}

const fileData = readFileSplitByNewLine('/day08/input.txt');

const instructions = splitInstructions(fileData);

const day08part1Result = accumulatorMachine(instructions);

console.log('Value of accumulator: ' + day08part1Result);
