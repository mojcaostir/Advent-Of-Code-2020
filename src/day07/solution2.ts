import {readFileSplitByNewLine} from "../util";

let lines = readFileSplitByNewLine('/day07/input.txt');

let bags = {};

// collect bags in format: { 'dim red' : [ [2, 'bright gold'], [5, 'striped fuchsia'] ] }
for (const line of lines) {
  // split bag types after outer bag type
  let innerBagTypes = line.replace(/.*?bags/, "").split(",");
  // trim to just [number, bag name]
  // @ts-ignore
  innerBagTypes = innerBagTypes.map(x => [Number(x.replace(/[^\d]+/g, "")), x.replace(/.*\d /, "").replace(/[^a-zA-Z ]/g, "").replace(/(bags|bag)/,"").trim()])
  // set object at outer bag type
  // @ts-ignore
  bags[line.replace(/bags.*/, "").trim()] = innerBagTypes;
}

// count inner bags
function countInnerBags(bags: { [x: string]: any; }, bag: string) {
  // if does not contain any bags
  if (!bags[bag]) {
    return 0;
  }
  // count inner bags
  let innerBags = 0;
  for (const innerBag of bags[bag]) {
    // add innerBag[0] for number of current inner bag
    // plus innerBag[0] * the number of bags in the inner bag
    innerBags += innerBag[0] + innerBag[0] * countInnerBags(bags, innerBag[1]);
  }
  // return inner bags
  return innerBags;
}

console.log(countInnerBags(bags, "shiny gold"));
