import {readFileSplitByNewLine} from "../util";
import {arraySeatIDs} from "./helpers";

const data = readFileSplitByNewLine('/day05/input.txt');

const seatIDs = arraySeatIDs(data);

const day05part1Result = Math.max(...seatIDs)

console.log("Highest seatID: " + day05part1Result)


