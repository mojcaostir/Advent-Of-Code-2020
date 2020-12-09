import {readFileSplitByNewLine} from "../util";

const fileData = readFileSplitByNewLine('/day08/input.txt');

// @ts-ignore
function accumulatorLoopFinderMachine(data, findLoopExit = false, init = 0) {
  const inverses = { jmp: 'nop', nop: 'jmp' };
  const visitedInstructions = [];
  let accumulator = 0;
  let i = init;

  while (true) {
    if (visitedInstructions[i] !== undefined ) {
      return { failed: true, accumulator }
    }

    if( i > data.length - 1) {
      return { failed: false, accumulator }
    }

    const instruction = data[i].split(' ');
    const operation = instruction[0];
    const argument = parseInt(instruction[1], 10);

    if (operation === 'acc') {
      accumulator += argument
    }

    else if (findLoopExit) {
      // @ts-ignore
      const inverseInstruction = [inverses[operation], argument];
      const dataCopy = [].concat(data);
      // @ts-ignore
      dataCopy[i] = inverseInstruction.join(' ');
      // @ts-ignore
      const loop = accumulatorLoopFinderMachine(dataCopy, false, i);

      if (!loop.failed) {
        return loop.accumulator + accumulator
      }
    }

    // @ts-ignore
    visitedInstructions[i] = instruction;
    i += operation === 'jmp' ? argument : 1;
  }
}

const day08part2Result = accumulatorLoopFinderMachine(fileData, true);

console.log('Value of accumulator after the program terminates: ' + day08part2Result);

