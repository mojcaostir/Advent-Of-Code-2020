import {readFileSplitByNewLine} from "../util";
import {arraySeatIDs} from "./helpers";

function missingSeatID(seatIDs: any[]): number {
  seatIDs.sort(function(a: number, b: number) {
    return a - b;
  })

  let mySeatID = undefined;
  for (let i = 0; i < seatIDs.length-1; i++) {
    const seatID = seatIDs[i]
    const nextSeatId = seatIDs[i+1]
    if (!(seatID == (nextSeatId - 1))) {
      mySeatID = seatID + 1
    }
  }
  return mySeatID
}

const data = readFileSplitByNewLine('/day05/input.txt');

const seatIDs = arraySeatIDs(data);

const day05part2Result = missingSeatID(seatIDs);

console.log("My seatID: " + day05part2Result)
